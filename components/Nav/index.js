import style from './nav.module.css'

export default function Nav() {
    return (
        <div className={ style.navOuterContainer }>
            <div className={ `${ style.navContainer } container` }>
                <a href="#">
                    <img 
                        className={ style.nav_logo }
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DkVkL9XWuiNUGKmP2YbMlSTXh2hkX_GUjw&usqp=CAU"
                        alt='Logo'
                    />
                </a>
                <nav className='style.navContainer'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
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
