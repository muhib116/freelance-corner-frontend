import classes from './twoGridSection.module.css'
import Image from 'next/image'
import Button from '../Library/Button'
import aboutImage from '../../public/about-us.jpg'

export default function TwoGridSection({ reverse }) {
  return (
    <div className={ [classes.outerContainer, classes.reverse].join(' ') }>
        <div className={ ['container', classes.innerContainer].join(' ') }>
            <div>
                <p className={ [classes.subTitle, 'text-sm lowercase'].join(' ') }>this is sub title for long text</p>
                <h3 className={ [classes.title, 'text-black font-black text-4xl mb-4'].join(' ') }>
                    <span>Why</span> Choose Us
                </h3>
                <p>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <ul className={ ['mt-4'].join(' ') }>
                    <li>It has survived not only five centuries</li>
                    <li>remaining essentially unchanged</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                </ul>
                <a 
                    href='#' 
                    className='ml-auto block w-fit'
                >
                    Read more...
                </a>
            </div>
            <div className={ classes.image }>
                <Image src={ aboutImage } alt="About Us" />
            </div>
        </div>
    </div>
  )
}
