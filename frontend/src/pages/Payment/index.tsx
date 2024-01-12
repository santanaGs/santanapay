// Imports
import { useContext, useEffect, useState } from "react";

// Global Components
import Shop from "../../components/Shop";
import InputS from "../../components/Inputs";

// Styled Components
import { Container } from "../Account/styles";
import { Details } from "../../styles";
import { Address, DivAddress, DivTwoInputs, SelectS } from "../Shipping/styles";

// useContext
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";

import api from "../../services/api";

export default function Payment() {
    // useContext
    const { setPath } = useContext(AppContext) as AppContextType;

    // useEffect
    useEffect(() => {
        setPath(window.location.href);
        api.get('/cards').then((res) => {
            setData(res.data)
        })
    }, [])

    // variables
    const [selectedItem, setSelectedItem] = useState(null);
    const [name, setName] = useState<string>('');
    const [numberCard, setNumberCard] = useState<string>('');
    const [exp, setExp] = useState<string>('');
    const [cvc, setCvc] = useState<number | null>(null);
    const [data, setData] = useState<any[]>([]);


    // funciotons
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        const selectedOption = data.find(item => item.nickName === selectedValue);

        if (selectedOption) {
            setName(selectedOption.userName);
            setNumberCard(selectedOption.numberCard);
            setExp(selectedOption.exp);
            setCvc(selectedOption.cvc);
        }

        setSelectedItem(selectedOption);
        console.log(selectedItem)
    };
    // Rendering
    return (
        <Container>
            <Details>Detalhes do pagamento</Details>
            <DivAddress>
                <Address>Usar cartão salvo</Address>
                <SelectS onChange={handleSelectChange}>
                    <option value="">--Selecione um cartão--</option>
                    {data.map((item) => {
                        return (
                            <option key={item.id} value={item.nickName}>{item.nickName}</option>
                        )
                    })}
                </SelectS>
            </DivAddress>
            <>
                <InputS type="text" label="Nome do cartão" value={name} />
                <InputS type="text" label="Número do cartão" value={numberCard} />
            </>
            <DivTwoInputs>
                <InputS type="text" label="Expiração" value={exp} />
                <InputS type="number" label="CVC" value={cvc?.toString()} />
            </DivTwoInputs>
            <Shop />
        </Container>
    )
}