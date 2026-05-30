// scripts/lighthouse-audit.mjs
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const THRESHOLDS = {
  '/': { performance: 90, accessibility: 95, 'best-practices': 90, seo: 100 },
};

const BASE = process.env.AUDIT_BASE_URL || 'https://danielemingolla.com';

async function auditPath(path) {
  const url = `${BASE}${path}`;
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: Object.keys(THRESHOLDS[path]),
    port: chrome.port,
  };
  const runnerResult = await lighthouse(url, options);
  await chrome.kill();

  let failed = false;
  for (const [cat, min] of Object.entries(THRESHOLDS[path])) {
    const score = Math.round(runnerResult.lhr.categories[cat].score * 100);
    if (score < min) {
      console.error(`FAIL ${path} ${cat}: ${score} < ${min}`);
      failed = true;
    } else {
      console.log(`PASS ${path} ${cat}: ${score}`);
    }
  }
  return failed;
}

const failed = await auditPath('/');
if (failed) process.exit(1);
console.log('All hallmark thresholds met.');
