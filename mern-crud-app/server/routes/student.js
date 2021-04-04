const route = require('express').Router();

/** controllers */
const studentController = require('../controllers/student');


/** 
 * @route : /add
 * @param : {},
 * @description : add new student
 */
route.post('/add', studentController.addStudent);


/** 
 * @route : /all
 * @param : NA,
 * @description : retreive list of students
 */
route.get('/all', studentController.getAllStudents);



module.exports = route;