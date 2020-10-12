const Resume = require("../models/Resume");
const jwt = require("jsonwebtoken");

module.exports.createResume = async (req, res) => {
  const token = req.cookies.jwt;
  const formValues = req.body;
  try {
    const verification = await jwt.verify(token, process.env.SECRET_JWT);
    if (!verification) new Error("wrong token");
    formValues.userId = verification._id;
    const newResume = await Resume.create({ formValues });
    if (!newResume) new Error("Error while creating new resume");
    return res.status(201).json({ newResume });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

module.exports.getUserResume = async (req, res) => {
  const token = req.cookies.jwt;

  try {
    const verification = await jwt.verify(token, process.env.SECRET_JWT);
    if (!verification) new Error("wrong token");
    const userResume = await Resume.findOne({ userId: verification._id });
    console.log(userResume);
    if (!userResume) throw Error("No resume found");
    return res.status(200).json({ userResume });
  } catch (err) {
    return res.status(404).json({ status: 404, message: err.message });
  }
};
