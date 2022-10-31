/* Add your JavaScript to this file */
window.onload = function () {
    document
      .getElementsByTagName("form")[0]
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let emailInput = document.getElementById("email");
        let userEmailInput = emailInput.value;
  
        if (isValidEmail(userEmailInput.trim())) {
          document.getElementsByClassName("message")[0].innerHTML =
            "Thank you! Your email address " +
            userEmailInput +
            " has been added to our mailing list!";
        } else {
          document.getElementsByClassName("message")[0].innerHTML =
            "Please enter a valid email address.";
        }
      });
  };
  
  function isValidEmail(emailAddress) {
    return /^[-a-z0-9~!$%^&_=+}{\'?]+(\.[-a-z0-9~!$%^&_=+}{\'?]+)@([a-z0-9_][-a-z0-9_](\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(
      emailAddress
    );
  }