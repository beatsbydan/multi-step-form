import NavSideBar from "../NavSideBar/NavSideBar";
import './Step1.css'
import { useState } from "react";
const Step1 = (props) => {
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
    const handleSubmit = () =>{
        setErrors(validateEntries(props.formDetails))
        let entries = Object.values(props.formDetails)
        if(entries.every(entry=>{
            return entry!==""
        })){
            props.nextStep(props.page)
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
                        value={props.formDetails.name}
                        name="name" 
                        placeholder=" e.g Stephen King" 
                        onChange={props.onChange} />
                    </div>
                    <div className="formInput">
                        <label htmlFor="Email Address">
                            Email Address
                            <p className="errorMessage">{errors.email}</p>
                        </label>
                        <input
                        className={`${errors.email ? 'invalid': ''}`}
                        type="email" 
                        value={props.formDetails.email}
                        name="email" 
                        placeholder="e.g stephenking@lorem.com" 
                        onChange={props.onChange} />
                    </div>
                    <div className="formInput">
                        <label htmlFor="Phone Number">
                            Phone Number
                            <p className="errorMessage">{errors.phone}</p>
                        </label>
                        <input
                        className={`${errors.phone ? 'invalid': ''}`}
                        type="tel"
                        value={props.formDetails.phone} 
                        name="phone" 
                        placeholder="e.g. +1 234 567 890" 
                        onChange={props.onChange} />
                    </div>
                </div>
                <div className="formButtons">
                    <button className="next"  type="button" onClick={handleSubmit}>Next Step</button>
                </div>
            </div>
        </div>
     );
}
 
export default Step1;