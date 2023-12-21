const express=require('express')
const router=express.Router();
const AddData=require('../controllers/AddData')
const GetAllData=require('../controllers/GetAllData')
const GetSpecificUser =require('../controllers/GetSpecificUser')
const  EditSpecificUser = require('../controllers/EditSpecificUser')
const  DeleteUser=require("../controllers/DeleteUser")

router.post('/register',AddData);
router.get('/getAllData',GetAllData);
router.get('/detail/:id',GetSpecificUser)
router.put('/edit/:id',EditSpecificUser)
router.delete('/deleteUser/:id',DeleteUser)
module.exports=router;

