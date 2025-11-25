import { motion } from 'framer-motion'
import './contact.scss'
import Phone from '../../ui/icons/Phone'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Icon from '../../ui/Icon/Icon'
const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}
const Contact = () => {
    const address = "Bab Al-Sebaa, Homs, Syria"
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`
    const labels = [{ id: 1, title: 'Mail', text: 'nisreenmelhem3@gmail.com', icon: 'Mail', link: 'mailto:nisreenmelhem3@gmail.com' }, { id: 2, title: 'Address', text: 'Baghdad street/ Homs/ Syria', icon: 'Address', link: mapsUrl }, { id: 3, title: 'Phone', text: '(+963) 986 854 664 ', icon: 'Contact', link: 'tel:+963986854664 ' }]
    const ref = useRef()
    const formRef = useRef()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [errMsg, setErrMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_tzt57lg', 'template_rqvpjpn', formRef.current, {
                publicKey: 'MoQ90ZdGyMzKjRcZh',
            })
            .then(
                () => {
                    setError(false)
                    setIsLoading(false);
                    setSuccess(true)
                    const nameInput = document.getElementsByName('name')[0];
                    const emailInput = document.getElementsByName('email')[0];
                    const messageInput = document.getElementsByName('message')[0];

                    nameInput.value = '';
                    emailInput.value = '';
                    messageInput.value = '';
                },
                (error) => {
                    setError(true)
                    setErrMsg(error.text)
                    setIsLoading(false);
                    setSuccess(false)
                },

            );
    };

    const handleClick = (link) => {
        window.open(link, "_blank", "noopener,noreferrer")
    }
    return (
        <motion.div className='contact' variants={variants} ref={ref}
            initial="initial" whileInView="animate">
            <motion.div className='wrapper' variants={variants}>
                <motion.div className="textContainer" variants={variants}>
                    <motion.h1 variants={variants}>Let's work together</motion.h1>
                    {labels.map((label) => {
                        return (
                            <motion.div variants={variants} className='label' key={label.id} >
                                <div className='iconContainer' onClick={()=>handleClick(label.link)}>
                                    <Icon name={label.icon} w="100%" h="100%" />
                                </div>
                                <motion.div className="item" variants={variants}>
                                    <h2>{label.title}</h2>
                                    <span>{label.text}</span>
                                </motion.div>
                            </motion.div>
                        )
                    })}

                </motion.div>
                <div className="formContainer">
                    <motion.div className="phoneSvg" initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }} >
                        <Phone contactRef={ref} />
                    </motion.div>
                    <motion.form initial={{ opacity: 0 }} ref={formRef} onSubmit={sendEmail}
                        whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }} >
                        <input type='text' placeholder='Name' name='name' required />
                        <input type='email' placeholder='Email' name='email' required />
                        <textarea rows='8' placeholder='Message' name='message' required />
                        <button type='submit' aria-label="submit">
                            {isLoading ? <Icon name="Loading" w="100%" h="100%" /> : 'Send Message'}
                        </button>
                        {error && <span className='error'>{errMsg}</span>}
                        {success && <span className='success'>Message sent successfully</span>}
                    </motion.form>
                </div>

            </motion.div>
            <motion.div className="footerContainer" variants={variants}>
                <span className='footerText'>Copyright 2025 © <b>Nisreen Melhem</b></span>
            </motion.div>
        </motion.div>
    )
}

export default Contact