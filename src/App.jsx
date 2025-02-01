import React from 'react'
import { motion } from "motion/react"
const App = () => {

  return (
    <div>
      <motion.div
        className='container'
        initial={{
         x:100,
         rotate:0,
        }}
        animate={{
          x: 700,
          rotate:180,
          ease:'anticipate',
        }}
        transition={{
          duration:1,
          delay:1,
          repeat:Infinity,
        }}
      >
      </motion.div>
    </div>
  )
}

export default App