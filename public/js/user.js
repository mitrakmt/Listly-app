window.onload = function () {

  $.get('https://mitrakmt-todo-api.herokuapp.com/', function (data) {
    console.log(data);
  });


  $('#createAccount').on('click', function() {

    var account = {
      email: $('#email-input').val(),
      password: $('#password-input').val()
    }

      $.ajax({
          type: 'POST',
          url: 'https://mitrakmt-todo-api.herokuapp.com/users',
          data: JSON.stringify(account),
          success: function(user) {
              console.log(user);
          },
          error: function() {
              console.log("Error creating account");
          }
      })
  })

}
