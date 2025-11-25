import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { delay, motion } from 'framer-motion'
import { useRef } from 'react'
    const variants = {
        open:{
            clipPath:"circle(1200px at 60px 60px)",
            transition:{
                type:"spring",
                stifness:20,
                damping: 40,
            }
        },
        closed:{
            clipPath:"circle(30px at 60px 60px)",
            transition:{
                delay:0.2,
                type:"spring",
                stifness:40,
                damping: 20,
            }
        }
    }
    
const Sidebar = () => {
    const [open,setOpen] =useState(false)
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

 
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.classList.add('sidebar-open'); 
        } else {
            document.body.classList.remove('sidebar-open'); 
        }

   
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove('sidebar-open'); 
        };
    }, [open]);

  return (
    <>
    
            {open && (
                <div
                    className="overlay"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(234, 215, 215, 0.5)', // Semi-transparent black
                        zIndex: 999, 
                        pointerEvents: 'auto', 
                    }}
                />
            )}

            {/* Sidebar */}
            <motion.div
                className='sidebar'
                animate={open ? "open" : "closed"}
                ref={sidebarRef}
                style={{
                    zIndex: 1000, 
                    pointerEvents: 'auto', 
                }}
                  initial={false}
            >
                <motion.div className="bg"  variants={variants}>
                    <Links />
                </motion.div>
                <ToggleButton setOpen={setOpen} />
            </motion.div>
        </>
  )
}

export default Sidebar