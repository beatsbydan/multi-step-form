import NavSideBar from "../NavSideBar/NavSideBar";
import './Step2.css'
import arcImg from '../../assets/images/icon-arcade.svg'
import advImg from '../../assets/images/icon-advanced.svg'
import proImg from '../../assets/images/icon-pro.svg'
import { useState } from "react";
const Step2 = ({page, setPage}) => {
    const [duration, setDuration] = useState('monthly')
    const handleMonthlyPeriodChange = () => {
            setDuration('monthly')
    }
    const handleYearlyPeriodChange = () => {
            setDuration('yearly')
    }
    const handleClick = (e) => {
        
        // e.target.style.borderColor = activeCol;
    }
    return ( 
        <div className="block">
            <NavSideBar page={page}/>
            <div className="formPage">
                <h1>Select your plan</h1>
                <p className="desc">You have the option of monthly or yearly billing.</p>
                <div className="formBody body_two">
                    <div onClick={handleClick} className="arcade box">
                        <img src={arcImg} alt="" />
                        <div className="planDetails">
                            <p className="name">Arcade</p>
                            <small className="price">{duration === 'monthly' ? '$9/mo' : '$90/yr'}</small>
                            {duration === 'yearly' &&<small className="yearlyTxt">2 months free</small>}
                        </div>
                    </div>
                    <div onClick={handleClick} className="advanced box">
                        <img src={advImg} alt="" />
                        <div className="planDetails">
                            <p className="name">Advanced</p>
                            <small className="price">{duration === 'monthly' ? '$12/mo' : '120/yr'}</small>
                            {duration === 'yearly' &&<small className="yearlyTxt">2 months free</small>}
                        </div>
                    </div>
                    <div onClick={handleClick} className="pro box">
                        <img src={proImg} alt="" />
                        <div className="planDetails">
                            <p className="name">Pro</p>
                            <small className="price">{duration === 'monthly' ? '$15/mo' : '$150/yr'}</small>
                            {duration === 'yearly' && <small className="yearlyTxt">2 months free</small>}
                        </div>
                    </div>
                </div>
                <div className="planType">
                    <div className="planBox">
                        <p className={`pick ${duration === 'monthly' ? 'perMonth': ''}`} onClick={handleMonthlyPeriodChange}>Monthly</p>
                        <div className="barToggle">
                            <div className={`circle ${duration === 'monthly' ? 'monthly' : 'yearly'}`}></div>
                        </div>
                        <p className={`pick ${duration === 'yearly' ? 'perYear': ''}`} onClick={handleYearlyPeriodChange}>Yearly</p>
                    </div>
                </div>
                <div className="formButtons">
                    <button onClick={()=>setPage(1)} className="prev">Go Back</button>
                    <button onClick={()=>setPage(3)} className="next">Next Step</button>
                </div>
            </div>
            <div className="formButtons--mobile">
                <button onClick={()=>setPage(1)} className="prev">Go Back</button>
                <button onClick={()=>setPage(3)} className="next">Next Step</button>
            </div>
        </div>
     );
}
 
export default Step2;