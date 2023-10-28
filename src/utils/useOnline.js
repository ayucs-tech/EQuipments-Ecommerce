import { useEffect } from "react";
import { useState } from "react"

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        }
        const handleOffline=() => {
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            //to contain the mess in this page online and unload from browser
            //to remove this hook on unmounting
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);


    return isOnline;
}

export default useOnline;