import { useEffect } from "react"
export default function Alert(){
    useEffect(function(){
        setTimeout(function(){},2000);
    },[]);
    return (
        <>
            {!alertDone ? (<p>Spokojnie jscze masz czas!</p>) : (<p>Koniec czasu!</p>)}
        </>
    )
}
