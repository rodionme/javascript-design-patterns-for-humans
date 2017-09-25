interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  askQuestions(): void {
    console.log('Спрашивает о шаблонах проектирования.');
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions(): void {
    console.log('Спрашивает о создании сообщества.');
  }
}


abstract class HiringManager {
  abstract makeInterviewer(): Interviewer;

  takeInterview(): void {
    const interviewer = this.makeInterviewer();

    interviewer.askQuestions();
  }
}


class DevelopmentManager extends HiringManager {
  makeInterviewer(): Developer {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  makeInterviewer(): CommunityExecutive {
    return new CommunityExecutive();
  }
}


const devManager = new DevelopmentManager();

devManager.takeInterview(); // => Спрашивает о шаблонах проектирования.


const marketingManager = new MarketingManager();

marketingManager.takeInterview(); // => Спрашивает о создании сообщества.