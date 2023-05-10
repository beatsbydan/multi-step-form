import { useContext, useState } from "react";
import PackageContext from "../../PackageContext/PackageContext";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import Step5 from "../Step5/Step5";

const Form = () => {
    const ctx = useContext(PackageContext)
    const [page,setPage] = useState(1)
    const [formInputData, setFormInputData] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormInputData(prev=>{
            return(
                {...prev, [name]: value}
            )
        })
    }
    const nextStep = (page) => {
        setPage(page + 1)
    }
    const prevStep = (page) => {
        setPage(page - 1)
    }
    const changePackage = () => {
        setPage(2)
    }
    const handleSubmit = (page) => {
        const userData = {
            duration: ctx.duration,
            userDetails: formInputData,
            userPackageChoice: ctx.myChoices,
            userAddOns: ctx.addOns,
            userTotalAmount: ctx.totalAmount
        }
        console.log(userData)
        nextStep(page)
    }
    const getPage = () => {
        if(page === 1){
            return(
                <Step1 
                    page={page} 
                    nextStep={nextStep} 
                    formDetails = {formInputData} 
                    onChange={handleChange}
                />
            )
        }
        else if(page === 2){
            return (
                <Step2 
                    page={page} 
                    nextStep={nextStep} 
                    prevStep={prevStep}
                />
            )
        }
        else if(page === 3){
            return (
                <Step3 
                    page={page} 
                    nextStep={nextStep} 
                    prevStep={prevStep}
                />
            )
        }
        else if(page === 4){
            return(
                <Step4 
                    page={page} 
                    nextStep={nextStep} 
                    prevStep={prevStep}
                    changePackage={changePackage}
                    onSubmit={handleSubmit}
                />
            )
        }
        else{
            return <Step5/>
        }
    }
    return (  
        <form action="" id="form" className="myForm">
            <div className="formBody">
                {getPage()}
            </div>
        </form>
    );
}
 
export default Form;