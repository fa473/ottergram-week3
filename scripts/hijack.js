for (var i = 0; i < document.getElementsByTagName('a').length; i++) {
    document.getElementsByTagName('a')[i].addEventListener('click', function(event) {
        event.preventDefault();
    });
}
