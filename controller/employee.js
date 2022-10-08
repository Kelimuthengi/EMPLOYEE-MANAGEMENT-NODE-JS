const Employee = require('../models/employee')

const createEmployee = async (req, res) => {

    try {
        const newEmployee = await Employee.create(req.body);
    if(!newEmployee){
        return res.status(401).json({success:false, message:'Failed to create a job!'});
    }
    res.status(200).json({success:true, data:newEmployee})
    } catch (error) {
      return  res.status(500).json({success:false, message:error.message});
    }

}

const getAllEmployees = async (req, res) => {

    try {
        const getAllEmployees = await Employee.find();
    if(!getAllEmployees){
        return res.status(401).json({success:false, message:'No data in the database'})
    }
    res.status(200).json({success:true, data:getAllEmployees})
    } catch (error) {
       return res.status(500).json({ message: error.message });
    }

}

const getAnEmployee = async (req, res) => {

    try {
        const { id:singleID } = req.params;

        const singleEmployee = await Employee.findOne({_id:singleID});
        if(!singleEmployee){
            res.status(401).json({success:false, message:`There is no employee with id ${singleID}`})
        }
       return res.status(200).json({ success: true, data: singleEmployee });
    } catch (error) {
       return res.status(500).json({ success: false, message: error.message });
    }

}

const editAnEmployee = async (req, res) => {

    try {

        const { id:EDITID } = req.params;

        const editemployee = await Employee.findByIdAndUpdate({_id:EDITID}, req.body, {
            new:true,
            runValidators:true,
            overwrite:true
        })

        if(!editemployee) {
           return res.status(401).json({success:false, message:`There is no employee with that ${EDITID}`})
        }
       return res.status(200).json({ success: true, data: editemployee });

    } catch (error) {
       return res.status(500).json({ success: false, message: error.message });
    }
    res.send('We are editing a single employee')
}

const deleteAnEmployee =  async (req, res) => {

    try {
        const { id:DELETEID } = req.params;
        
        const deleteEmployee = await Employee.findOneAndDelete({_id:DELETEID})
        if(!deleteEmployee){
         return res.status(401).json({success:false, message:`There's no employee with ${DELETEID} id`})
        }
    
       return res
         .status(200)
         .json({ success: true, message: "Employee deleted!" });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

}


module.exports = {
    createEmployee,
    getAllEmployees,
    getAnEmployee,
    editAnEmployee,
    deleteAnEmployee
}