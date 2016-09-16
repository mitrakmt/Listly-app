window.onload = function() {

    $.get('https://mitrakmt-todo-api.herokuapp.com/', function(data) {
        console.log(data);
    });


// Create account
    $('#createAccount').on('click', function() {

        var account = {
            email: $('#email-input').val(),
            password: $('#password-input').val()
        }

        $.ajax({
            type: 'POST',
            url: 'https://mitrakmt-todo-api.herokuapp.com/users',
            data: JSON.stringify(account),
            contentType: 'application/json',
            success: function(user) {
                console.log(user);
            },
            error: function() {
                console.log("Error creating account");
            }
        });
    })

// Login
$('#login').on('click', function() {

    var account = {
        email: $('#login-email').val(),
        password: $('#login-password').val()
    }

    $.ajax({
        type: 'POST',
        url: 'https://mitrakmt-todo-api.herokuapp.com/users/login',
        data: JSON.stringify(account),
        contentType: 'application/json',
        success: function(user) {
            console.log(user);
        },
        error: function() {
            console.log("Error logging into account");
        }
    });
})

// Create todo
$('#postTodo').on('click', function() {

    var todo = {
      "description": "walk the dog",
      "completed": false
    }

    $.ajax({
        type: 'POST',
        url: 'https://mitrakmt-todo-api.herokuapp.com/todos',
        data: JSON.stringify(todo),
        headers: {"AuthToken": currentUser.hash},
        contentType: 'application/json',
        success: function(todo) {
            console.log(todo);
        },
        error: function() {d
            console.log("Error posting todo");
        }
    });
})

// Get todo
$('#getTodos').on('click', function() {

    $.ajax({
        type: 'GET',
        url: 'https://mitrakmt-todo-api.herokuapp.com/todos',
        contentType: 'application/json',
        success: function(todos) {
            console.log(todos);
        },
        error: function() {
            console.log("Error fetching todos");
        }
    });
})

// Logout
$('#logout-user').on('click', function() {

    var account = {
        email: "mike.mitrakos@gmail.com",
        password: "mtm13607"
    }

    $.ajax({
        type: 'DELETE',
        url: 'https://mitrakmt-todo-api.herokuapp.com/users/login',
        data: JSON.stringify(account),
        contentType: 'application/json',
        success: function(user) {
            console.log(user);
        },
        error: function() {
            console.log("Error logging out of account");
        }
    });
})




}
