import React from 'react'
import classes from './header.module.css'
import Image from 'next/image'
import bannerImage from '../../public/banner-image.png'
import Button from '../Library/Button/index'
import HeaderBottom from './HeaderBottom'

export default function Header() {
  return (
    <>
        <header className={ `${ [classes.headerOuterContainer, classes.video].join(' ') } bg-gray-600 p-4` }>
            <video 
                src="./video/bg-five.mp4" 
                loop 
                muted 
                autoPlay
                poster={ bannerImage } 
                className={ classes.bgVideo }
            >
            </video>
            <div className={ `${ classes.innerContainer } container relative z-10` }>
                <div className={ classes.textBox }>
                    <h1 className={ `${ classes.title } font-black text-5xl mb-4` }>Award Winning  Digital Service Agency</h1>
                    <h2 className={ `${ classes.subtitle }` }>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h2>
                    <div className='flex mt-8 gap-5'>
                        <Button className={ ['text-white'].join(' ') } href='#'>Book Demo</Button>
                        <Button type='outline'>Our Showcase</Button>
                    </div>
                </div>
                <div className={ classes.bannerImage }>
                    <Image src={ bannerImage } alt="Banner Image" />
                </div>
            </div>
        </header>
        <HeaderBottom />
    </>
  )
}
