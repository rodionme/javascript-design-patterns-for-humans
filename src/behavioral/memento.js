var EditorMemento = (function () {
    function EditorMemento(content) {
        this._content = content;
    }
    EditorMemento.prototype.getContent = function () {
        return this._content;
    };
    return EditorMemento;
}());
var Editor = (function () {
    function Editor() {
        this._content = '';
    }
    Editor.prototype.type = function (words) {
        this._content = this._content + ' ' + words;
    };
    Editor.prototype.getContent = function () {
        return this._content;
    };
    Editor.prototype.save = function () {
        return new EditorMemento(this._content);
    };
    Editor.prototype.restore = function (memento) {
        this._content = memento.getContent();
    };
    return Editor;
}());
var editor = new Editor();
// Пишем что-нибудь
editor.type('Это первое предложение.');
editor.type('Это второе.');
// Сохранение состояния в: This is the first sentence. This is second.
var saved = editor.save();
// Пишем ещё
editor.type('А это третье.');
// Output: Содержимое до сохранения
console.log(editor.getContent()); // => Это первое предложение. Это второе. А это третье.
// Восстанавливаем последнее сохранённое состояние
editor.restore(saved);
console.log(editor.getContent()); // => Это первое предложение. Это второе.
