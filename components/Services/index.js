import classes from './services.module.css'
import Image from 'next/image'

const data = [
    {
        src: '/icons/min.branding.webp',
        title: 'Brand Identity',
        description: `
            Lorem Ipsum is simply dummy text of the we
            printing and typesetting industry Lorem Ipsum is simply dummy text of theprinting and typesetting industry 
            Lorem Ipsum is simply dummy text of the  printing and 
        `,
        link: '#',
        linkText: 'Read More'
    },
    {
        src: '/icons/min.wp.webp',
        title: 'Wordpress',
        description: `
            Lorem Ipsum is simply dummy text of the we
            printing and typesetting industry Lorem Ipsum is simply dummy text of theprinting and typesetting industry 
            Lorem Ipsum is simply dummy text of the  printing and 
        `,
        link: '#',
        linkText: 'Read More'
    },
    {
        src: '/icons/min.seo.webp',
        title: 'SEO',
        description: `
            Lorem Ipsum is simply dummy text of the we
            printing and typesetting industry Lorem Ipsum is simply dummy text of theprinting and typesetting industry 
            Lorem Ipsum is simply dummy text of the  printing and 
        `,
        link: '#',
        linkText: 'Read More'
    },
    {
        src: '/icons/min.web-development.webp',
        title: 'Web Development',
        description: `
            Lorem Ipsum is simply dummy text of the we
            printing and typesetting industry Lorem Ipsum is simply dummy text of theprinting and typesetting industry 
            Lorem Ipsum is simply dummy text of the  printing and 
        `,
        link: '#',
        linkText: 'Read More'
    },
    {
        src: '/icons/min.ui-ux.webp',
        title: 'UI UX Design',
        description: `
            Lorem Ipsum is simply dummy text of the we
            printing and typesetting industry Lorem Ipsum is simply dummy text of theprinting and typesetting industry 
            Lorem Ipsum is simply dummy text of the  printing and 
        `,
        link: '#',
        linkText: 'Read More'
    },
    {
        src: '/icons/min.digital-marketing.webp',
        title: 'Digital Marketing',
        description: `
            Lorem Ipsum is simply dummy text of the we
            printing and typesetting industry Lorem Ipsum is simply dummy text of theprinting and typesetting industry 
            Lorem Ipsum is simply dummy text of the  printing and 
        `,
        link: '#',
        linkText: 'Read More'
    },
]

export default function Services() {
  return (
    <div className={ [classes.outerContainer, classes.video].join(' ') }>
        <video 
            src="./video/bg-three.mp4" 
            loop 
            muted 
            autoPlay
            className={ classes.bgVideo }
        ></video>
        <div className={ ['container', classes.innerContainer].join(' ') }>
            <div>
                <p className={ [classes.subTitle, 'text-sm lowercase mb-2'].join(' ') }>Service we Deliver</p>
                <h3 className={ [classes.title, 'text-black font-black text-5xl mb-4'].join(' ') } >
                    <span>Complete</span> Digital Solutions
                </h3>
            </div>
            <div className={ [classes.service_item_wrapper].join(' ') } >
                {
                    data.map(item => (
                        <div className={ [classes.service_item].join(' ') }  key={ Math.random() }>
                            <div className={ classes.img }>
                                <Image src={ item.src } width="100" height="100" alt="Branding Icon" />
                            </div>
                            <h3 className={ [classes.item_title].join(' ') }>{ item.title }</h3>
                            <p className={ [classes.item_description].join(' ') }>{ item.description }</p>
                            <a href={ item.link }>{ item.linkText }</a>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
