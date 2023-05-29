import { RequestHandler } from "express";

import BikeModel from "../models/Bike";

//@desc     Get all bikes
//@route    GET /api/bikes
//@access   Public
const getBikes: RequestHandler = async (req, res, next) => {
  try {
    // fetch all bikes from database and remove the white space
    const bikes = await BikeModel.find({}).limit(15).lean();
console.log(bikes);

    res.status(200).json(bikes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

//@desc     Get a bike
//@route    GET /api/bikes/:id
//@access   Public
const getBike: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const bike = await BikeModel.findById(id);
    res.status(200).json(bike);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

//@desc     Get bike by search
//@route    GET /api/bikes/search
//@access   Public
const getBikesBySearch: RequestHandler = async (req, res, next) => {
  const { searchQuery } = req.query as { searchQuery: string };
  try {
    const DepartureStationName = new RegExp(searchQuery, "i");
    const bike = await BikeModel.find({ DepartureStationName });

    res.status(200).json(bike);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

//@desc     Create a bike
//@route    POST /api/bikes
//@access   Public
const createBike: RequestHandler = async (req, res, next) => {
  const {
    Departure,
    Return,
    DepartureStationId,
    DepartureStationName,
    ReturnStationId,
    ReturnStationName,
    CoveredDistance_m,
    Duration_sec,
  } = req.body;
  try {
    const bike = await BikeModel.create({
      Departure,
      Return,
      DepartureStationId,
      DepartureStationName,
      ReturnStationId,
      ReturnStationName,
      CoveredDistance_m,
      Duration_sec,
    });
    res.status(201).json(bike);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

//@desc     Update a bike
//@route    PUT /api/bikes/:id
//@access   Public
const updateBike: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const {
    Departure,
    Return,
    DepartureStationId,
    DepartureStationName,
    ReturnStationId,
    ReturnStationName,
    CoveredDistance_m,
    Duration_sec,
  } = req.body;

  try {
    const bike = await BikeModel.findByIdAndUpdate(id, {
      Departure,
      Return,
      DepartureStationId,
      DepartureStationName,
      ReturnStationId,
      ReturnStationName,
      CoveredDistance_m,
      Duration_sec,
    });
    res.status(200).json(bike);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

//@desc     Delete a bike
//@route    DELETE /api/bikes/:id
//@access   Public
const deleteBike: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const bike = await BikeModel.findByIdAndDelete(id);
    res.status(200).json(bike);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

//@desc     GET all bikes with pagination and sorting
//@route    GET /api/bikes/paginate
//@access   Public

const getBikesWithPaginationAndSorting: RequestHandler = async (
  req,
  res,
  next
) => {
  const { page } = req.query as { page: string };
  const LIMIT = 10;
  const startIndex = parseInt(page) * LIMIT; // get the starting index of every page

  try {
    const total = await BikeModel.countDocuments({});
    const bikes = await BikeModel.find({})
      .sort({ _id: -1 })
      .skip(startIndex)
      .limit(LIMIT);

    res.status(200).json({
      data: bikes,
      currentPage: parseInt(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

export {
  getBikes,
  getBike,
  getBikesBySearch,
  createBike,
  updateBike,
  deleteBike,
  getBikesWithPaginationAndSorting,
};
