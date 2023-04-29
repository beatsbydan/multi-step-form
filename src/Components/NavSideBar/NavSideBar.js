import './NavSideBar.css'
const NavSideBar = ({page}) => {
    const defCol = "white"
    const defBgCol = "transparent"
    const col = 'hsl(213, 96%, 18%)';
    const bgCol = 'hsl(217, 100%, 97%)';
    return ( 
        <div className="navSideBar">    
            <div className="page">
                <button style={{color: page === 1 ? col: defCol, background:page === 1 ? bgCol: defBgCol }}>1</button>
                <div className="step">
                    <small className="stepProgress">STEP 1</small>
                    <p className="stepDetail">YOUR INFO</p>
                </div>
            </div>
            <div className="page">
                <button style={{color: page === 2 ? col: defCol, background:page === 2 ? bgCol: defBgCol }}>2</button>
                <div className="step">
                    <small className="stepProgress">STEP 2</small>
                    <p className="stepDetail">SELECT PLAN</p>
                </div>
            </div>
            <div className="page">
                <button style={{color: page === 3 ? col: defCol, background:page === 3 ? bgCol: defBgCol }}>3</button>
                <div className="step">
                    <small className="stepProgress">STEP 3</small>
                    <p className="stepDetail">ADD-ONS</p>
                </div>
            </div>
            <div className="page">
                <button style={{color: page === 4 ? col: defCol, background:page === 4 ? bgCol: defBgCol }}>4</button>
                <div className="step">
                    <small className="stepProgress">STEP 4</small>
                    <p className="stepDetail">SUMMARY</p>
                </div>
            </div>
        </div>
     );
}
 
export default NavSideBar;