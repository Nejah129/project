const {check, validationResult} = require('express-validator');
exports.registerResult=()=>[
    check("firstName", "Name is Required").notEmpty(),
    check("lastName", "Name is Required").notEmpty(),
    check("email", "Email is Required").notEmpty(),
    check("email", "Email is Required").isEmail(),
    check("password", "Passowrd should be at least 6 charecters long ").isLength({
      min:6
    })
];
exports.validator = (req,res,next)=>{
    const errors = validationResult(req);
    errors.isEmpty()? next(): res.send({errors:errors.array()})
}
