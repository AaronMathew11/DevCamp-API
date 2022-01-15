const ErrorResponse =require('../Utils/errorResponse')
const Bootcamp= require('../Models/Bootcamp')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps= async (req,res,next)=>{
    try{
        const bootcamps= await Bootcamp.find()
        res.status(200).json({
            success: true,
            data: bootcamps
        })
    }
    catch(err){
        res.status(400).json({
            status: false
        })
    }
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp= async (req,res,next)=>  {
    try{
        const bootcamp= await Bootcamp.findById(req.params.id)

        if(!bootcamp){
           return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404))

        }
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    }
    catch(err){
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404))
    }
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamps= async (req,res,next)=>{
    try{
        const bootcamps= await Bootcamp.create(req.body)
        res.status(201).json({
        success: true,
        data: bootcamps
    })
    }catch(err){
        res.status(400).json({
            success:false
        })
    }
    
}

// @desc    Update bootcamps
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamps= async (req,res,next)=>{
    try{
        const bootcamp= await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true
        })
        if(!bootcamp)
        {
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true, data: bootcamp})
    }
    catch(err){
        res.status(400).json({
            success:false
    })
}
}

// @desc    Delete bootcamps
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamps=async (req,res,next)=>{
    try{
        const bootcamp= await Bootcamp.remove({"_id":req.params.id})
        if(!bootcamp)
        {
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true, data: bootcamp})
    }
    catch(err){
        console.log(err.message)
        res.status(400).json({
            success:false
    })
}
}