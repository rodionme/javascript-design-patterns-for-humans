var RadioStation = (function () {
    function RadioStation(frequency) {
        this.frequency = frequency;
    }
    RadioStation.prototype.getFrequency = function () {
        return this.frequency;
    };
    return RadioStation;
}());
var StationList = (function () {
    function StationList() {
        this.stations = [];
    }
    StationList.prototype.addStation = function (station) {
        this.stations.push(station);
    };
    StationList.prototype.removeStation = function (toRemove) {
        var toRemoveFrequency = toRemove.getFrequency();
        this.stations = this.stations.filter(function (station) {
            return station.getFrequency() !== toRemoveFrequency;
        });
    };
    return StationList;
}());
var stationList = new StationList();
stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));
stationList.stations.forEach(function (station) { return console.log(station.getFrequency()); });
stationList.removeStation(new RadioStation(89)); // Удалит станцию 89
