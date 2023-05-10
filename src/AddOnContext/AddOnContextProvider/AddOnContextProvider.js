import AddOnContext from '../AddOnContext'
const  AddOnContextProvider = (props) => {
        <AddOnContext.Provider>
            {props.children}
        </AddOnContext.Provider>
}
 
export default  AddOnContextProvider;