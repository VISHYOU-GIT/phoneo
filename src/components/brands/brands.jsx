import '@splidejs/react-splide/css';

import { Splide, SplideSlide, } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useEffect } from 'react';
import './brands.css'
export default function Brands() {


    const brands = [
        "/brands/samsung.webp",
        "/brands/apple.webp",
        "/brands/oppo.webp",
        "/brands/vivo.webp",
        "/brands/realme.webp",
        "/brands/mi.webp",
        "/brands/oneplus.webp",
        "/brands/motorola.webp",
        "/brands/lenovo.webp",
        "/brands/asus.webp",
        "/brands/tecno.webp",
        "/brands/honor.webp",
        "/brands/nokia.webp",
        "/brands/infinix.webp",
        "/brands/itel.webp",
        "/brands/lava.webp",
        "/brands/micromax.webp",
        "/brands/nothing.webp",

    ];
     
    return (
        <>
            <div className="brands">
                <Splide options={{
                      pagination: false, type: 'loop', perPage: 10, gap: '1rem', breakpoints: { 640: { perPage: 2 }, 768: { perPage: 4 }, 1024: { perPage: 5 } },   arrows: false, autoScroll: {
                        speed: 1,
                    }, 
                }} extensions={{ AutoScroll }} aria-label="My Favorite Images">
                    {brands.map((brand, index) => (
                        <SplideSlide key={index}>
                            <img src={brand} className='brand-img' />
                        </SplideSlide>
                    ))}
                </Splide></div>
        </>
    );
}

