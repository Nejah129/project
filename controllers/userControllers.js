const User = require("../model/User");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
const gravatar = require("gravatar");
const { normalize } = require("path/posix");

exports.register = async (req, res) => {
  const { firstName, lastName, email, phone, password, role, avatar } =
    req.body;
  try {
    //creat a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      role,
    });
    //check if the User do  exiest

    const searchRes = await User.findOne({email});
    if (searchRes) return res.status(401).json({ msg: "User arledy exiest " });
    //crypte the password
    const salt = await bc.genSalt(10);
    const hash = await bc.hash(password, salt);
    newUser.password = hash;
    newUser.save();
    // console.log(newUser)
    const payload = {
      id: newUser._id,
    };
    const avatar = normalize(
      gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      }),
    //   { forceHttps: true }
    );
    const token = jwt.sign(payload, secret);
    res.send({
        token,user:{
            id:newUser._id,
            firstName:newUser.firstName,
            lastName:newUser.lastName,
            phone: newUser.phone,
            email: newUser.email,
            role:newUser.role,
            avatar:newUser.avatar


        }
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ errors: error.message });
  }
};
exports.login=async (req, res)=>{
    const{email,password}=req.body;
    try {
        const validUser= await User.findOne({email})
        if (!validUser)
        return res.status(404).json({mag:"email or password  is worng"});
        const isMatch = await bc.compare(password,validUser.password)
        if(!isMatch)
        return res.status(404).json({msg:"email or password are wrong "})
        const payload ={
            id:validUser._id,
        };
        
        const token =jwt.sign(payload,secret);
        res.send({
            token,user:{
                id:validUser._id,
                firstName:validUser.firstName,
                phone:validUser,
            }
        })
    } catch (error) {
        res.status(500).json({errors:error.message})
    }
  
};
exports.authUser=(req,res)=>{
  res.send(req.user)
}
