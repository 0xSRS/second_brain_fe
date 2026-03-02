import type { ReactElement } from "react"

interface ButtonProps{
  varient: 'primary' | 'secondary',
  size: 'sm' | 'md' | 'lg',
  text: string,
  startIcon?: ReactElement,
  endIcon?: ReactElement,
  onClick : () => void
}

const varientStyles = {
  "primary" : "bg-purple-600 text-white",
  "secondary" : "bg-purple-300 text-purple-500"
}

const defaultStyles = "rounded-md flex items-center"

const sizeStyles = {
  "sm" : "px-2 py-1",
  "md" : "px-4 py-2",
  "lg" : "px-6 py-4"
}


export const Button = (props:ButtonProps) => {

  return (
    <button className={`${varientStyles[props.varient]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-1">{props.startIcon}</div> : null}{props.text}{
      props.endIcon}</button>
  )
}

export default Button