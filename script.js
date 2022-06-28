$(document).ready(function(){

    var pagesProtected = ['order.html', 'product.html', 'user.html'];

    var loggedIn = localStorage.getItem('loggedin');

    // checking protected pages

    if (pagesProtected.includes(location.pathname)) {

        // checking whether loggedin or not

        if (!loggedIn){
            location.replace('index.html')
        }
    }

    $('#logout-btn').click(function(){
        localStorage.removeItem('loggedin');
    })

    $('#login-btn').click(function(){

        var username = $('#username').val();
        var password = $('#password').val()

        if(username === password){
            localStorage.setItem('loggedin', true)

            alert('login Successful')

            location.href = '/order.html'
        } else {

            alert('please Enter Correct Credentials')

        }

    });
})
