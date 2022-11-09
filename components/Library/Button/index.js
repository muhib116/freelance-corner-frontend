import classes from './button.module.css'

export default function index({ children, type='fill', style={}, disabled, href=false, target, className }) {
  return (
    href ? 
    (<a 
        href={ href }
        target={ target }
        className={ [classes.btn, (type==='outline')&&classes.outline, (disabled) && classes.disabled, 'rounded', className].join(' ') }
        style={style}
    >
        { children }
    </a>)
    :
    (<button 
        href=''
        className={ [classes.btn, (type==='outline')&&classes.outline, (disabled) && classes.disabled, 'rounded', className].join(' ') }
        style={style}
    >
        { children }
    </button>)
  )
}
