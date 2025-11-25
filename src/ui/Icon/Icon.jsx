import React from 'react'
import { lazy, Suspense } from "react";
import './icon.scss'
import { firstUp } from '../../utilities/functions';
import { motion } from "framer-motion";
const icons = {
  Facebook: lazy(() => import("../icons/Facebook")),
  Instagram: lazy(() => import("../icons/Instagram")),
  Github: lazy(() => import("../icons/Github")),
  Gitlab: lazy(() => import("../icons/Gitlab")),
  LinkedIn: lazy(() => import("../icons/LinkedIn")),
  Close: lazy(() => import("../icons/Close")),
  Menu: lazy(() => import("../icons/Menu")),
  Lock: lazy(() => import("../icons/Lock")),
  Mail: lazy(() => import("../icons/Mail")),
  Contact: lazy(() => import("../icons/Contact")),
  Address: lazy(() => import("../icons/Address")),
  Download: lazy(() => import("../icons/Download")),
  Loading: lazy(() => import("../icons/Loading"))
};

function Icon({ name, w = "30", h="30", c = "dark", hover, m, circle, ...rest }) {
  if (!icons[firstUp(name || "")]) return null; 
  const Component = icons[firstUp(name)];

  return (
    <Suspense fallback={"loading"}>
      <motion.span
        className={`wrap ${hover ? 'hover' : ''} ${circle ? 'circle' : ''}`}
        style={{
          width: `calc(${w}px + ${hover ? '22px' : '0'})`,
          height: `calc(${h || w}px + ${hover ? '22px' : '0'})`,
          margin: m,
        }}
        whileHover={{scale:1.1}} whileTap={{scale:0.95}}
        {...rest}
      >
        <Component style={{ width: w, height: h || w }} />
      </motion.span>
    </Suspense>
  );
}


export default Icon