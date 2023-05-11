import NavSideBar from "../NavSideBar/NavSideBar";
import './Step2.css'
import { useContext } from "react";
import Package from "./Package/Package";
import Packages from "./Packages";
import PackageContext from "../../PackageContext/PackageContext";

const Step2 = (props) => {
    const ctx = useContext(PackageContext)
    return ( 
        <div className="block">
            <NavSideBar page={props.page}/>
            <div className="formPage">
                <h1>Select your plan</h1>
                <p className="desc">You have the option of monthly or yearly billing.</p>
                <ul className="formBody body_two">
                    {Packages.map(item => {
                        return(
                            <Package
                                currentIndex = {ctx.currentIndex}
                                id={item.id}
                                key={item.id}
                                package={item.package}
                                onClick={ctx.selectPackage}
                                img={item.img}
                                name={item.name}
                                duration={ctx.duration}
                                perDuration = {ctx.duration === 'monthly' ? item.perMonth : item.perYear}
                                discount={item.discount}
                            />
                        )
                    })}
                </ul>
                <div className="planType">
                    <div className="planBox">
                        <p className={`pick ${ctx.duration === 'monthly' ? 'perMonth': ''}`} onClick={ctx.setMonthlyPeriod}>Monthly</p>
                        <div className="barToggle">
                            <div className={`circle ${ctx.duration === 'monthly' ? 'monthly' : 'yearly'}`}></div>
                        </div>
                        <p className={`pick ${ctx.duration === 'yearly' ? 'perYear': ''}`} onClick={ctx.setYearlyPeriod}>Yearly</p>
                    </div>
                </div>
                <div className="formButtons">
                    <button 
                        onClick={()=>props.prevStep(props.page)} 
                        className="prev"
                    >
                        Go Back
                    </button>
                    <button 
                        onClick={()=>props.nextStep(props.page)} 
                        disabled={ctx.package === ""} 
                        className="next"
                    >
                            Next Step
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Step2;