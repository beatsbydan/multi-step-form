import { useState } from "react";
import PackageContext from "../PackageContext"
import Packages from "../../Components/Step2/Packages";
import AddOns from "../../Components/Step3/AddOn/AddOns";

const PackageContextProvider = (props) => {
    const [myPeriod, setMyPeriod] = useState('monthly')
    const [currentIndex, setCurrentIndex] = useState('-1')
    const [checked, setChecked] = useState(
        new Array(AddOns.length).fill(false)
    )
    const [myAddOns, setMyAddOns] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const defaultPackage = {
        package: "",
        pricePerDuration:""
    }
    const [myChoices, setMychoices] = useState(defaultPackage)
    const setMonthlyPeriod = () => {
        setCurrentIndex('-1')
        setChecked(new Array(AddOns.length).fill(false))
        setMyPeriod('monthly')
        setMychoices(defaultPackage)
    }
    const setYearlyPeriod = () => {
        setCurrentIndex('-1')
        setChecked(new Array(AddOns.length).fill(false))
        setMyPeriod('yearly') 
        setMychoices(defaultPackage)
    }
    const selectPackage = (e) => {
        setChecked(new Array(AddOns.length).fill(false))
        setMyAddOns([])
        setMychoices(defaultPackage)
        for(let i = 0; i < Packages.length; i++){
            const focusBox = e.target.closest('li')
            if(focusBox.className.includes(Packages[i].package)){
                setCurrentIndex(focusBox.id)
                setMychoices({
                    package:Packages[i].name,
                    pricePerDuration: myPeriod === 'monthly' ? Packages[i].perMonth : Packages[i].perYear,
                })
                let updatedAmount = myPeriod === 'monthly' ? Packages[i].perMonth : Packages[i].perYear
                setTotalAmount(updatedAmount)
            }
        }
    }
    const selectAddOn = (position) => {
        const updateChecked = checked.map((item,index)=>{
            return index === position ? !item: item
        })
        setChecked(updateChecked)
        let myAddOn = {
            title: AddOns[position].title,
            pricePerDuration: myPeriod === 'monthly' ? AddOns[position].pricePerMonth: AddOns[position].pricePerYear
        }
        if(updateChecked[position]){
            let updatedAddOn = myAddOns.concat(myAddOn)
            setMyAddOns(updatedAddOn)
            let updatedAmount = totalAmount + myAddOn.pricePerDuration
            setTotalAmount( updatedAmount)
        }
        else{
            const addOnsLeft = myAddOns.filter(item=>{
                return item.title !== myAddOn.title
            })
            setMyAddOns([...addOnsLeft])
            let updatedAmount = totalAmount - myAddOn.pricePerDuration
            setTotalAmount(updatedAmount)
        }
    }
    const packageContext = {
        totalAmount: totalAmount,
        checked: checked,
        currentIndex: currentIndex,
        duration: myPeriod,
        myChoices: myChoices,
        package: myChoices.package,
        pricePerDuration: myChoices.pricePerDuration,
        addOns: myAddOns,
        selectPackage: selectPackage,
        selectAddOn: selectAddOn,
        setMonthlyPeriod: setMonthlyPeriod,
        setYearlyPeriod: setYearlyPeriod
    }
    return ( 
        <PackageContext.Provider value={packageContext}>
            {props.children}
        </PackageContext.Provider>
     );
}
 
export default PackageContextProvider;