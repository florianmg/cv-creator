const { Router } = require("express");
const router = Router();
const {
  createResume,
  getUserResume,
} = require("../controllers/resume.controller");

router.post("/api/resume", createResume);
router.get("/api/resume/", getUserResume);

module.exports = router;
