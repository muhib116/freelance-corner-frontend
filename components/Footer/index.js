import classes from './footer.module.css'
import Image from 'next/image'
import logo from '/public/footer-logo.svg'

export default function Footer() {
    return (
        <div className={ [classes.outerContainer].join(' ') }>
            <div className={ ['container', classes.innerContainer].join(' ') }>

                <div className={ [classes.left_section, 'pr-5'].join(' ') }>
                    <Image 
                        className={ [classes.footer_logo, 'opacity-60'].join(' ') } 
                        src={logo.src} width={logo.width} 
                        height={logo.height} 
                        alt="Footer Logo" 
                    />
                    <p className={ [classes.footer_description].join(' ') }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum has beenLorem</p>
                    <div className={ ['mt-4', classes.social_icon_wrapper].join(' ') }>
                        <span className={ ['block mb-2 opacity-40'].join(' ') }>Follow Us</span>
                        <div className={ [classes.social_icon].join(' ') }>
                            <a href="#" title="Facebook">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#3B5998" fillRule="evenodd" d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"/>
                                </svg>
                            </a>
                            <a href="#" title='Twitter'>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#1DA1F2" fillRule="evenodd" d="M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"/>
                                </svg>
                            </a>
                            <a href="#" title="Linkedin">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#0077B5" fillRule="evenodd" d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"/>
                                </svg>
                            </a>
                            <a href="#" title="Youtube">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#ff0000" fillRule="evenodd" d="M9.522,15.553 L9.52125,8.80975 L16.00575,12.193 L9.522,15.553 Z M23.76,7.64125 C23.76,7.64125 23.52525,5.9875 22.806,5.25925 C21.89325,4.303 20.87025,4.2985 20.4015,4.243 C17.043,4 12.00525,4 12.00525,4 L11.99475,4 C11.99475,4 6.957,4 3.5985,4.243 C3.129,4.2985 2.10675,4.303 1.19325,5.25925 C0.474,5.9875 0.24,7.64125 0.24,7.64125 C0.24,7.64125 0,9.58375 0,11.5255 L0,13.3465 C0,15.289 0.24,17.23075 0.24,17.23075 C0.24,17.23075 0.474,18.8845 1.19325,19.61275 C2.10675,20.569 3.306,20.539 3.84,20.63875 C5.76,20.82325 12,20.88025 12,20.88025 C12,20.88025 17.043,20.87275 20.4015,20.62975 C20.87025,20.5735 21.89325,20.569 22.806,19.61275 C23.52525,18.8845 23.76,17.23075 23.76,17.23075 C23.76,17.23075 24,15.289 24,13.3465 L24,11.5255 C24,9.58375 23.76,7.64125 23.76,7.64125 L23.76,7.64125 Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={ ['grid px-4'].join(' ') }>
                    <h4 className={ ['grid text-lg text-white opacity-80 mb-2'].join(' ') }>Services</h4>
                    <div className={ ['grid text-sm text-white mb-2'].join(' ') }>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Branding</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Seo</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>WordPress</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Web Design</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Web App </a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>UI UX Design</a>
                    </div>
                </div>
                <div className={ ['grid px-4'].join(' ') }>
                    <h4 className={ ['grid text-lg text-white opacity-80 mb-2'].join(' ') }>Company</h4>
                    <div className={ ['grid text-sm text-white mb-2'].join(' ') }>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>About us</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Leadership</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Careers</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Article & News</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Contact us</a>
                    </div>
                </div>
                <div className={ ['grid px-4'].join(' ') }>
                    <h4 className={ ['grid text-lg text-white opacity-80 mb-2'].join(' ') }>Academy</h4>
                    <div className={ ['grid text-sm text-white mb-2'].join(' ') }>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Learn</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Forum</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Community</a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Students </a>
                        <a className={ ['grid text-sm text-white opacity-40 mb-2 hover:opacity-100'].join(' ') } href='#'>Teachers</a>
                    </div>
                </div>
            </div>
        </div>
    )
}