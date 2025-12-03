import React, { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Icon from '../../ui/Icon/Icon'
import Eschool from "../../assets/images/eschool.webp"
import Tourbook from "../../assets/images/tourbook.webp"
import Terkawi from "../../assets/images/terkawi.webp"
import Automate from "../../assets/images/automate.webp"
import Dashboard from "../../assets/images/car-dashboard.webp"
import Teneze from "../../assets/images/teneze-game.webp"
import Meme from "../../assets/images/meme-creator.webp"
import Aora from "../../assets/images/aora.webp"
import Services from "../../assets/images/car-services.webp"
import Wakalat from "../../assets/images/wakalat-archive.webp"
import Job from "../../assets/images/job-position.webp"
import Myfamily from "../../assets/images/myfamily.webp"
const Portfolio = () => {
  const projects = [

    // {
    //   id: 1, title: 'eSchool', image: Eschool, company: 'HNNDES', link: '',
    //   desc: 'A responsive dashboard for managing all activities in an educational institution. Designed using React.js, Redux, Styled-Component, Css/Sass, Yup and JavaScript.'
    // },
    //         {
    //   id: 13, title: 'Investor One', image: Investor, company: 'me', link: 'https://www.hnndes.com/project/6925620854da0d4979b3be54',
    //   desc: 'A modern fintech platform delivering professional stock analysis tools to retail investors in Germany and Europe. Features real-time charts, watchlists, AI-powered insights, and portfolio tracking in a clean, responsive interface. Designed using React.js, Typescript, Tailwind-Css, Yup and GraphQL.'
    // },
        {
      id: 12, title: 'Fawaz Alterkawi', image: Terkawi, company: 'me', link: 'https://www.hnndes.com/project/6925620854da0d4979b3be54',
      desc: 'Minimalist, high-performance personal portfolio for a full-stack developer. Smooth animations, dark mode, fully responsive.. Designed using React.js, Typescript, Tailwind-Css and Framer-motion.'
    },
        {
      id: 11, title: 'My Family Foundation', image: Myfamily, company: 'me', link: 'https://myfamilyfoundation.netlify.app/',
      desc: 'An introductory website for a volunteer foundation. Designed using Next.js, Tailwind-Css, Framer-motion, EmailJS and JavaScript.'
    },
    {
      id: 2, title: 'TourBook', image: Tourbook, company: 'me', link: 'https://github.com/NisrinML/tour-book.git',
      desc: 'A website that offers a new way for make a specific tour, publish it, register on it and more. Designed using React.js, React-leaflet, Redux-Toolkit, Tailwind-Css, Yup, Axios and JavaScript.'
    },
    {
      id: 3, title: 'University Admission', image:Automate, company: 'me', link: 'https://github.com/NisrinML/university-admission.git',
      desc: 'A website to automate the registration process for University Admission. Designed using React.js, Redux-Toolkit, Css, Axios and JavaScript.'
    },
    {
      id: 6, title: 'Car Dashboard', image: Dashboard, company: 'me', link: 'https://github.com/NisrinML/car-showroom-dashboard.git',
      desc: 'A dashboard for managing a car showroom activities. Designed using React.js and Css.'
    },
    {
      id: 4, title: 'Teneze Game', image: Teneze, company: 'me', link: 'https://github.com/NisrinML/tenzies-game.git',
      desc: 'A game where you select the same card number until you select all card and it record your best round each time you play. Designed using React.js and Css.'
    },
    {
      id: 5, title: 'Meme Creator', image: Meme, company: 'me', link: 'https://github.com/NisrinML/meme-creator.git',
      desc: 'A responsive React application allow you to create meme with the description you want. Designed using React.js and Css.'
    },
    {
      id: 7, title: 'Aora', image:Aora, company: 'me', link: 'https://github.com/NisrinML/aora.git',
      desc: 'A mobile application for sharing and watching videos. Designed using React-Native and Appwrite.'
    },
    {
      id: 8, title: 'Car Services', image: Services, company: 'DigitalGlobe', link: '',
      desc: 'A responsive Car Service system dashboard. Designed using Asp.net, MVC, jQuery, JavaScript, Bootstarp, HTML and Css.'
    },
    {
      id: 9, title: 'Wakalat Archive', image: Wakalat, company: 'DigitalGlobe', link: '',
      desc: 'A dashboard for archiving agency records. Designed using Asp.net, MVC, jQuery, JavaScript, Bootstarp, HTML and Css.'
    },
    {
      id: 10, title: 'Malakat', image:Job, company: 'DigitalGlobe', link: '',
      desc: "a dashboard for Job Position and Employee's Modification management. Designed using Asp.net, MVC, jQuery, JavaScript, Bootstarp, HTML and Css."
    },
  ]

  const ref = useRef()

  //track progressbar
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  })

  //define animation for progressbar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  const Single = ({ project }) => {
    const ref = useRef()
    //const imageSrc = `./src/assets/images/${project.image}`;
    //track text container
    const { scrollYProgress } = useScroll({
      target: ref,
    })

    //define animation for text
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const locked = project.company != 'me'

    const handleProjectClick = (link) => {
      window.open(link, '_blank');
    }

    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={project.image} alt={`project_`+project.id} loading='lazy' />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2 >{project.title}</h2>
              <p>{project.desc}</p>
              <button disabled={locked} className={locked ? 'disabled' : ''} onClick={() => handleProjectClick(project.link)}  aria-label="Project URL">
                {locked ? <>
                  <Icon name="Lock" w="100%" h="100%" />
                  Private for {project.company}
                </>
                  : 'Project URL'}
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="portfolio" ref={ref}>
      {/* <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar">

        </motion.div>
      </div> */}
      {projects.map((project) =>
        <Single project={project} key={project.id} />
      )}
    </div>
  )
}

export default Portfolio