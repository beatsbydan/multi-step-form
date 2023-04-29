import './AddOn.css'
const AddOn = (props) => {
    return ( 
        <div className='extra'>
            <div className="left">
                <input type="checkbox" onClick={props.onCheck} />
                <div className="pick">
                    <p className="service">{props.service}</p>
                    <p className="attribute">{props.attribute}</p>
                </div>
            </div>
            <div className="right">
                {<p>{props.planDuration}</p>}
            </div>
        </div>
     );
}
 
export default AddOn;