// Imports
import React,{ useEffect, useState, useContext } from "react";
import { CheckProgress, Header, HeaderProgress } from "./styles";

// Images
import activeIcon from '../../assets/svg/Check.svg'
import disableIcon from '../../assets/svg/CheckDisable.svg'

// Context
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";

export default function ProgessBar(){
    // Context
    const {path, setPath} = useContext(AppContext) as AppContextType;
    
    // useEffect
    useEffect(() => {
        setPath(window.location.href);
    },[])

    // Varaibles
    const shipping = 'http://localhost:5173/shipping';
    const payment = 'http://localhost:5173/payment';

    // Rendering
    return(
        <>
        <Header>
            <HeaderProgress active>Conta</HeaderProgress>
            <HeaderProgress  active>-</HeaderProgress>
            <CheckProgress src={activeIcon}/>
            <HeaderProgress active>-</HeaderProgress>
            <HeaderProgress active={path == shipping || path == payment}>Envio</HeaderProgress>
            <HeaderProgress active={path == shipping || path == payment}>-</HeaderProgress>
            {path == payment ? (
                <CheckProgress src={activeIcon}/>
            ): (
                <CheckProgress src={disableIcon}/>
            )}
            <HeaderProgress active={path == payment}>-</HeaderProgress>
            <HeaderProgress active={path == payment}>Pagamento</HeaderProgress>
        </Header>
        </>
    )
}