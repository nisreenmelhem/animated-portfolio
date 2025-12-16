import React, { useRef, useState } from 'react';
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
      id: 3, title: 'University Admission', image: Automate, company: 'me', link: 'https://github.com/NisrinML/university-admission.git',
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
      id: 7, title: 'Aora', image: Aora, company: 'me', link: 'https://github.com/NisrinML/aora.git',
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
      id: 10, title: 'Malakat', image: Job, company: 'DigitalGlobe', link: '',
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

  const INITIAL_COUNT = 6;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_COUNT);

  const handleClick = (project) => {
    if (project.company !== "me") return;
    window.open(project.link, "_blank");
  };

  return (

    <div className="portfolio" ref={ref}>


      <div className="projects-grid">
        {visibleProjects.map((project) => {
          const locked = project.company !== "me";

          return (
            <motion.div
              key={project.id}
              className={`project-card ${locked ? "locked" : ""}`}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <button
                  disabled={locked}
                  onClick={() => handleClick(project)}
                >
                  {locked ? (
                    <>
                      <Icon name="Lock" w="18" h="18" />
                      Private
                    </>
                  ) : (
                    "View Project"
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
      {projects.length > INITIAL_COUNT && (
        <div className="show-more-wrapper">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  )
}

export default Portfolio