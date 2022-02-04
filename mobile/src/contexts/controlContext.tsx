import React,{createContext, ReactNode, useState, useEffect} from 'react';
import api from '../../server/api';

interface Values{
    valorBruto:number | 0;
    precoVenda:number | 0;
    valorObtido:number | 0;
    lucroPrejuizo:number | 0;
}

interface Control{
    values:Values | undefined;
    calcValuesStock : () => Promise<void>
}

interface Provider{
    children:ReactNode;
}

interface Produto {
    id: number,
    nome: string,
    valorVenda: number,
    valorCompra: number,
    quantidade: number
}

interface Manager {
    valor: 0
}

export const controlContext =  createContext({} as Control)

export function ControlContextProvider(props: Provider){
    const [produto, setProduto] = useState<Produto[]>([]);
    const [values,setValues] = useState<Values>();
    const [bruto, setBruto] = useState(0);
    const [geral,setGeral] = useState(0);

    async function calcValuesStock(){
        let managerBruto = 0
        let managerVenda = 0

        await api.get('produtos').then(response => {
            setProduto(response.data)
        });

        produto.map(item =>{
            managerBruto = managerBruto+(item.valorCompra*item.quantidade);
            managerVenda = managerVenda+(item.valorVenda*item.quantidade);
            
            setBruto(managerBruto);
            setGeral(managerVenda);
        })

        setValues({
            valorBruto:bruto,
            precoVenda:geral,
            valorObtido:0,
            lucroPrejuizo:0,
        })
        console.log(managerBruto,managerVenda)
        await api.put(`control/1`,values);
      
    }

    return (
        <controlContext.Provider value={{values,calcValuesStock}}>
            {props.children}
        </controlContext.Provider>
    )
}