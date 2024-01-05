import Image from 'next/image';
import Link from 'next/link';
import styls from "./Header.module.css";
import {links} from './data';
import React from 'react';
export default function Header() {
    return (
  
    <div className={styls.container}>
        <h1 className={styls.title}> التصنيفات</h1>
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
            </div>
            <Link key={link.id} href={link.url} className={styls.mx} >{link.title}</Link>
        </div>
      )
    })}
        </div>
    


   
       
    </div>

    );
}





