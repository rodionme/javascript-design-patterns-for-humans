class EditorMemento {
  private _content: string;

  constructor(content: string) {
    this._content = content;
  }

  getContent(): string {
    return this._content;
  }
}


class Editor {
  private _content: string;

  constructor() {
    this._content = '';
  }

  type(words: string): void {
    this._content = this._content + ' ' + words;
  }

  getContent(): string {
    return this._content;
  }

  save(): EditorMemento {
    return new EditorMemento(this._content);
  }

  restore(memento: EditorMemento): void {
    this._content = memento.getContent();
  }
}


const editor = new Editor();

// Пишем что-нибудь
editor.type('Это первое предложение.');
editor.type('Это второе.');

// Сохранение состояния в: This is the first sentence. This is second.
const saved = editor.save();

// Пишем ещё
editor.type('А это третье.');

// Output: Содержимое до сохранения
console.log(editor.getContent());    // => Это первое предложение. Это второе. А это третье.

// Восстанавливаем последнее сохранённое состояние
editor.restore(saved);

console.log(editor.getContent());    // => Это первое предложение. Это второе.