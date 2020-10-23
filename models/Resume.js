const mongoose = require("mongoose");

const ResumeSchema = mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId },
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: Number },
  email: { type: String },
  location: { type: String },
  jobTitle: { type: String },
  experiences: [
    {
      company: { type: String },
      jobTitle: { type: String },
      location: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      position: { type: Number },
    },
  ],
  formations: [
    {
      degreeName: { type: String },
      schoolName: { type: String },
      location: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      position: { type: Number },
    },
  ],
  languages: [
    {
      name: { type: String },
      level: { type: Number },
      position: { type: Number },
    },
  ],
  skills: [
    {
      name: { type: String },
      level: { type: Number },
      position: { type: Number },
    },
  ],
  interests: [{ name: { type: String }, position: { type: Number } }],
});

const Resume = mongoose.model("resume", ResumeSchema);

module.exports = Resume;
