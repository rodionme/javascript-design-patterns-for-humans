interface WritingState {
  write(words: string);
}

class UpperCase implements WritingState {
  write(words: string): void {
    console.log(words.toUpperCase());
  }
}

class LowerCase implements WritingState {
  write(words: string): void {
    console.log(words.toLowerCase());
  }
}

class Default implements WritingState {
  write(words: string): void {
    console.log(words);
  }
}


class TextEditor {
  private _state: WritingState;

  constructor(state: WritingState) {
    this._state = state;
  }

  setState(state: WritingState): void {
    this._state = state;
  }

  type(words: string): void {
    this._state.write(words);
  }
}


const editor = new TextEditor(new Default());

editor.type('First line');    // => First line

editor.setState(new UpperCase());

editor.type('Second line');    // => SECOND LINE
editor.type('Third line');    // => THIRD LINE

editor.setState(new LowerCase());

editor.type('Fourth line');    // => fourth line
editor.type('Fifth line');    // => fifth line