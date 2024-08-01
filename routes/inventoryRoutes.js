const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMW");
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrganisationController, getOrganisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require("../controllers/inventoryController");

//ADD NEW INVENTORY RECORD
router.post("/inventory",auth,createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/inventory",auth,getInventoryController);

//GET RECENT BLOOD RECORDS
router.get("/recent-inventory",auth,getRecentInventoryController);

//GET HOSPITAL BLOOD RECORDS
router.post("/inventory-hospital",auth,getInventoryHospitalController);

//GET DONAR RECORDS
router.get("/donars",auth,getDonarsController);

//GET HOSPITAL RECORDS
router.get("/hospitals",auth,getHospitalController);

//GET ORGANISATIONS FOR DONAR RECORDS
router.get("/organisation",auth,getOrganisationController)

//GET ORGANISATIONS FOR HOSPITAL RECORDS
router.get("/organisation-for-hospital",auth,getOrganisationForHospitalController)

module.exports = router;