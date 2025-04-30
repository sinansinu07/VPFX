import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"

import "./MamPamm.css"

import image1 from "../../Assets/Common/mam-pamm.webp"
// import image2 from "../../Assets/Common/laptop.mov"
import image2 from "../../Assets/Common/lap-devices.png"
import { useEffect, useRef } from "react"

export default function MamPamm() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, {once: false})
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    // const ulliOneValue = useTransform(scrollYProgress, [0, 1], [ "-100", "0%"])
    // const ulliTwoValue = useTransform(scrollYProgress, [0, 1], [ "100", "0%"])

    // const liAnimationLeft = {
    //     hidden: {
    //         opacity: 0,
    //         x: -100
    //     },
    //     show: {
    //         opacity: 1,
    //         x: 0
    //     },
    //     transition: {
    //         duration: 1,
    //         ease: "easeOut",
    //         delay: 0.2
    //     },
    //     viewport: { 
    //         once: false,
    //         amount: 0.5 
    //     }
    // }

    // const liAnimationRight = {
    //     hidden: {
    //         opacity: 0,
    //         x: 100
    //     },
    //     show: {
    //         opacity: 1,
    //         x: 0
    //     },
    //     transition: {
    //         duration: 1,
    //         ease: "easeOut",
    //         delay: 0.2
    //     },
    //     viewport: { 
    //         once: false,
    //         amount: 0.5 
    //     }
    // }

    return (
        <section id="mampamm" className="mampamm container1">
            <h1 className="commonHeading">ATTRACT MORE TRADERS<br/><span className="color">GET MORE INCOME</span></h1>
            <div className="conatiner-details">
                <div className="image1">
                    <motion.img 
                        initial={{
                            opacity: 0,
                            x: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ 
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.2
                        }}
                        src={image1} alt=""/>
                </div>
                <div className="conatiner-text" ref={containerRef}>
                    <div className="conatiner-text-head">
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: -100
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ 
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.2
                            }}
                        >Benefits of Using <br/><span className="color">MAM / PAMM</span></motion.h2>
                        {/* <motion.video key={image2} src={image2} autoPlay loop muted */}
                        <motion.img src={image2} alt=""
                            initial={{
                                opacity: 0,
                                y: 100
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ 
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.2
                            }}
                            />
                    </div>
                    <div className="conatiner-text-body">
                        <ul>
                            <li>Use one master account to open and close orders for multiple client accounts at the same time. Place orders for as many clients as you want</li>
                            <li>Set different management fees (% of profits) for each client</li>
                            <li>Management fees are added to a separate account in real time</li>
                            <li>Clients can determine their own stop loss in $USD</li>
                            <li>No restrictions on the number of clients or deposit amounts.</li>
                            <li>Clients can monitor progress in real time.</li> 
                            <li>All normal orders types accepted (i.e.: stop loss, pending orders, trailing stop and take profit).</li>
                        </ul>
                        <motion.button className="btn button-touch2"
                            animate={{
                                scale: [1, 1.2, 1.2, 1],
                                rotate: [0, 90, 90, 0],
                                borderRadius: ["10%", "10%", "50%", "10%"]
                            }}
                            transition={{
                                duration: 5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            whileTap={{ scale: 0.9}}
                            whileHover={{
                                scale: 1.2,
                                background: "#17254e",
                                color: "white"
                            }}
                            drag
                            dragConstraints={{
                                top: -60,
                                right: 60,
                                bottom: 60,
                                left: -60
                            }}>
                            MAM / PAMMM
                            <span className="line">
                                <span className="circle"></span>
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}