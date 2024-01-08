import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";
import Shop from "../../components/Shop";
import { Container } from "../Account/styles";
import { Details } from "../../styles";
import { Address, DivAddress, DivTwoInputs, SelectS } from "../Shipping/styles";

// Data
import { address } from "../../data/data";
import InputS from "../../components/Inputs";

export default function Payment(){
        // useContext
        const {setPath} = useContext(AppContext) as AppContextType;

        // useEffect
        useEffect(() => {
            setPath(window.location.href);
        },[])
    return(
        <Container>
        <Details>Detalhes do pagamento</Details>
        <DivAddress>
        <Address>Usar cartão salvo</Address>
        <SelectS>
        <option value="">--Selecione um cartão--</option>
        {address.map((item) => {
            return(
                <option key={item.id} value={item.name}>{item.name}</option>
            )
        })}
        </SelectS>
        </DivAddress>
        <>
            <InputS type="text" label="Nome do cartão"   />
            <InputS type="text" label="Número do cartão"  />
        </>
        <DivTwoInputs>
            <InputS type="text" label="Expiração" />
            <InputS type="text" label="CVC" />
        </DivTwoInputs>
        <Shop />
      </Container> 
    )
}