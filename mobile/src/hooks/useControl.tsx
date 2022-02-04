import { useContext } from "react";
import { controlContext } from "../contexts/controlContext";

export function useControl(){
    
    return  useContext(controlContext);
}