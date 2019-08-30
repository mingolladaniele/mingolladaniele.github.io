$(document).ready(function () {
  $("#contact-form").validate({
    messages: {
      name: {
        required: "Please enter your name" //You can customise this message
      },
      email: {
        required: "Please enter your email" //You can customise this message
      },
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
        "mailto:danielemingolla98ta@gmail.com?subject=" +
        encodeURIComponent($("#csubject").val()) +
        "&body=" +
        encodeURIComponent($("#cmessage").val())
      );
    }
  });
});
