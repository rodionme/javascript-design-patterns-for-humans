var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Developer = (function () {
    function Developer() {
    }
    Developer.prototype.askQuestions = function () {
        console.log('Спрашивает о шаблонах проектирования.');
    };
    return Developer;
}());
var CommunityExecutive = (function () {
    function CommunityExecutive() {
    }
    CommunityExecutive.prototype.askQuestions = function () {
        console.log('Спрашивает о создании сообщества.');
    };
    return CommunityExecutive;
}());
var HiringManager = (function () {
    function HiringManager() {
    }
    HiringManager.prototype.takeInterview = function () {
        var interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    };
    return HiringManager;
}());
var DevelopmentManager = (function (_super) {
    __extends(DevelopmentManager, _super);
    function DevelopmentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DevelopmentManager.prototype.makeInterviewer = function () {
        return new Developer();
    };
    return DevelopmentManager;
}(HiringManager));
var MarketingManager = (function (_super) {
    __extends(MarketingManager, _super);
    function MarketingManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketingManager.prototype.makeInterviewer = function () {
        return new CommunityExecutive();
    };
    return MarketingManager;
}(HiringManager));
var devManager = new DevelopmentManager();
devManager.takeInterview(); // => Спрашивает о шаблонах проектирования.
var marketingManager = new MarketingManager();
marketingManager.takeInterview(); // => Спрашивает о создании сообщества.
