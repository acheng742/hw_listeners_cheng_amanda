// Form branch

var firstName = document.getElementById( "first" );
var lastName = document.getElementById( "last" );
var email = document.getElementById( "email" );
var comment = document.getElementById( "comment" );

document.addEventListener( "submit", function() {
        console.log("The firstName is: " + firstName.value);
        console.log("The lastName is: " + lastName.value);
        console.log("The email is: " + email.value);
        console.log("The message is: " + comment.value);
});
