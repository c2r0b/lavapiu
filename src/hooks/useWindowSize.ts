import { useEffect, useState } from "react";

interface WindowDimensions {
    width: number | undefined;
    height: number | undefined;
}

export default () => {
    const [windowSize, setWindowSize] = useState<WindowDimensions>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return windowSize;
}