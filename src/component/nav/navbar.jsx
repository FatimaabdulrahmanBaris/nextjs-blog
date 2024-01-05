import Image from 'next/image';
import styls from "./Navbar.module.css";
function navbar() {
    return (
        <>
        <div className={styls.container}>
     
             <div className={styls.conuntui} >
                <div className={styls.count}>
                                <ul className={styls.ul1}>
                                    <li className={styls.lim}>
                                    <a href='/' className='text-blak'>
                                    <Image 
                                    src="/img/1.png"
                                    width={25}
                                    height={24}
                                    />
                                        </a>
                                    </li>
                                    <li className={styls.lim}>
                                    <a href='/' className='text-blak'>
                                    <Image 
                                    src="/img/2.png"
                                    width={25}
                                    height={24}
                                    />
                                </a>
                                    </li>
                                    <li className={styls.lim}>
                                    <a href='/' className='text-blak'>
                                    <Image 
                                    src="/img/3.png"
                                    width={25}
                                    height={24}
                                    />
                                </a>
                                    </li>
                                    <li className={styls.lim}>
                                    <a href='/' className='text-blak'>
                                    <Image 
                                    src="/img/4.png"
                                    width={25}
                                    height={24}
                                    />
                                </a>
                                    </li>
                                    <li className={styls.lima}>
                                    <a href='/' className='text-blak'>
                                    كل المدن
                                    </a>
                                    <Image className='size-5'
                                    src="/img/5.png"
                                    width={15}
                                    height={15}
                                    />
                                
                                    </li>
                                   <li className={styls.lim}>
                                    <div className={styls.lima}>
                                   
                                    <input className={styls.inp} placeholder='...ابحث عن منتجك' /> 
                                    <Image className={styls.mimg}
                                  src="/img/6.png"
                                  width={10}
                                  height={10}
                                  />
                                    </div>
                                    
                                   </li>
                            
                                </ul>
                                <ul className={styls.ul2}>
                                    <li className={styls.lim}>
                                    <a href='/' className='text-blak'>
                                   العروض والتخفيضات
                                        </a>
                                    </li>
                                    <li className={styls.lim}>
                                    <a href='/' className='text-blak'>
                                    المتاجر
                                </a>
                                    </li>
                                    <li className={styls.lim}>
                                    <a href='/' className='text-blak'>
                                   عن صلة
                                </a>
                                    </li>
                                    <li className={styls.lim}>
                                    <a href='/' className='text-blak'>
                                    <Image 
                                    src="/img/7.png"
                                    width={50}
                                    height={50}
                                    />
                                </a>
                                    </li>
                                </ul>
                        </div>
                       
             </div>
        
           <div className={styls.new}>
            <div className={styls.groupimg}>
                <div className={styls.cicle}>
                <Image 
                className={styls.cicleimg}
                                    src="/img/1.png"
                                    width={15}
                                    height={15}
                                    />
                </div>
                <div className={styls.cicle}>
                <Image             className={styls.cicleimg}
                                    src="/img/8.png"
                                    width={15}
                                    height={15}
                                    />
                </div>
                <div className={styls.cicle}>
                <Image className={styls.cicleimg}
                                    src="/img/5.png"
                                    width={15}
                                    height={15}
                                    />
                </div>
           
            </div>
            <div className={styls.grouptext}>
            <h5>مطعم الركن الدمشقي-مطاعم ووجبات</h5>
                <p>
                    مأكولات شرقية -مأكولات غربية -شاورما - وجبات سريعة - سناك
                </p>   
            </div>
              
           </div>
        </div>
           
        </>
    );
}

export default navbar;



