const Student = require('../models/students');
const errCodes = require('../constants/constant');



exports.addStudent = async (req, res) => {

    let { name, grade, section, subjects } = req.body;

    if (!name && !grade && section && subjects) {
        return res.status().json({ msg: "Provide all fields" });
    }


    try {
        const newStudent = new Student({
            name,
            grade,
            section,
            subjects
        });

        await newStudent.save();


        res.status(errCodes.OK).json(newStudent);
    } catch (err) {
        return res.status(errCodes.RESOURCE_NOT_FOUND).json({ msg: err.message });
    }




}


exports.getAllStudents = async (req, res) => {

    try {
        await Student.find()
            .then((student) => {
                return res.status(errCodes.OK).json({ student });
            })
            .catch(err => {
                return res.status(errCodes.RESOURCE_NOT_FOUND).json({ err });
            });
    } catch (e) {
        return res.status(errCodes.SERVER_FAILED).json({ err: e });
    }
}