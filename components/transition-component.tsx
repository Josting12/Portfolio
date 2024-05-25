"use client"
import {motion} from "framer-motion"
import { fadeIn } from "@/utils/motion-trasitions"

interface MotionTrasnsitionsProps{
    children: React.ReactNode
    className?: string;
    position: 'right' | 'bottom'
}
const MotionTrasnsition = (props: MotionTrasnsitionsProps) => {
    
    const {children,position} = props


    return (
      <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={props.className}
      
      > 

        {children}
      </motion.div>
    );
};

export default MotionTrasnsition;