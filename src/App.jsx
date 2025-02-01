import React from 'react'
import { motion } from "motion/react"
const App = () => {

  return (
    <div>
      <motion.div  className='container'
      animate={{
        x:100,
      }}
      >

      </motion.div>
    </div>
  )
}

export default App