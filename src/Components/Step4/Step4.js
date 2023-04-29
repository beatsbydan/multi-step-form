import NavSideBar from "../NavSideBar/NavSideBar";
import './Step4.css'
const Step4 = ({page, setPage}) => {
     return ( 
        <div className="block">
            <NavSideBar page={page}/>
            <div className="formPage">
                <h1>Finishing up</h1>
                <p className="desc">Double-check everything looks OK before confirming.</p>
                <div className="formBody body_four">
                    <div className="boxReport">
                        <div className="plan">
                            <div className="left">
                                <h4>()</h4>
                                <a href="">Change</a>
                            </div>
                            <h4></h4>
                        </div>
                        <div className="specAddOns">
                            {/**Array of add ons would be mapped here */}
                            <div className="addOn">
                                <p className="addOnTitle"></p>
                                <p className="addOnPrice"></p>
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <p className="totalSpec">()</p>
                        <h3 className="totalPrice"></h3>
                    </div>
                </div>
                <div className="formButtons">
                    <button onClick={()=>setPage(3)} className="prev">Go Back</button>
                    <button onClick={()=>setPage(5)} className="next confirm">Confifrm</button>
                </div>
            </div>
            <div className="formButtons--mobile">
                <button onClick={()=>setPage(3)} className="prev">Go Back</button>
                <button onClick={()=>setPage(5)} className="next confirm">Confirm</button>
            </div>
        </div>
     );
}
 
export default Step4;