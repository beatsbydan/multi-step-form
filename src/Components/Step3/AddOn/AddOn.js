import { useContext } from 'react'
import PackageContext from '../../../PackageContext/PackageContext'
import './AddOn.css'
const AddOn = (props) => {
    const ctx = useContext(PackageContext)
    return ( 
        <li id={props.id} className={ctx.checked[props.id] ? 'extra selected': 'extra'}>
            <div className="left">
                <input type="checkbox" checked={ctx.checked[props.id]} onChange={props.onChange} />
                <div className="pick">
                    <p className="service">{props.service}</p>
                    <p className="attribute">{props.attribute}</p>
                </div>
            </div>
            <div className="right">
                {<small>{ctx.duration === 'monthly'? `$${props.planDuration}/mo` :`$${props.planDuration}/yr`}</small>}
            </div>
        </li>
     );
}
 
export default AddOn;