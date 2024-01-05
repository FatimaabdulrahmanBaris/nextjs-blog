import Image from 'next/image'
import styls from "./Containfood.module.css";
import Categoryfood from './(dynamic)/Broilers/page'
export default function containfood() {
  return (
  <>
<div className={styls.containfood}>
<div className={styls.category}>
  <Categoryfood/>
</div>
    <div className={styls.basket}></div>
</div>
  </>
  )
}
