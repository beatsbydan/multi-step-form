import Context from '../Context'
const  contextProvider = (props) => {
        <Context.Provider>
            {props.children}
        </Context.Provider>
}
 
export default  contextProvider;