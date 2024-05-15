import React, { useState } from "react"
import { useEffect } from "react"
export default function Alert(){
    const[alertDone,setAlertDone]=useState(false);
    useEffect(function(){
        console.log("Uruchomienie alertu");
        setTimeout(function(){
            console.log("Zakończenie alertu");
            setAlertDone(true);
        },2000);
    },[]);
    return (
        <>
            {!alertDone ? (<p>Spokojnie jscze masz czas!</p>) : (<p>Koniec czasu!</p>)}
        </>
    )
}
