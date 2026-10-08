import {motion} from "motion/react"

const Animation = ({
    children,
    delay =0,
    y=50,
    x=0,
    scale =1,
    className,
    ...props
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Animation
