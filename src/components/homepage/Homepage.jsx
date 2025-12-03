import React from 'react'
import "./homepage.scss"
import Me from '../../assets/images/nisreen-icon.webp'
import Scroll from '../../assets/images/scroll.webp'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Icon from '../../ui/Icon/Icon'
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  },
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  }
}
const Homepage = () => {

  const handleButtonClick=(link)=>{
    window.location.hash = link;
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/Nisreen Melhem CV.pdf'; 
    link.download = 'NisreenMelhemCV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  
  return (
    <div className='home'>
      <div className='wrapper'>
        <motion.div className="text-container" variants={textVariants}
          initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>
            Nisreen Melhem
          </motion.h2>
          <motion.h1 variants={textVariants}>
          Full Stack developer & Problem Solver
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button  variants={textVariants} onClick={()=>handleButtonClick('Portfolio')}>See the Latest Works</motion.button>
            <motion.button variants={textVariants} onClick={()=>handleButtonClick('Contact')}>Contact Me</motion.button>
            <motion.div className='cv'   onClick={handleDownload}>
              <span>Look at my CV</span>
              <Icon name="Download" w="100%" h="100%"/>
            </motion.div>
          </motion.div>

          <motion.img variants={textVariants} src={Scroll} alt="scroll button" animate="scrollButton" loading='lazy' />

        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
        Full Stack Developer
      </motion.div>
      <div className="image-container">
        <img src={Me} alt="nisreen's image" loading='lazy'/>
      </div>
    </div>
  )
}

export default Homepage