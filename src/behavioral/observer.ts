class JobPost {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

class JobSeeker {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  notify(jobPost: JobPost): void {
    console.log(`${this._name} был уведомлен о новой вакансии: ${jobPost.title}`);
  }
}


class JobBoard {
  private _subscribers: JobSeeker[];

  constructor() {
    this._subscribers = [];
  }

  subscribe(jobSeeker: JobSeeker): void {
    this._subscribers.push(jobSeeker);
  }

  addJob(jobPosting: JobPost): void {
    this._subscribers.forEach(subscriber => {
      subscriber.notify(jobPosting);
    });
  }
}


// Создаём подписчиков
const jonDoe = new JobSeeker('John Doe');
const janeDoe = new JobSeeker('Jane Doe');
const kaneDoe = new JobSeeker('Kane Doe');

// Создаём публикатора и прикрепляем подписчиков
const jobBoard = new JobBoard();

jobBoard.subscribe(jonDoe);
jobBoard.subscribe(janeDoe);

// Добавляем новую вакансию и смотрим, будут ли уведомлены подписчики
jobBoard.addJob(new JobPost('Software Engineer'));

// => John Doe был уведомлен о новой вакансии: Software Engineer
// => Jane Doe был уведомлен о новой вакансии: Software Engineer