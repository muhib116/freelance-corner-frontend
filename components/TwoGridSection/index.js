import classes from './twoGridSection.module.css'
import Image from 'next/image'

export default function TwoGridSection({ data, isReverse, style }) {
  return (
    <div className={ [classes.outerContainer, isReverse&&classes.reverse].join(' ') } style={ style }>
        <div className={ ['container', classes.innerContainer].join(' ') }>
            <div>
                {/* subtitle start */}
                    {
                        data.subtitle &&
                        <p className={ [classes.subTitle, 'text-sm lowercase mb-2'].join(' ') }>{ data.subtitle }</p>
                    }
                {/* subtitle end */}
                
                {/* title start */}
                    {
                        data.title &&
                        <h3 
                            className={ [classes.title, 'text-black font-black text-5xl mb-4'].join(' ') } 
                            dangerouslySetInnerHTML={{ __html: data.title }} />
                    }
                {/* title end */}

                {/* description start */}
                    {
                        data.description &&
                        <p>{ data.description }</p>
                    }
                {/* description start */}


                {/* list start */}
                    {
                        data.list &&
                        <ul className={ ['mt-4'].join(' ') }>
                            {data.list.map(item => (
                                <li key={ Math.random() }>{ item }</li>
                            ))}
                        </ul>
                    }
                {/* list end */}


                {/* link start */}
                    {
                        data.link && 
                        <a 
                            href={ data.link } 
                            className='ml-auto block w-fit'
                        >
                            { data.linkText }
                        </a>
                    }
                {/* link end */}

            </div>
            <div className={ classes.image }>
                <Image src={ `/${data.image}` } width='550' height='550' alt={ data.title.replace(/(<([^>]+)>)/ig, '') } />
            </div>
        </div>
    </div>
  )
}
