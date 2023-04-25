export interface IBike {
  Departure: Date;
  Return: Date;
  DepartureStationId: number;
  DepartureStationName: string;
  ReturnStationId: number;
  ReturnStationName: string;
  CoveredDistance_m: number;
  Duration_sec: number;
}
