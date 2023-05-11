import { useContext } from "react";
import PackageContext from "../../PackageContext/PackageContext";
import NavSideBar from "../NavSideBar/NavSideBar";
import './Step4.css'
const Step4 = (props) => {
    const ctx = useContext(PackageContext)
     return ( 
        <div className="block">
            <NavSideBar page={props.page}/>
            <div className="formPage">
                <h1>Finishing up</h1>
                <p className="desc">Double-check everything looks OK before confirming.</p>
                <div className="formBody body_four">
                    <div className="boxReport">
                        <div className="plan">
                            <div className="left">
                                <h4>{ctx.package} ({ctx.duration === 'monthly' ? 'Monthly' : 'Yearly'})</h4>
                                <button onClick={props.changePackage} type="button" className="changeBtn">Change</button>
                            </div>
                            <h4>{ctx.duration === 'yearly' ? `$${ctx.pricePerDuration}/yr` : `$${ctx.pricePerDuration}/mo`}</h4>
                        </div>
                        <ul className="specAddOns">
                            {ctx.addOns.map(addon=>{
                                return(
                                    <div key={addon.title} className="addOn">
                                        <li className="addOnTitle">{addon.title}</li>
                                        <li className="addOnPrice">{ctx.duration === 'monthly' ? `$${addon.pricePerDuration}/mo` : `$${addon.pricePerDuration}/yr`}</li>
                                    </div>
                                )

                            })}                            
                        </ul>
                    </div>
                    <div className="total">
                        <p className="totalSpec">Total (per {ctx.duration==='monthly' ? 'month' : 'year'})</p>
                        <h3 className="totalPrice">${ctx.totalAmount}/{ctx.duration==='monthly' ? 'mo' : 'yr'}</h3>
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
                        onClick={()=>props.onSubmit(props.page)} 
                        className="next confirm"
                    >
                            Confirm
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
                    className="next confirm"
                >
                        Confirm
                </button>
            </div>
        </div>
     );
}
 
export default Step4;