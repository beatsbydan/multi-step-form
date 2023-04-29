import NavSideBar from "../NavSideBar/NavSideBar";
import './Step1.css'
import { useState } from "react";
const Step1 = (props) => {
    const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormDetails(prev=>{
            return(
                {...prev, [name]: value}
            )
        })
    }
    const [errors, setErrors] = useState({})
    const validateEntries = (entry) => {
        const errors = {}
        if(entry.name === ""){
            errors.name= "This field is required"
        }
        if(entry.email === ""){
            errors.email= "This field is required"
        }
        if(entry.phone === ""){
            errors.phone= "This field is required"
        }
        if(entry.name !== "" && entry.email !== "" && entry.phone !== ""){
            errors.all = ""
        }
        return errors;
    }
    const nextStep = () => {
        props.onSubmit(formDetails)
        props.setPage(props.page + 1)
    }
    const handleSubmit = () =>{
        setErrors(validateEntries(formDetails))
        let entries = Object.values(formDetails)
        if(entries.every(entry=>{
            return entry!==""
        })){
            nextStep()
        }
    }
    return ( 
        <div className="block">
            <NavSideBar page={props.page}/>
            <div className="formPage">
                <h1>Personal info</h1>
                <p className="desc">Please provide your name, email address, and phone number.</p>
                <div className="formBody body_one">
                    <div className="formInput">
                        <label htmlFor="Name">
                            Name
                            <p className="errorMessage">{errors.name}</p>
                        </label>
                        <input
                        className={`${errors.name ? 'invalid': ''}`}
                        type="text" 
                        value={formDetails.name}
                        name="name" 
                        placeholder=" e.g Stephen King" 
                        onChange={(e)=>handleChange(e)} />
                    </div>
                    <div className="formInput">
                        <label htmlFor="Email Address">
                            Email Address
                            <p className="errorMessage">{errors.email}</p>
                        </label>
                        <input
                        className={`${errors.email ? 'invalid': ''}`}
                        type="email" 
                        value={formDetails.email}
                        name="email" 
                        placeholder="e.g stephenking@lorem.com" 
                        onChange={(e)=>handleChange(e)} />
                    </div>
                    <div className="formInput">
                        <label htmlFor="Phone Number">
                            Phone Number
                            <p className="errorMessage">{errors.phone}</p>
                        </label>
                        <input
                        className={`${errors.phone ? 'invalid': ''}`}
                        type="tel"
                        value={formDetails.phone} 
                        name="phone" 
                        placeholder="e.g. +1 234 567 890" 
                        onChange={(e)=>handleChange(e)} />
                    </div>
                </div>
                <div className="formButtons">
                    <button className="next"  type="submit" onClick={handleSubmit}>Next Step</button>
                </div>
            </div>
            <div className="formButtons--mobile">
                <button className="next" type="submit" onClick={handleSubmit}>Next Step</button>
            </div>
        </div>
     );
}
 
export default Step1;