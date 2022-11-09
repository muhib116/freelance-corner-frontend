import React from 'react'
import style from './header.module.css'
import Image from 'next/image'
import bannerImage from '../../public/banner-image.png'
import Button from '../../components/Library/Button/index'

export default function Header() {
  return (
    <header className={ `${ [style.headerOuterContainer, style.video].join(' ') } bg-gray-600 p-4` }>
        <video 
            src="./bg-video-two.mp4" 
            loop 
            muted 
            autoPlay
            poster={ bannerImage } 
            className={ style.bgVideo }
        >
        </video>
        <div className={ `${ style.innerContainer } container relative z-10` }>
            <div className={ style.textBox }>
                <h1 className={ `${ style.title } font-black text-4xl mb-4` }>Award Winning  Digital Service Agency</h1>
                <h2 className={ `${ style.subtitle }` }>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h2>
                <div className='flex mt-8 gap-5'>
                    <Button className={ ['text-white'].join(' ') } href='#'>Book Demo</Button>
                    <Button type='outline'>Our Showcase</Button>
                </div>
            </div>
            <div className={ style.bannerImage }>
                <Image src={ bannerImage } alt="Banner Image" />
            </div>
        </div>
    </header>
  )
}
