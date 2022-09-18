import axios from "axios";
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Test(){

    const [result, setResult] = useState('');
    const { user } = useAuth(); 

    useEffect(() => {
        axios
        .get("https://api.genderize.io/?name=luc")
        .then(result => {
            setResult(result.data.gender);
        })
    }, []);

    return (
        <div className="bg-warning d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
            {user === '' ? <Navigate to='/' /> : <h1>{result}</h1>}
        </div>
    )
}