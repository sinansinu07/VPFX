import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Quote from '../../Assets/Common/blockquote.svg';

import p1 from "../../Assets/Testimonials/1.webp"
import p2 from "../../Assets/Testimonials/2.webp"
import p3 from "../../Assets/Testimonials/3.webp"
import p4 from "../../Assets/Testimonials/4.webp"

import "./Testimonials.css"

const reviews = [
    {
        id: 1,
        image: p1,
        name: 'Ankit Gupta, Senior Brand Manager, Pampers Gulf',
        companyName: 'PAMPERS',
        text: 'TAD is undoubtedly one of the best agency partners that I have worked with. They are dedicated and meticulous – ensuring that every challenge was met with expertise and creativity. TAD invested time in truly understanding our business challenges and objectives, taking the utmost care to design and customize the DTC programs to deliver business results.',
    },
    {
        id: 2,
        image: p2,
        name: 'Umar Farooq, Trade Marketing Manager, Agthia',
        companyName: 'AGTHIA',
        text: 'We have been working with TAD for over a year now, for instore executions / brand talks and they have delivered exceptional results. They are very responsive to our requirements and extremely agile in implementing them in the market despite the scale of the requirement. This makes them a perfect go-to partner for our brand needs.',
    },
    {
        id: 3,
        image: p3,
        name: "Marwa Hassan, Head Of Marketing, Frozen and Beverage Division, Global Food Industries and International Beverage & Filling Industries",
        companyName: "GLOBAL FOOD INDUSTRIES  ",
        text: "Always a great experience working with Ali and the TAD team. Delivering the best service in the most professional efficient way. Especially Ali, who is always responsive , super helpful and willing to answer any questions we have at any time , day and night.",
    },
    {
        id: 4,
        image: p4,
        name: "Raghad AlGhazy, Customer Marketing Manager GCC - KIND International, Mars Chocolate",
        companyName: "KIND international",
        text: "I've been working with TAD for almost 2 years and I couldn’t be a more satisfied customer. The differentiating factor when working with TAD is that they can support any request ranging from planning and executing A to Z activations as well as offering logistical solutions during urgent & last minute situations. If I were to describe TAD with one word, it would be ‘reliable’.",
    },
  ];

  // const reviews = [
  //   {
  //       id: 1,
  //       image: p1,
  //       name: 'Ankit Gupta, Senior Brand Manager, Pampers Gulf',
  //       companyName: 'PAMPERS',
  //       text: 'TAD is undoubtedly one of the best agency partners that I have worked with. They are dedicated and meticulous – ensuring that every challenge was met with expertise and creativity. TAD invested time in truly understanding our business challenges and objectives, taking the utmost care to design and customize the DTC programs to deliver business results. The dialogue was always two-way, which helped us refine our executional strategies and build a robust in-store promoter program in the Gulf region. The team’s passion to deliver and their commitment to execute with excellence is simply outstanding.',
  //   },
  //   {
  //       id: 2,
  //       image: p2,
  //       name: 'Umar Farooq, Trade Marketing Manager, Agthia',
  //       companyName: 'AGTHIA',
  //       text: 'We have been working with TAD for over a year now, for instore executions / brand talks and they have delivered exceptional results. They are very responsive to our requirements and extremely agile in implementing them in the market despite the scale of the requirement. This makes them a perfect go-to partner for our brand needs.  I would specifically want to thank Ameera, our account manager, who has managed the whole project without any hiccup or delay. I would recommend TAD for all BTL executions.',
  //   },
  //   {
  //       id: 3,
  //       image: p3,
  //       name: "Marwa Hassan, Head Of Marketing, Frozen and Beverage Division, Global Food Industries and International Beverage & Filling Industries",
  //       companyName: "GLOBAL FOOD INDUSTRIES  ",
  //       text: "Always a great experience working with Ali and the TAD team. Delivering the best service in the most professional efficient way. Especially Ali, who is always responsive , super helpful and willing to answer any questions we have at any time , day and night. TAD's experience and expertise in sampling helped us ultimately to reach a larger potential consumer base than previously possible. The consumer feedback we receive from the sampling campaigns is priceless and has helped us to refine our product and marketing approach. Always a pleasure to work with TAD and looking forward to a long successful business relationship.",
  //   },
  //   {
  //       id: 4,
  //       image: p4,
  //       name: "Raghad AlGhazy, Customer Marketing Manager GCC - KIND International, Mars Chocolate",
  //       companyName: "KIND international",
  //       text: "I've been working with TAD for almost 2 years and I couldn’t be a more satisfied customer. The differentiating factor when working with TAD is that they can support any request ranging from planning and executing A to Z activations as well as offering logistical solutions during urgent & last minute situations. If I were to describe TAD with one word, it would be ‘reliable’. I also want to highlight the incredible attention that our account manager and key point of contact, Ali Basri, has been providing. We have a splendid professional relationship where I am always confident in reaching out to him with new requests, briefs, or even brain teaser problems because he will always provide support and creative solutions.",
  //   },
  //   {
  //       id: 5,
  //       image: p5,
  //       name: "Diana Maria, Gulf Field Marketing Executive – KIND International, Mars Chocolate",
  //       companyName: "KIND international",
  //       text: "It is a real pleasure to work with an agency as responsive and eager to deliver as TAD. The team is fast, cooperative, finds solutions to last minute challenges, delivers great results and is a proactive partner that helps achieve our objectives. Ali Basri is an amazing hard-working person to collaborate with, always ready to over-deliver the expectations and dedicated to the objective.",
  //   },
  //   {
  //       id: 6,
  //       image: p6,
  //       name: "Hana Wally, Assistant Trade Marketing Manager, Al Safi Danone",
  //       companyName: "AL SAFI DANONE",
  //       text: "TAD is a great agency that understands the demands and needs of both a company and the industry – they are easy to deal with, flexible for all last minute requests and are able to provide calibers of all sorts depending on the activity. All team members are very supportive and always available for any comments or requests. Overall, we had a great experience working with TAD on more than one occasion and would definitely recommend them!",
  //   },
  //   {
  //       id: 7,
  //       image: p7,
  //       name: "Sally Barakat Diab, Assistant Manager-Product Development, Al Ghurair Foods",
  //       companyName: "AL GHURAIR FOODS",
  //       text: "TAD is a reliable partner who has consistently exhibited a high level of professionalism and enthusiasm for our company. We’ve been dealing with Tad for a while, and they have always helped us out in every way they could. They are among the greatest agencies we have worked with, and hopefully we will continue to collaborate on campaigns in the future.",
  //   },
  //   {
  //       id: 8,
  //       image: p8,
  //       name: "Boban Romic, Head of Commercial Planning MEA DF, Philip Morris International",
  //       companyName: "PMI",
  //       text: "The DF Connect conference started as a small project but quickly became a complex and important event for PMI Duty Free. The TAD team invested a lot of effort, energy, and dedication into the project, achieving mind-blowing results in just a few weeks. The feedback received from participants was overwhelmingly positive, and the PMI team expressed gratitude and appreciation for the team's work. Despite impossible requests and demanding deadlines, the TAD team managed to lead and support the event from preparation to execution, delivering everything that was requested.",
  //   },
  //   {
  //       id: 9,
  //       image: p9,
  //       name: "Sylvian Sanad, Influencer manager- Africa, Middle East and Turkey, Johnson & Johnson Middle East",
  //       companyName: "J&J",
  //       text: "I am writing to thank you for the quality of service provided by TAD. We sincerely appreciate your efficient, gracious customer service, the level of detail and accountability you have demonstrated on each project.",
  //   },
  //   {
  //       id: 10,
  //       image: p10,
  //       name: "Masooma Alasfoor, Brand and Communications Manager, HEMPEL Paints",
  //       companyName: "HEMPEL Paints",
  //       text: "I am writing to provide a testimonial for the excellent work your agency has done for us. We are very pleased with the results of the activations and the level of service we received. The team was very professional and knowledgeable throughout the entire process. They provided us with timely updates and were always available to answer our questions. The end product was exactly what we were looking for and we are very satisfied with the results. We would highly recommend your agency to anyone looking for quality work and excellent customer service. Thank you for your hard work and dedication.",
  //   },
  //   {
  //       id: 11,
  //       image: p11,
  //       name: "Lana Zallat, Brands & Communications Manager, The Sultan Center",
  //       companyName: "THE SULTAN CENTER",
  //       text: "TAD is a professional agency that I have been dealing with for the past 5 years in two different companies. They are reliable, never miss a deadline even the challenging ones, the quality of work is top notch and most importantly is that the ideas they propose are always trendy and they execute it perfectly.",
  //   },
  //   {
  //       id: 12,
  //       image: p2,
  //       name: "Noha Gaber, Senior Brand Manager Innovations & Food Service - Kiri Middle East",
  //       companyName: "KIRI",
  //       text: "What can I say! TAD have done it again! I called Ameera 10 days before a big event that we had and Ameera was super helpful and showed me the meaning of being agile! She said we can and never can NOT! Everything I needed on LVQR and delivered one day ahead of time with PERFECT execution! Wanted to thank Ameera and TAD for their dedication always! Will definitely work with them again and again!",
  //   }
    
  // ];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonial-container">
      <div className="title">
        <h1 className="commonHeading">TRUSTED BY MILLIONS<br/> <span className="color">ACROSS GLOBE</span></h1>
      </div>

      <div className="slider-container">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="company">{review.companyName}</p>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;