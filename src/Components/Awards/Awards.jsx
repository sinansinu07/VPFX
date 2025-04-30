import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import "./Awards.css"

import award1 from "../../Assets/Awards/1.png"
import award2 from "../../Assets/Awards/2.webp"
import award3 from "../../Assets/Awards/3.webp"
import award4 from "../../Assets/Awards/4.webp"
import award5 from "../../Assets/Awards/5.webp"
import award6 from "../../Assets/Awards/6.webp"
import award7 from "../../Assets/Awards/7.webp"
import award8 from "../../Assets/Awards/8.webp"
import award9 from "../../Assets/Awards/9.webp"

const awards = [
    {
      img: award1,
    },
    {
      img: award2,
    },
    {
      img: award3,
    },
    {
      img: award4,
    },
    {
      img: award5,
    },
    {
      img: award6,
    },
    {
      img: award7,
    },
    {
      img: award8,
    },
    {
      img: award9,
    }
  ];

export default function Awards() {
    return (
        <section id="awards" className="awards container">
            <div>
                <h1 className="commonHeading">AWARD-WINNING FX BROKER</h1>
                <p>VPFX’s achievements have been recognized by the global forex industry and
                have won the highest accolades for our products, platform and service.</p>
                <Splide
                  options={{
                    perPage: 3,
                    autoplay: true,
                    speed: 2000,
                    rewind: true,
                    rewindByDrag: true,
                  }}
                >
                  {awards.map((d, i) => (
                      <SplideSlide key={d.id}>
                        {/* <div key={d.img} className="awards-image"> */}
                            <img src={d.img} alt="" className="award-img"/>
                        {/* </div> */}
                        </SplideSlide>
                    ))}
                </Splide>
                {/* <div className="awards-body"> */}
              {/* </div> */}
            </div>
        </section>
    )
}