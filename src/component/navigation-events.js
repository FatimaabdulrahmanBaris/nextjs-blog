'use client'
import Image from 'next/image';
import styls from "./nav/Navbar.module.css";
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
 let orders=[]
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
  
   
  }, [pathname, searchParams])
 
  const id = searchParams.get('id')
  
  return (
   
      <div className={styls.containbag}>
        <div className={styls.box}>
          <div>
        
          </div>
          <div>
            <h4>{searchParams.get('title')}</h4>
            <p>{searchParams.get('price')}</p>
          </div>
        </div>
      </div>

  



      
  
  )
}