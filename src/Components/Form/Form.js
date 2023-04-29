import { useState } from "react";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import Step5 from "../Step5/Step5";

const Form = () => {
    const [page,setPage] = useState(2)
    const [userData, setUserData] = useState({})
    const onSave = (entry) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const getPage = () => {
        if(page === 1){
            return <Step1 page={page} setPage = {setPage} onSubmit = {onSave}/>
        }
        else if(page === 2){
            return <Step2 page={page} setPage = {setPage}/>
        }
        else if(page === 3){
            return <Step3 page={page} setPage = {setPage}/>
        }
        else if(page === 4){
            return <Step4 page={page} setPage = {setPage} onSubmit={handleSubmit}/>
        }
        else{
            return <Step5/>
        }
    }
    return (  
        <form action="" id="form" className="myForm" onSubmit={handleSubmit}>
            <div className="formBody">
                {getPage()}
            </div>
        </form>
    );
}
 
export default Form;