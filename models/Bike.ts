import { Schema, model } from "mongoose";

import { IBike } from "../interfaces/modelsInterface";

const bikeSchema = new Schema<IBike>({
  Departure: {
    type: Date,
    trim: true,
  },
  DepartureStationId: {
    type: Number,
    trim: true,
  },
  DepartureStationName: {
    type: String,
    trim: true,
  },
  Return: {
    type: Date,
    trim: true,
  },
  ReturnStationId: {
    type: Number,
    trim: true,
  },
  ReturnStationName: {
    type: String,
    trim: true,
  },
  CoveredDistance_m: {
    type: Number,
    trim: true,
  },
  Duration_sec: {
    type: Number,
    trim: true,
  },
});

const Bike = model<IBike>("Bike", bikeSchema);

export default Bike;
