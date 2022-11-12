import classes from './portfolio.module.css'
import Image from 'next/image'

const portfolioType = [
    {
        title: 'All Project',
        isActive: true
    },
    {
        title: 'Branding',
        isActive: false
    },
    {
        title: 'UI/UX',
        isActive: false
    },
    {
        title: 'Web Design',
        isActive: false
    },
    {
        title: 'Web Development',
        isActive: false
    },
    {
        title: 'Digital Marketing',
        isActive: false
    },
]

export default function Services() {
  return (
    <div className={ [classes.outerContainer, classes.video].join(' ') }>
        <div className={ ['container', classes.innerContainer].join(' ') }>
            <div>
                <h3 className={ [classes.title, 'text-black font-black text-5xl mb-2'].join(' ') } >
                    <span>Our</span> Portfolio
                </h3>
                <p className={ [classes.subTitle, 'text-sm lowercase mb-10'].join(' ') }>
                    Get inspired with creative projects Made by our Team
                </p>
            </div>

            <div className={ [classes.tab_btn_wrapper].join(' ') }>
                {
                    portfolioType.map(item => (
                        <button className={ [item.isActive && classes.active].join(' ') } key={ Math.random() }>
                            { item.title }
                        </button>
                    ))
                }
            </div>

            <div className={ [classes.tab_output].join(' ') }>
                <div>
                    <Image src='/portfolio/1.jpg' width='500' height='500' alt='' />
                </div>
                <div>
                    <Image src='/portfolio/2.jpg' width='500' height='500' alt='' />
                </div>
                <div>
                    <Image src='/portfolio/3.jpg' width='500' height='500' alt='' />
                </div>
                <div>
                    <Image src='/portfolio/4.jpg' width='500' height='500' alt='' />
                </div>
                <div>
                    <Image src='/portfolio/5.jpg' width='500' height='500' alt='' />
                </div>
                <div>
                    <Image src='/portfolio/6.jpg' width='500' height='500' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}
