import { motion } from "framer-motion"
import "./TradeNow.css"

import video1 from "../../Assets/TradeNow/1.mp4"
import video2 from "../../Assets/TradeNow/2.mov"

export default function TradeNow() {
    return (
        <section id="tradenow" className="tradenow container1">
            <h1 className="commonHeading">YOU TRADE IT<br/><span className="color">WE HAVE IT</span></h1>
            <div className="trade-container">
                <div className="trade-container1">
                    <div className="left">
                        <motion.video 
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
                            src={video1} 
                            autoPlay 
                            loop 
                            muted
                            />
                    </div>
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
                            delay: 0.2
                        }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="right">
                        <h1>Forex, Metals,<br/> Energies, Indices.</h1>
                        <p>Trade & Invest in Stocks, Currencies, Indices, and Commodities (CFDs) at competitive spreads. Dive into Stock Trading with VPFX. Trade with real-time execution. Invest in wide-range of Global stocks.</p>
                        <div className="button-div">
                            <button className="btn button-touch2">
                                Learn More
                                <span className="line">
                                    <span className="circle"></span>
                                </span>
                            </button>
                            <button className="btn button-touch2">
                                Trade Now
                                <span className="line">
                                    <span className="circle"></span>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>
                <div className="trade-container1">
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
                            delay: 0.2
                        }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="left">
                        <h1>MAM/PAMM</h1>
                        <p>Managed Accounts give clients the option to have a portfolio manager trade all of their accounts (known as “”sub-accounts””) as if they were one “”Master Account””.</p>
                        <div className="button-div">
                            <button className="btn button-touch2">
                                Learn More
                                <span className="line">
                                    <span className="circle"></span>
                                </span>
                            </button>
                            <button className="btn button-touch2">
                                MAM/PAMM
                                <span className="line">
                                    <span className="circle"></span>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                    <div className="right">
                        <motion.video 
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
                        src={video2} autoPlay loop muted/>
                    </div>
                </div>
            </div>
            <div className="trade-securities">
                <div className="commonHeading"><span className="color">VPFX</span> - A TRUSTWORTHY TRADING PLATFORM FOR ALL KINDS OF SECURITIES</div>
                <p>There are ever-increasing types of securities and assets one can invest in, right from traditional securities like shares, 
                    metals, mutual funds, and futures to the latest innovative assets. All these securities come with their specific nature, 
                    pros, and cons – and it is often a combination of various securities that makes the ideal investment. 
                    The increased penetration of the internet and smartphones has made it easy to invest in these instruments through mobile apps or online trading. 
                    VPFX is the best stock trading platform for trading in all such securities as well as the <span>best forex broker.</span></p>
                <button className="btn button-touch2">
                    Learn More
                    <span className="line">
                        <span className="circle"></span>
                    </span>
                </button>
            </div>
        </section>
    )
}