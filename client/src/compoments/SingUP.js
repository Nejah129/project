
import {useDispatch, useSelector}from "react-redux"
import { useState, React } from "react";
import { register } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";



const SingnUP=()=>{
    const {loading,users}= useSelector(state=>state)
   const dispatch = useDispatch();
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [phone, setPhone] = useState('');
   const reg=()=>dispatch(register({firstName,lastName,email,password,phone}),
   setFirstName(""),setLastName(""),setEmail(''),setPassword('')
   )


const handelSubmit=(e)=>{
    e.preventDefaul()



}

return(
    <div>
        {
            loading?(
                <h1>loading...</h1>
            ):users?<Redirect to ="/login"/>:
            <div>
                <h2>Crate Profil</h2>
                <br />
                <form onSubmit={handelSubmit}>
            
            <label>First Name</label>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <br />
        <label>Last Name</label>
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <br />
        <label>Email</label>
            <input type="text" placeholder="Email..." value={email}onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <label>Password</label>
            <input type="text" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button type="submit" onClick={reg} >Confirm</button>
        <br />
        <Link to="/login" className="login-link">
        already have account ?
            <br/>
            Login here</Link>
        
        </form>
            </div>
            

        }
    </div>
)



}
export default SingnUP;