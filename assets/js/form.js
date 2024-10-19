$(document).ready(function () {
  $("#contact-form").validate({
    messages: {
      subject: {
        required: "Please enter your subject" //You can customise this message
      },
      message: {
        required: "Please enter your message" //You can customise this message
      }
    }
  });
  $("#emailsubmit").click(function (event) {
    event.preventDefault();
    if ($("#contact-form").valid()) {
      $(location).attr(
        "href",
        "mailto:daniele.mingolla.jobs@gmail.com?subject=" +
        encodeURIComponent($("#csubject").val()) +
        "&body=" +
        encodeURIComponent($("#cmessage").val())
      );
    }
  });
});
