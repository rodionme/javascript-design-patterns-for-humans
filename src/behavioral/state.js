var UpperCase = (function () {
    function UpperCase() {
    }
    UpperCase.prototype.write = function (words) {
        console.log(words.toUpperCase());
    };
    return UpperCase;
}());
var LowerCase = (function () {
    function LowerCase() {
    }
    LowerCase.prototype.write = function (words) {
        console.log(words.toLowerCase());
    };
    return LowerCase;
}());
var Default = (function () {
    function Default() {
    }
    Default.prototype.write = function (words) {
        console.log(words);
    };
    return Default;
}());
var TextEditor = (function () {
    function TextEditor(state) {
        this._state = state;
    }
    TextEditor.prototype.setState = function (state) {
        this._state = state;
    };
    TextEditor.prototype.type = function (words) {
        this._state.write(words);
    };
    return TextEditor;
}());
var editor = new TextEditor(new Default());
editor.type('First line'); // => First line
editor.setState(new UpperCase());
editor.type('Second line'); // => SECOND LINE
editor.type('Third line'); // => THIRD LINE
editor.setState(new LowerCase());
editor.type('Fourth line'); // => fourth line
editor.type('Fifth line'); // => fifth line
