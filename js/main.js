// Listener branch

var header = document.getElementById('h1');
var i = 0;

header.addEventListener('click', function () {
    var paragraph = document.createElement('paragraph');
    paragraph.innerHTML = '<p>This is click number</p>' + (++i);
    document.getElementById('h1').appendChild(paragraph);
});
