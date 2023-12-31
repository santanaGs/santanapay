// Imprts
import React, { useContext, useEffect, useState } from "react";

// Global Style
import { Container } from "../Account/styles";
import { Details } from "../../styles";
import { Address, DivAddress, DivTwoInputs, SelectS } from "./styles";

// Global Components
import InputS from "../../components/Inputs";
import Shop from "../../components/Shop";

// Context
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";

// Data
import { address } from "../../data/data";

export default function Shipping(){
    // useContext
    const {setPath} = useContext(AppContext) as AppContextType;

    // useEffect
    useEffect(() => {
        setPath(window.location.href);
    },[])

    // Variables
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedRoad, setSelectedRoad] = useState('');
    const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [roadNeighbothood, setRoadNeighbothood] = useState('');

    const handleSelectChange = (event:any) => {
      const selectedValue = event.target.value;
      
        console.log(selectedValue);
    
        const selectedOption = address.find(item => item.name === selectedValue);

        if (selectedOption) {
          setSelectedCity(selectedOption.city);
          setSelectedRoad(selectedOption.road);
          setSelectedNeighborhood(selectedOption.neighborhood);
          setSelectedNumber(selectedOption.number);
          setSelectedState(selectedOption.state);
          setRoadNeighbothood(selectedOption.road + ' , ' + selectedOption.neighborhood)
        }

      setSelectedItem(selectedItem);
    };

    // Rendetring
    return(
        <Container>
        <Details>Detalhes do envio</Details> 
        <DivAddress>
        <Address>Usar endereço salvo</Address>
        <SelectS onChange={handleSelectChange}>
        <option value="">--Selecione um endereço--</option>
        {address.map((item) => {
            return(
                <option key={item.id} value={item.name}>{item.name}</option>
            )
        })}
        </SelectS>
        </DivAddress>
        <>
            <InputS type="text" label="Cidade" value={selectedCity} />
            <InputS type="text" label="Rua, Bairro" value={roadNeighbothood}/>
        </>
        <DivTwoInputs>
            <InputS type="text" label="Número" value={selectedNumber} />
            <InputS type="text" label="Estado" value={selectedState} />
        </DivTwoInputs>
        <Shop/> 
      </Container>
    )
}