import mongoose, { mongo } from "mongoose"
import {contactSchema} from '../models/contacts.js'

const Contact = mongoose.model("Contact",contactSchema)

export const addNewContact = (req,res) => {
    let newContact = new Contact(req.body)
    newContact.save((err,answer) => {
        if(err){res.send(err)}
        else{
            res.send(answer)
        }
    })
}

export const getAllContact = (req,res) => {
    Contact.find({},(err,answer) => {
        if(err){res.send(err)}
        else{
            res.send(answer)
        }
    })
}

export const getContactByID = (req,res) => {
    Contact.find({_id:req.params.contactID},(err,answer) => {
        if(err){res.send(err)}
        else{
            res.send(answer)
        }
    })
}

export const updateContacttByID = (req,res) => {
    Contact.findOneAndUpdate({_id:req.params.contactID},req.body,{new:true, useFindAndModify:false},(err,contact) => {
        if(err){
            res.send(err)
        }else{
            res.send(contact)
        }
    })
}

export const deleteContactByID = (req,res) => {
    Contact.remove({_id:req.params.contactID},(err,contact) => {
        if(err){
            res.send(err)
        }else{
            res.json({message:"Successfully deleted a contact from records"})
        }
    })
}