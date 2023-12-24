// Imprts
import React, { useContext, useEffect } from "react";

// Context
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";

export default function Shipping(){
    // useContext
    const {setPath} = useContext(AppContext) as AppContextType;

    // useEffect
    useEffect(() => {
        setPath(window.location.href);
    },[])

    // Rendetring
    return(
        <div><p>oi</p></div>
    )
}