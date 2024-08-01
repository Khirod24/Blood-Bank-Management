const express = require("express");
const auth = require("../middlewares/authMW");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminAuth = require("../middlewares/adminMW");

//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
  "/donar-list",
  auth,
  adminAuth,
  getDonarsListController
);
//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  auth,
  adminAuth,
  getHospitalListController
);
//GET || ORG LIST
router.get(
    "/org-list", 
    auth,
    adminAuth,
    getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  auth,
  adminAuth,
  deleteDonarController
);

//EXPORT
module.exports = router;