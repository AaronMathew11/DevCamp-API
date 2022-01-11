const express= require('express')
const {getBootcamp,getBootcamps,createBootcamps,updateBootcamps,deleteBootcamps }=require('../Controllers/bootcamps')

const router= express.Router()

router.route('/').get(getBootcamps).post(createBootcamps)
router.route('/:id').get(getBootcamp).put(updateBootcamps)

module.exports=router