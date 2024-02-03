// Write a JavaScript function that takes a callback and invokes it after a delay of 3 second.


function app(a) {
    setTimeout(a, 3000);
}
function message() {
    console.log('Hello!');
}
app(message);
