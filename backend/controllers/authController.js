import User from "../models/UserSchema.js";
import Doctor from '../models/DoctorSchema.js'
// import jwt from 'jasonwebtoken'
import bcrypt from 'bcrypt'

export const register = async(req,res)=>{
    const {email,password,name,role,photo,gender} = req.body;
    try {
        let user = null
        if(role == 'patient'){
            user = await User.findOne({ email})
        }
        else if(role=='doctor'){
            user = await Doctor.findOne({ email})
        }
        if(user){
            return res.status(400).json({ message:'user already exists'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if(role == 'patient'){
            user = new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        if(role == 'doctor'){
            user = new Doctor({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()
        res.status(200).json({success:true,message:'user successfully created'})
    } catch (error) {
        res.status(500).json({success:false,message:'Internal Server Error, please try again'})
    }
}
export const login = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}