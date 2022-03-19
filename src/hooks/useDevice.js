import { useEffect, useState } from "react"
import { getDeviceWidth } from "../utils/device";

export const useDevice = () => {
    const [width, setWidth] = useState(getDeviceWidth());
    const device = {
        isMobile: false,
        isTab: false,
        isDesktop: false,
    }
    const handleWidth = () => {
        setWidth(getDeviceWidth());
    }
    useEffect(() => {
      window.addEventListener("resize",handleWidth);
    
      return () => {
        window.removeEventListener("resize",handleWidth);
      }
    }, []);
    
    if(width < 768)
        device.isMobile = true;
    else if(width < 1024)
        device.isTab = true
    else
        device.isDesktop = true;
        
    return device;    
}