import { Schema, model } from "mongoose";

import { IBike } from "../interfaces/modelsInterface";

const bikeSchema = new Schema<IBike>({
  Departure: Date,
  Return: Date,
  DepartureStationId: Number,
  DepartureStationName: String,
  ReturnStationId: Number,
  ReturnStationName: String,
  CoveredDistance_m: Number,
  Duration_sec: Number,
});

const Bike = model<IBike>("Bike", bikeSchema);

export default Bike;