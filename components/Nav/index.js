import style from './nav.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link';


export default function Nav() {
    return (
        <div className={ style.navOuterContainer }>
            <div className={ `${ style.navContainer } container` }>
                <a href="#">
                    <Image 
                        src={logo}
                        alt='Logo'
                    />
                </a>
                <nav className='style.navContainer'>
                    <Link href="/">Home</Link>
                    <a href="">About</a>
                    <a href="#">Contact</a>
                    <div className={ style.dropdown_wrapper }>
                        <a href="#">More</a>
                        <div className={ style.dropdown }>
                            <div>
                                <a href="#">Option One</a>
                                <a href="#">Option Two</a>
                                <a href="#">Option Three</a>
                                <a href="#">Option Four</a>
                            </div>
                        </div>
                    </div>
                    <a href='#' className={ style.bookBtn }>Book a Meeting</a>
                </nav>
            </div>
        </div>
    )
}
