import React from "react";

const PackageContext =  React.createContext({
    totalAmount: "",
    checked: "",
    myChoices: "",
    currentIndex: "",
    duration: "",
    package: "",
    pricePerDuration: "",
    addOns: [],
    selectPackage: ()=>{},
    selectAddOn: ()=>{},
    setMonthlyPeriod: ()=>{},
    setYearlyPeriod: ()=>{}
})
 
export default PackageContext;