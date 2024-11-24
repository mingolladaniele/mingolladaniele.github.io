class GitHubProjects {
    constructor(username) {
        this.username = username;
        this.apiUrl = `https://api.github.com/users/${username}/repos`;
        this.projectsContainer = document.getElementById('github-projects');
    }

    async fetchProjects() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) throw new Error('Failed to fetch projects');
            const repos = await response.json();
            
            // Sort by stars and filter out forks and specific repo
            return repos
                .filter(repo => !repo.fork && repo.name !== 'mingolladaniele')
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 6); // Display top 6 projects
        } catch (error) {
            console.error('Error fetching projects:', error);
            return [];
        }
    }

    createProjectCard(repo) {
        return `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100 project-card">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex align-items-center mb-3">
                            <i class="fab fa-github text-muted me-2"></i>
                            <h5 class="card-title mb-0">${repo.name}</h5>
                        </div>
                        
                        <p class="card-text flex-grow-1">${
                            repo.description || 'No description available'
                        }</p>
                        
                        <div class="tech-stack mb-3">
                            ${(repo.topics || []).slice(0, 3).map(topic => 
                                `<span class="badge bg-light text-dark me-2">${topic}</span>`
                            ).join('')}
                        </div>
                        
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <a href="${repo.html_url}" class="btn btn-view-project" target="_blank">
                                <span class="btn-text">
                                    <i class="fab fa-github me-2"></i>View Project
                                </span>
                            </a>
                            <div class="project-stats">
                                <span class="badge bg-light text-dark me-2">
                                    <i class="fas fa-star me-1"></i>${repo.stargazers_count}
                                </span>
                                <span class="badge bg-light text-dark">
                                    <i class="fas fa-code-branch me-1"></i>${repo.forks_count}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    async init() {
        const projects = await this.fetchProjects();
        if (projects.length === 0) {
            this.projectsContainer.innerHTML = `
                <div class="col-12 text-center">
                    <p>No projects available at the moment.</p>
                </div>
            `;
            return;
        }

        this.projectsContainer.innerHTML = projects
            .map(repo => this.createProjectCard(repo))
            .join('');
    }
}

// Initialize GitHub projects
document.addEventListener('DOMContentLoaded', () => {
    const githubProjects = new GitHubProjects('mingolladaniele');
    githubProjects.init();
}); 