import {motion} from "framer-motion"

import "./WhyUs.css"

import img1 from "../../Assets/WhyUs/1/1.svg"
import img2 from "../../Assets/WhyUs/1/2.svg"
import img3 from "../../Assets/WhyUs/1/3.svg"
import img4 from "../../Assets/WhyUs/1/4.svg"
import img5 from "../../Assets/WhyUs/1/5.svg"
import img6 from "../../Assets/WhyUs/1/6.svg"
import img7 from "../../Assets/WhyUs/1/7.svg"
import img8 from "../../Assets/WhyUs/1/8.svg"

const items = [
    {
        id: 1,
        head: "Low Spreads",
        description: "Tight spreads on major instruments. Our spreads start from as low as 0.0 pips on EUR/USD.",
        image: img1
    },
    {
        id: 2,
        head: "500+ Products",
        description: "Trade in extensive range of products like Forex, Metal, Energies, Indices, and Shares all from one single account.",
        image: img2
    },
    {
        id: 3,
        head: "Multi - Regulated Broker",
        description: "VPFX is regulated by and registered with multiple regulatory authorities around the world.",
        image: img3
    },
    {
        id: 4,
        head: "Segregated Funds",
        description: "All client funds are held in separate accounts with top-tier rated banks.",
        image: img4
    },
    {
        id: 5,
        head: "Powerful Trading Tools",
        description: "VPFX offer traders a powerful and advanced trading platform technologies VPFX MT5 available on Desktop and Mobile.",
        image: img5
    },
    {
        id: 6,
        head: "Ultra-Fast Execution",
        description: "VPFX offers ultra-fast trade execution in low latency environment to execute your trades.",
        image: img6
    },
    {
        id: 7,
        head: "Zero Deposit Fees",
        description: "Fund your VPFX live trading account with No Transaction Fees & Minimum commission.",
        image: img7
    },
    {
        id: 8,
        head: "Customer Service",
        description: "VPFX customer friendly support team is available 24/5 to help you with all your trading needs",
        image: img8
    },
]

const gridContainerVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        }
    }
}

const gridSquareVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    }
}

export default function WhyUs() {
    return (
        <section id="whyus" className="whyus container1">
            <h1 className="commonHeading">Why Invest With <span>VPFX</span></h1>
            <motion.div 
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="item-container">
                {/* {items.map((item)=> { */}
                    {/* return ( */}
                        <motion.div 
                            variants={gridSquareVariants}
                            viewport={{ once: false, amount: 0.5 }}
                            key={items[0].id} 
                            className="items">
                            <motion.img 
                                initial={{
                                    opacity: 0,
                                    x: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.2
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={items[0].image} alt=""/>
                            <motion.div 
                                initial={{
                                    opacity: 0,
                                    x: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.4
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="items-content">
                                <h1>{items[0].head}</h1>
                                <p>{items[0].description}</p>
                            </motion.div>
                        </motion.div>
                    {/* ) */}
                {/* })} */}
                        <motion.div 
                            variants={gridSquareVariants}
                            key={items[1].id} 
                            className="items">
                            <motion.img 
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.6
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={items[1].image} alt=""/>
                            <motion.div 
                                initial={{
                                    opacity: 0,
                                    y: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.8
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="items-content">
                                <h1>{items[1].head}</h1>
                                <p>{items[1].description}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            variants={gridSquareVariants}
                            key={items[2].id} 
                            className="items">
                            <motion.img 
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 1
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={items[2].image} alt=""/>
                            <motion.div 
                                initial={{
                                    opacity: 0,
                                    y: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 1.2
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="items-content">
                                <h1>{items[2].head}</h1>
                                <p>{items[2].description}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            variants={gridSquareVariants}
                            key={items[3].id} 
                            className="items">
                            <motion.img 
                                initial={{
                                    opacity: 0,
                                    x: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 1.4
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={items[3].image} alt=""/>
                            <motion.div 
                                initial={{
                                    opacity: 0,
                                    x: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 1.6
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="items-content">
                                <h1>{items[3].head}</h1>
                                <p>{items[3].description}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            variants={gridSquareVariants}
                            key={items[4].id} 
                            className="items">
                            <motion.img 
                                initial={{
                                    opacity: 0,
                                    x: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 1.8
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={items[4].image} alt=""/>
                            <motion.div 
                                initial={{
                                    opacity: 0,
                                    x: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 2
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="items-content">
                                <h1>{items[4].head}</h1>
                                <p>{items[4].description}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            variants={gridSquareVariants}
                            key={items[5].id} 
                            className="items">
                            <motion.img 
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 2.2
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={items[5].image} alt=""/>
                            <motion.div 
                                initial={{
                                    opacity: 0,
                                    y: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 2.4
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="items-content">
                                <h1>{items[5].head}</h1>
                                <p>{items[5].description}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            variants={gridSquareVariants}
                            key={items[6].id} 
                            className="items">
                            <motion.img 
                                initial={{
                                    opacity: 0,
                                    y: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 2.8
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={items[6].image} alt=""/>
                            <motion.div 
                                initial={{
                                    opacity: 0,
                                    y: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 3
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="items-content">
                                <h1>{items[6].head}</h1>
                                <p>{items[6].description}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            variants={gridSquareVariants}
                            key={items[7].id} 
                            className="items">
                            <motion.img 
                                initial={{
                                    opacity: 0,
                                    x: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 3.2
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={items[7].image} alt=""/>
                            <motion.div 
                                initial={{
                                    opacity: 0,
                                    x: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 3.4
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="items-content">
                                <h1>{items[7].head}</h1>
                                <p>{items[7].description}</p>
                            </motion.div>
                        </motion.div>
            </motion.div>
            <motion.button variants={gridSquareVariants} className="btn button-touch2">
                Let's Discuss
                <span className="line">
                    <span className="circle"></span>
                </span>
            </motion.button>
        </section>
    )
}