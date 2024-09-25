
import Navbar from "../../components/navbar/Navbar"
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Layout() {
    gsap.registerPlugin(useGSAP);

     

    useGSAP(() => {
        // gsap code here...
        gsap.from(".navbars", { top: -100, duration: 1.5, position: "sticky" , width:"100%" , zIndex:111});
        gsap.to(".navbars", { top: 0, duration: 1.5, position: "sticky" , width:"100%" , zIndex:111}); 
        
        

    })
    return (
        <div className="layout">
            <div className="navbars">
          
                <Navbar />
     
            </div>
            <div className="content">
                   <Outlet />
            </div>
        </div>
    );
}

export default Layout;