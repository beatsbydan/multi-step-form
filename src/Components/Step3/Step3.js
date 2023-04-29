import NavSideBar from "../NavSideBar/NavSideBar";
import AddOn from "./AddOn/AddOn";
import './Step3.css'
const Step3 = ({page, setPage}) => {
    const handleChecked = (e) => {
        if(e.target.checked){
            e.target.parentElement.parentElement.classList.add('selected')
        }
    }
    return ( 
        <div className="block">
            <NavSideBar page={page}/>
            <div className="formPage">
                <h1>Pick add-ons</h1>
                <p className="desc">Add-ons help enhance your gaming experience.</p>
                <div className="formBody body_three">
                    <AddOn
                        onCheck={handleChecked}
                        service={'Online Service'}
                        attribute={'Access to Multiplayer games'}
                        planDuration={''}
                    />
                    <AddOn
                        onCheck={handleChecked}
                        service={'Larger storage'}
                        attribute={'Extra 1TB of cloud save'}
                        planDuration={''}
                    />
                    <AddOn
                        onCheck={handleChecked}
                        service={'Customizable Profile'}
                        attribute={'Custom theme on your profile'}
                        planDuration={''}
                    />
                </div>
                <div className="formButtons">
                    <button onClick={()=>setPage(2)} className="prev">Go Back</button>
                    <button onClick={()=>setPage(4)} className="next">Next Step</button>
                </div>
            </div>
            <div className="formButtons--mobile">
                <button onClick={()=>setPage(2)} className="prev">Go Back</button>
                <button onClick={()=>setPage(4)} className="next">Next Step</button>
            </div>
        </div>
     );
}
 
export default Step3;