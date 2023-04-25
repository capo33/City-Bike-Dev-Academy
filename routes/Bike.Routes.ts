import express from "express";

import * as BikeController from "../controllers/BikeController";

const router = express.Router();

router.get("/", BikeController.getBikes);
router.get("/paginate", BikeController.getBikesWithPaginationAndSorting);
router.get("/:id", BikeController.getBike);
router.post("/", BikeController.createBike);
router.put("/:id", BikeController.updateBike);
router.delete("/:id", BikeController.deleteBike);

export default router;
