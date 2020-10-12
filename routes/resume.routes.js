const { Router } = require("express");
const router = Router();

router.post("/api/resume", (req, res) =>
  res.status(201).json({ message: "ok for post" })
);
router.get("/api/resume/:id", (req, res) =>
  res.status(200).json({ message: "ok for get" })
);

module.exports = router;
