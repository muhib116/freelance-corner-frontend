import classes from './workingprocess.module.css'
import Image from 'next/image'
import processImage from '/public/work-process.jpg'
import Button from '../Library/Button'
import { useEffect, useState } from 'react'
import useHelper from '../useHelper'
import useWorkingProcess from './useWorkingProcess'

const data = [
    {
        src: '/icons/idea.png',
        title: 'Collect Idea',
        description: `
            1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        `,
        link: '#',
        linkText: 'Set a Meeting',
        isActive: true
    },
    {
        src: '/icons/reasearch.png',
        title: 'Research Project ',
        description: `
            2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        `,
        link: '#',
        linkText: 'Set a Meeting',
        isActive: false
    },
    {
        src: '/icons/start-working.png',
        title: 'Start Working',
        description: `
            3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like It was popularised in the ...
        `,
        link: '#',
        linkText: 'Set a Meeting',
        isActive: false
    },
    {
        src: '/icons/rocket.png',
        title: 'Testing & Launch',
        description: `
            4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the ...
        `,
        link: '#',
        linkText: 'Set a Meeting',
        isActive: false
    }
]
export default function Services()
{
    const [activeTab, setActiveTab] = useState({})
    const { truncate } = useHelper()
    const { handleActiveTab } = useWorkingProcess()

    useEffect(() => {
        setActiveTab(data.find(item => item.isActive))
    }, [])

    return (
        <div className={ [classes.outerContainer, classes.video].join(' ') }>
            <div className={ ['container', classes.innerContainer].join(' ') }>
                <div>
                    <p className={ [classes.subTitle, 'text-sm lowercase mb-2'].join(' ') }>Service we Deliver</p>
                    <h3 className={ [classes.title, 'text-black font-black text-5xl mb-4'].join(' ') } >
                        <span>Working</span> Process
                    </h3>
                </div>

                <div className={ [classes.tab_btn_wrapper].join(' ') }>
                    {
                        data.map((item, index) => (
                            <div 
                                key={ Math.random() } 
                                className={ [classes.button, item.isActive && classes.active].join(' ') }
                                onClick={ () => { handleActiveTab(data, index); setActiveTab(item); } }
                            >
                                <Image src={ item.src } width='100' height='100' alt={ item.title } />
                                <p>{ item.title }</p>
                            </div>
                        ))
                    }
                </div>

                {
                    activeTab.title && 
                    <div className={ [classes.tab_data_wrapper].join(' ') }>
                        <div className={ [classes.image].join(' ') }>
                            <Image src={ processImage } width='450' height='450' alt='Service Image' />
                        </div>
                        <div className={ [classes.detail].join(' ') }>
                            <h3 className={ [classes.tab_title].join(' ') }>{ activeTab.title }</h3>
                            <p className={ [classes.tab_description, 'mb-4'].join(' ') }>
                                { truncate(activeTab.description, 530) }
                            </p>
                            <Button href={ activeTab.link } style={{color: '#fff'}}>{ activeTab.linkText }</Button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}