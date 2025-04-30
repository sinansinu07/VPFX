import Hero from "../Components/Hero/Hero";
import Helmet from "../Components/Helmet/Helmet";
import WhyUs from "../Components/WhyUs/WhyUs";
import TradeNow from "../Components/TradeNow/TradeNow";
import MamPamm from "../Components/MamPamm/MamPamm";
import Testimonials from "../Components/Testimonials/Testimonials"
import Awards from "../Components/Awards/Awards";
// import { AnimatePresence } from "framer-motion";
import TeamCard from "../Components/TeamCards/TeamCard";
import Contact from "../Components/Contact/Contact"

export default function Home() {

    return (
        <section>
            <Helmet title="Video Production">
                {/* <AnimatePresence mode="wait"> */}
                    <Hero/>
                    <WhyUs/>
                    <TradeNow/>
                    <MamPamm/>
                    <Testimonials/>
                    <Awards/>
                    <TeamCard/>
                    <Contact/>
                {/* </AnimatePresence> */}
            </Helmet>
        </section>
    );
}