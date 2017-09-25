class RadioStation {
  frequency: number;

  constructor(frequency: number) {
    this.frequency = frequency;
  }

  getFrequency(): number {
    return this.frequency;
  }
}


class StationList {
  stations: RadioStation[];

  constructor() {
    this.stations = [];
  }

  addStation(station: RadioStation) {
    this.stations.push(station);
  }

  removeStation(toRemove: RadioStation) {
    const toRemoveFrequency: number = toRemove.getFrequency();
    this.stations = this.stations.filter(station => {
      return station.getFrequency() !== toRemoveFrequency;
    });
  }
}


const stationList: StationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));

stationList.stations.forEach(station => console.log(station.getFrequency()));

stationList.removeStation(new RadioStation(89));    // Удалит станцию 89