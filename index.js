import express from 'express'
import cors from 'cors'
import {addNewContact,getAllContact,getContactByID ,updateContacttByID,deleteContactByID} 
from "./controllers/contactController.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"

const app = express()
const port = 3000

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://nancyndungu:sDCsgGkXLoD1hNxi@cluster0.eg9smsh.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}));

app.route("/contact")
.get((req,res,next)=>{
    console.log(`Request from : ${req.originalUrl}`)
    console.log(`Request type : ${req.method}`)
    next();
},getAllContact)
.post(addNewContact)

app.route("/contact/:contactID")
.get(getContactByID)
.put(updateContacttByID)
.delete(deleteContactByID)

app.listen(port, ()=> {
    console.log(`Application is listening on port: ${port}`)
})