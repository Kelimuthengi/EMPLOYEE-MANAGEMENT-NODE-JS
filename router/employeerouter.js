const express  = require('express');
const router = express.Router();
const { createEmployee, getAllEmployees, getAnEmployee,editAnEmployee, deleteAnEmployee } =require('../controller/employee')

router.post('/addemployee', createEmployee)

router.get('/getAllEmployee', getAllEmployees)

router.get('/getASingleEmployee/:id', getAnEmployee)

router.put('/editEmployee/:id', editAnEmployee)

router.delete('/deleteAnEmployee/:id', deleteAnEmployee)

module.exports = router