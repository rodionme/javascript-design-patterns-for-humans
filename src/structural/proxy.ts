interface Door {
  open(): void;
  close(): void;
}

class LabDoor implements Door {
  open(): void {
    console.log('Открытие лабораторной двери');
  }

  close(): void {
    console.log('Закрытие лабораторной двери');
  }
}


class Security {
  door: Door;

  constructor(door: Door) {
    this.door = door;
  }

  open(password: string): void {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Это невозможно.');
    }
  }

  authenticate(password: string): boolean {
    return password === '$ecr@t';
  }

  close(): void {
    this.door.close();
  }
}


const door = new Security(new LabDoor());

door.open('invalid');    // => Это невозможно.
door.open('$ecr@t');    // => Открытие лабораторной двери
door.close();    // => Закрытие лабораторной двери