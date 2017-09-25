interface ChatRoomMediator {
  showMessage(user: User, message: string);
}

// Посредник
class ChatRoom implements ChatRoomMediator {
  showMessage(user: User, message: string) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}


class User {
  name: string;
  chatMediator: ChatRoomMediator;

  constructor(name: string, chatMediator: ChatRoomMediator) {
    this.name = name;
    this.chatMediator = chatMediator;
  }

  getName(): string {
    return this.name;
  }

  send(message): void {
    this.chatMediator.showMessage(this, message);
  }
}


const mediator = new ChatRoom();

const john = new User('John', mediator);
const jane = new User('Jane', mediator);

john.send('Hi there!');    // => Feb 14, 10:58 [John]: Hi there!
jane.send('Hey!');    // => Feb 14, 10:58 [Jane]: Hey!
