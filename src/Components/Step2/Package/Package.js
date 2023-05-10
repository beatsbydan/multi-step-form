import './Package.css'
const Package = (props) => {
    return ( 
        <li id={props.id} onClick={props.onClick} className= { props.currentIndex === props.id ? `${props.package} box chosen` : `${props.package} box`}>
            <img src={props.img} alt="" />
            <div className="planDetails">
                <p className="name">{props.name}</p>
                <small className="price">{props.duration === 'monthly' ? `$${props.perDuration}/mo` : `$${props.perDuration}/yr`}</small>
                {props.duration === 'yearly' &&<small className="yearlyTxt">{props.discount}</small>}
            </div>
        </li>
     );
}
 
export default Package;