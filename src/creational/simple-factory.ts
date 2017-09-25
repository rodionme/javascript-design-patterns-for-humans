interface Door {
  getWidth(): number;

  getHeight(): number;
}

class WoodenDoor implements Door {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}

const DoorFactory = {
  makeDoor: (width: number, height: number) => new WoodenDoor(width, height)
};

const door = DoorFactory.makeDoor(100, 200);

console.log('Width:', door.getWidth());   // => Width: 100
console.log('Height:', door.getHeight());   // => Height: 200