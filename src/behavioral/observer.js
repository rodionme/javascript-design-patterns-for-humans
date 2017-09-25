var JobPost = (function () {
    function JobPost(title) {
        this.title = title;
    }
    return JobPost;
}());
var JobSeeker = (function () {
    function JobSeeker(name) {
        this._name = name;
    }
    JobSeeker.prototype.notify = function (jobPost) {
        console.log(this._name + " \u0431\u044B\u043B \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D \u043E \u043D\u043E\u0432\u043E\u0439 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438: " + jobPost.title);
    };
    return JobSeeker;
}());
var JobBoard = (function () {
    function JobBoard() {
        this._subscribers = [];
    }
    JobBoard.prototype.subscribe = function (jobSeeker) {
        this._subscribers.push(jobSeeker);
    };
    JobBoard.prototype.addJob = function (jobPosting) {
        this._subscribers.forEach(function (subscriber) {
            subscriber.notify(jobPosting);
        });
    };
    return JobBoard;
}());
// Создаём подписчиков
var jonDoe = new JobSeeker('John Doe');
var janeDoe = new JobSeeker('Jane Doe');
var kaneDoe = new JobSeeker('Kane Doe');
// Создаём публикатора и прикрепляем подписчиков
var jobBoard = new JobBoard();
jobBoard.subscribe(jonDoe);
jobBoard.subscribe(janeDoe);
// Добавляем новую вакансию и смотрим, будут ли уведомлены подписчики
jobBoard.addJob(new JobPost('Software Engineer'));
// => John Doe был уведомлен о новой вакансии: Software Engineer
// => Jane Doe был уведомлен о новой вакансии: Software Engineer 
