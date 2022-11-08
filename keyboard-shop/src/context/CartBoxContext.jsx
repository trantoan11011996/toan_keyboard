import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const CartBoxContext = React.createContext({
    isCartBoxOpen : false,
    setIsCartBoxOpen : ()=>{}
})


export const CartBoxContextProvider = ({value,children})=>{
    const {isCartBoxOpen,setIsCartBoxOpen} = value 
    const location = useLocation()
    useEffect(()=>{
        setIsCartBoxOpen(false)
    },[location])
    return(
        <CartBoxContext.Provider value={value}>
            {children}
        </CartBoxContext.Provider>
    )
}
export default CartBoxContext

