import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Carousel } from 'antd';
import Brands from '../../components/brands/brands';
import Product from '../../components/products/product';
gsap.registerPlugin(useGSAP, ScrollTrigger);
import './home.css'

export default function Home() {
    const main = useRef();

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.box');
            boxes.forEach((box) => {
                gsap.to(box, {
                    x: 150,
                    scrollTrigger: {
                        trigger: box,
                        start: 'bottom bottom',
                        end: 'top 20%',
                        scrub: true,
                        // markers: true,
                    },
                });
            });
        },
        { scope: main }
    );

    return (
        <>
        <div className='Home'>
            <Carousel effect="fade" className='slider' autoplay>
                <div>
                    <img src="/banner1.jpg" alt="" />
                </div>
                <div>
                    <img src="/banner2.jpg" alt="" />

                </div>
                <div>
                    <img src="/banner3.jpg" alt="" />

                </div>
                <div>
                    <img src="/banner4.jpg" alt="" />
                </div>
            </Carousel>

            <div>
                
            
</div>


        </div> 
           <div className="brands bg-light       p-4"  >
<Brands/>
            </div>
            <div className="container-fluid">
                <Product />
        </div>
        
        </>
    );
}
