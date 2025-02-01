// import React from 'react'
// import { motion } from "motion/react"
// const App = () => {

//   return (
//     <div>
//       {/* <motion.div
//         className='container'
//         initial={{
//          x:0,
//          rotate:0,
//         }}
//         animate={{
//           x: [0,700,700,0,0],
//           y:[0,0,500,500,0],
//           ease:'anticipate',
//         }}
//         transition={{
//           duration:6,
//           delay:1,
//           repeat:Infinity,
//         }}
//       >
//       </motion.div> */}
//       <motion.div
//         drag
//         whileDrag={{
//           scale:0.3,
//         }}
//         dragDirectionLock={true}
//         dragMomentum={false}
//         dragElastic={1.5}
//         dragConstraints={{
//           left: 0,
//           top: 0,
//           right: 100,
//           bottom: 100,
//         }}

//         className='container'

//       ></motion.div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { motion, useScroll } from 'framer-motion'
const App = () => {
  const {scrollYProgress} = useScroll();
  return (
    <div>
      <motion.div
        style={{
          scaleX:scrollYProgress,
        }}
        className='scroller'></motion.div>
      <h2>This is a trash text!</h2>
      <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure voluptatum qui aut molestiae numquam quisquam, ex temporibus. Quibusdam amet animi sapiente quasi mollitia qui, illum fuga in alias deleniti.
      Minpiditate odio eveniet suscipit ut. Repellat maiores, libero earum doloremque quisquam reprehenderit laboriosam expedita porro omnis, facere ex veritatis aspernatur similique exercitationem eum ut? Illo, quaerat!
      Magnam eligendi dolor, officiis quas assumenda exercitationem magni iste maiores aliquam dignissimos dolores, porro doloribus eaque tempore explicabo corrupti? Mollitia fugiat perferendis natus tempore libero vero quam numquam modi doloribus!
      Expedita, autem? Accusantium amet ipsam quam assumenda, non omnis, inventore quis hic deserunt rem iusto, vero laboriosam quos fuga. Sint, explicabo tenetur voluptas accusamus nam alias? Expedita ut earum inventore? <br /> <br />
      Ex eos asperiores doloremque, esse tempore tempora? Voluptatum beatae, fugiat dolor exercitationem explicabo quos ea ipsa similique autem placeat atque quod numquam obcincidunt autem, eaque at.
      Tempore distinctio repudiandae, excepturi omnis quasi vel, temporibus repellat voluptatum veniam eligendi recusandae nostrum nulla culpa vero fugiat ipsum reiciendis? Deserunt cupiditate nostrum recusandae dolore quos fugiat assumenda aspernatur aliquid.
      Voluptates optio similique excepturi quae odio ab, cum illo aliquam omnis voluptatibus modi quibusdam labore ad maiores nostrum quidem quisquam eos doloribus. Mollitia aperiam dolores sunt blanditiis error quia cumque.
      Quidem harum, provident cum laboriosam ab porro obcaecati eum soluta accusamus nam doloribus fuga molestiae consequuntur et sint maxime amet similique nisi? Consequatur necessitatibus earum velit cum quae ullam reprehenderit.
      Autem, iusto ipsum. Blanditiis at veniam vitae ratione voluptate, odio, repellendus, est quod amet in cum iusto! Et voluptatem in quas rem pariatur quis laboriosam, quam laudantium nulla nostrum ea? <br /> <br />
      Debitis possimus, libero maxime quasi odit natus. Dignissimos doloremque pariatur impedit porro voluptas aperiam sunt officia ullam. Fugit, nobis in molestiae quod, quo eveniet ducimus recusandae, aut esse a      Porro fugit ea unde dolorem tempore a quidem numquam. Porro consectetur modi ipsa, sapiente quia culpa beatae labore voluptatem nobis sit et ad delectus saepe enim quibusdam laboriosam a architecto!
      Voluptas quas inventore omnis accusamus! Blanditiis possimus, corrupti dolores praesentium temporibus maiquia excepturi libero alias illum sunt! A, autem ratione rem pariatur inventore porro temporibus sit explicabo, eaque omnis et maxime excepturi ea voluptates. Beatae est qui velit eaque voluptatibus.
      Pariatur illum quidem quo odit iure omnis soluta cupiditate at quas est eaque, voluptatem culpa. Vel, aliquid distinctio maxime quo autem ipsum. Quos sapiente nobis nesciunt, illo eum a sequi!
      Sit molestiae nulla natus sed veniam quam delectus, aspernatur cumque voluptatibus nostrum quia facilis asperiores incidunt voluptatem. Dignissimos velit recusandae atque nihil iste beatae illum dolore. Autem pariatur et quibusdam.
      Quis amet illum fugit aperiam vitae alias necessitatibus illo esse sequi ullam beatae atque reiciendis praesentium unde sit quae, reprehenderit minus inventore quisquam rerum! Voluptatum non fuga minus ipsa itaque.
      Eum aut tempora praesentium dolore nostrum aliquam sapiente illo, quam, eligendi doloribus impedit? Error libero unde quis modi soluta autem ullam blanditiis temporibus id consequatur, eveniet doloremque corrupti aut alias.</blockquote>
    </div>
  )
}

export default App