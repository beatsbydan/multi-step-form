import { useContext } from "react";
import PackageContext from "../../PackageContext/PackageContext";
import NavSideBar from "../NavSideBar/NavSideBar";
import AddOn from "./AddOn/AddOn";
import AddOns from "./AddOn/AddOns";
import './Step3.css'
const Step3 = (props) => {
    const ctx = useContext(PackageContext)
    return ( 
        <div className="block">
            <NavSideBar page={props.page}/>
            <div className="formPage">
                <h1>Pick add-ons</h1>
                <p className="desc">Add-ons help enhance your gaming experience.</p>
                <ul className="formBody body_three">
                    {AddOns.map(addon=>{
                        return(
                            <AddOn
                                checked={ctx.checked}
                                id={addon.id}
                                key={addon.id}
                                onChange={()=>ctx.selectAddOn(addon.id)}
                                service={addon.title}
                                attribute={addon.desc}
                                planDuration={ctx.duration=== 'monthly' ? addon.pricePerMonth : addon.pricePerYear}
                            />
                        )
                    })}
                </ul>
                <div className="formButtons">
                    <button 
                        onClick={()=>props.prevStep(props.page)} 
                        className="prev"
                    >
                            Go Back
                    </button>
                    <button 
                        onClick={()=>props.nextStep(props.page)} 
                        disabled = {ctx.addOns.length === 0} 
                        className="next"
                    >
                            Next Step
                    </button>
                </div>
            </div>
            <div className="formButtons--mobile">
                <button 
                    onClick={()=>props.prevStep(props.page)} 
                    className="prev"
                >
                        Go Back
                </button>
                <button 
                    onClick={()=>props.nextStep(props.page)} 
                    disabled = {ctx.addOns.length === 0} 
                    className="next"
                >
                        Next Step
                </button>
            </div>
        </div>
     );
}
 
export default Step3;