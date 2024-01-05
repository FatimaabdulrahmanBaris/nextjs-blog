'use client'
import Image from 'next/image';
import Link from 'next/link';
import styls from "./Compont.module.css";
import {links} from './data';
import React from 'react';
import { useRouter } from 'next/router';
export let id;
export default function Broilers() {
    return (
     

        <div className={styls.group}>
        {links.map(function(link) {
             return (
        <div className={styls.comp}>
            <div className={styls.box}>
            <Image 
                className={styls.cicleimg}
                                    src={link.src}
                                    width={100}
                                    height={100}
                                    />
                                     <h4 className={styls.h4}>{link.title} </h4>
            <p className={styls.p}>مطعم الركن الدمشقي </p>
            <h4 className={styls.h4}>{link.price} </h4>


            <Link
                     href={{
  
                         query: link // the data
                                   }}
>
                    <button className={styls.button}>  اطلب الان</button> 
             </Link>
            </div>
           
           
            
        </div>
      )
    })}
        </div>
       


    );
}






