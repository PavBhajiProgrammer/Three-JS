import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from 'valtio'

import state from '../store/index.js'

import { 
    headContainerAnimation, 
    headContentAnimation, 
    headTextAnimation,
    slideAnimation
} from "../config/motion.js"
import CustomButton from '../components/CustomButton.jsx'

const Home = () => {

    const snap = useSnapshot(state);
  return (
     <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src="./threejs.png" alt="logo" className='w-8 h-8 object-contain' />
                </motion.header>

                <motion.div className="home-content" {...headContentAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>Lets <br className='xl:block hidden' />Do It </h1>
                    </motion.div>

                    <motion.div {...headContentAnimation} className='flex flex-col gap-5 '>
                        <p className='max-w-md font-normal text-grey-600 test-base'>Create your unique and exclusive shirt with our 
                          brand-new 3-D customization tool. <strong>Unleash your imagination</strong>{" "}
                        </p>

                        <CustomButton
                          type="filled"
                          title="Customize It"
                          handleClick={() => state.intro = false}
                          customStyles="w-fit px-4 py-2.5 font-bold test-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
     </AnimatePresence>
  )
}

export default Home