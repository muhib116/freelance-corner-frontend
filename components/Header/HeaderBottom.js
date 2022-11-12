import classes from './headerBottom.module.css'
import checkbox from '../../public/icons/Checkbox.svg'
import Image from 'next/image'

export default function HeaderBottom() {
  return (
    <div className={ classes.header_bottom }>
        <div className={ ['container', classes.innerHeaderBottom].join(' ') }>
            <div className={ ['grid text-center'].join(' ') }>
                <Image src={ checkbox.src } width={ checkbox.width } height={ checkbox.height } alt="Checkbox" />
                <div>
                    <p className={ [classes.title].join(' ') }>Quality work</p>
                    <p className={ [classes.subtitle].join(' ') }>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className={ ['grid text-center'].join(' ') }>
                <Image src={ checkbox.src } width={ checkbox.width } height={ checkbox.height } alt="Checkbox" />
                <div>
                    <p className={ [classes.title].join(' ') }>100% Satisfaction</p>
                    <p className={ [classes.subtitle].join(' ') }>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className={ ['grid text-center'].join(' ') }>
                <Image src={ checkbox.src } width={ checkbox.width } height={ checkbox.height } alt="Checkbox" />
                <div>
                    <p className={ [classes.title].join(' ') }>Helpful Support</p>
                    <p className={ [classes.subtitle].join(' ') }>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    </div>
  )
}