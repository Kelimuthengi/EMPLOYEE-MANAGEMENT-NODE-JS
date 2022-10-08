const express = require("express");
const connectDb = require('./db/connect')
const employeeRouter = require('./router/employeerouter')
const cors = require('cors');
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/employee/api/v1', employeeRouter)

const PORT = process.env.PORT || 5000;


const start = async () => {

    try {
        
        await connectDb(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
    })       

    } catch (error) {
        console.log(error.message)
    }
}


start()

