const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => {
    console.log("Server connect successfully");
  })
  .catch((e) => {
    console.log("error in connection", e);
  });

const academicSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  grade: String,
  subject: String,
});
const AcademicModel = mongoose.model("Academic", academicSchema);

const createAcademic = async () => {
  try {
    const allAcademic = await AcademicModel.create([
      { studentId: 1, name: "Ramiz", grade: "A+", subject: "Coding" },
      { studentId: 2, name: "neha", grade: "A", subject: "Coding" },
      { studentId: 3, name: "Rajib", grade: "A+", subject: "Coding" },
      { studentId: 4, name: "Raj", grade: "B", subject: "Coding" },
    ]);
  } catch (error) {
    console.log("error while creating Academic Model", error);
  }
};
createAcademic();

const getacademic = async () => {
  const academicresult = await AcademicModel.find();
  console.log(academicresult);
};
getacademic();

const curricularSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  activityType: String,
  Duration: String,
  achievements: String,
});

const CurricularModel = new mongoose.model("Curricular", curricularSchema);

const createCurricular = async () => {
  try {
    const allCurricular = await CurricularModel.create([
      {
        studentId: 1,
        name: "Ramiz",
        activityType: "Running",
        Duration: "1 Year",
        achievements: "1St",
      },
      {
        studentId: 2,
        name: "Neha",
        activityType: "Skipping",
        Duration: "1 Year",
        achievements: "3rd",
      },
      {
        studentId: 3,
        name: "Rajib",
        activityType: "swimming",
        Duration: "1 Year",
        achievements: "2nd",
      },
      {
        studentId: 4,
        name: "Raj",
        activityType: "Long Jump",
        Duration: "1 Year",
        achievements: "1St",
      },
    ]);
  } catch (error) {
    console.log("error while createing curricular Model", error);
  }
};
createCurricular();

const getCurricular = async () => {
  const curricularResult = await CurricularModel.find();
  console.log(curricularResult);
};
getCurricular();
