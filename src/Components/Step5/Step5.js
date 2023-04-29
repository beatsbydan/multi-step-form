import NavSideBar from "../NavSideBar/NavSideBar";
import './Step5.css'
import thanks from '../../assets/images/icon-thank-you.svg'
const Step5 = () => {
    const page = 4;
    return ( 
        <div className="block">
            <NavSideBar page={page}/>
            <div className="formPage">
                <div className="body_5">
                    <img src={thanks} alt="" />
                    <h1>Thank you!</h1>
                    <p>
                        Thanks for confirming your subscription! We hope you have fun 
                        using our platform. If you ever need support, please feel free 
                        to email us at support@loremgaming.com.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Step5;