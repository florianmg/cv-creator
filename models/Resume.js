const mongoose = require('mongoose');

const ResumeSchema = mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: Number},
  email: {type: String},
  location: {type: String},
  jobTitle: {type: String},
  experiences: [
    {
      company: {type: String},
      jobTitle: {type: String},
      location: {type: String},
      startDate: {type: Date},
      endDate: {type: Date}
    }
  ],
  formations: [
    {
      degreeName: {type: String},
      schoolName: {type: String},
      location: {type: String},
      startDate: {type: Date},
      endDate: {type: Date}
    }
  ],
  languages: [
    {
      name: {type: String},
      level: {type: Number}
    }
  ],
  skills: [
    {
      name: {type: String},
      level: {type: Number}
    }
  ],
  interests: [{name: {type: String}}]

});

const Resume = mongoose.model('resume', ResumeSchema);

module.exports = Resume;