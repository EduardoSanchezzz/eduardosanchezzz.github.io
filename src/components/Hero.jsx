import { content } from "../Content";
import "../App.css";
import { useEffect, useState } from 'react'
const FADE_INTERVAL_MS = 1750;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = ['Hello', 'Hola', 'Bonjour', '👋🏻'];
const WORDS_TO_ANIMATE2 = ['impress', 'innovate', 'are stylish', 'inspire'];



const Hero = () => {
  const { hero } = content;

  const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <section id="home" className="overflow-hidden">
      <p className="absolute top-[0] right-[0]" data-aos="fade-up">
            <span className="text-sm text-white font-bold">{hero.firstName + " " + hero.LastName}</span>
      </p>
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end items-center justify-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-1/2 w-1/2 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
        <div className="h-full">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <p className="text-4xl font-bold"><span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</span></p>
          <p className="text-4xl font-normal">My name is</p>
          <p className="text-7xl font-bold">Eduardo Sanchez</p>
          <br/>
          <p className="text-7xl font-normal">{hero.title}</p>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <p className="text-4xl">I design products that <span className={fadeProp.fade}>{WORDS_TO_ANIMATE2[wordOrder]}</span></p>
              </div>
            ))}
          </div>
          <br />
          <div className="flex justify-end">
            <button className="btn"><a href="#contact">{hero.btnText}</a></button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
