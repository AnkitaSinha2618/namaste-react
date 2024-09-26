import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const [status, setStatus] = useState(true)
    //check if online
    useEffect(()=>{
        window.addEventListener("offline", () => {
            setStatus(false);
        });
        window.addEventListener("online", () => {
            setStatus(true);
        })
    },[]);

    return status;
}

export default useOnlineStatus;