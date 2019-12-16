// ===UserScript===
// @name          Bookmark Launcher
// @description   Launches bookmarks with keyboard shortcuts
// ===/UserScript===


var bookmarkLauncherSetup = (function() {
    var bookmarks = {}, url;

    bookmarks['gl'] = 'https://www.google.ch/';
    bookmarks['gi'] = 'https://www.youtube.com/';

    window.addEventListener('keyup', function() {
        if(event.ctrlKey && event.altKey && !event.shiftKey)
            if(url = bookmarks[String.fromCharCode(event.keyCode)])
                window.open(url);
    });
}());


bookmarkLauncherSetup
/*
Exception: TypeError: bookmarkLauncherSetup is not a function
@Scratchpad/1:21:1
*/
/*
undefined
*/