import githubLogo from './assets/github.png'
import linkedIn from './assets/linkedin.png'
import mail from './assets/mail.png'
import resume from './assets/resume.png'
import home from './assets/home-icon.png'
import line from './assets/line.svg'
import resumeFile from './assets/EduardoSanchez.pdf'
import proj1 from './assets/proj1.png'
import proj2 from './assets/proj2.png'
import proj3 from './assets/proj3.png'
import proj4 from './assets/proj4.png'
import proj5 from './assets/proj5.png'
import appleCard from './assets/apple-card.png'
import vennCard from './assets/venncard.png'
import imcCard from './assets/imc-card.png'
import rxCard from './assets/rxcard.png'
import qcCard from './assets/qc-card1.png'
import fireflyCard from './assets/fireflycard.png'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const experiences = [
  {
    id: 'firefly',
    title: 'HW Engineer Intern',
    company: 'Firefly',
    location: 'New York, NY',
    date: 'Winter 2026',
    img: fireflyCard,
    bulletColor: '#58bd86',
    aos: 'fade-right',
    bullets: [
      'Developed Nordic MCU firmware using Syntiant C APIs to stream raw audio from the NDP120 processor over BLE, then created a custom Python recording GUI on the host PC to ingest, format, and organize labeled acoustic data for neural network training',
      'Built embedded firmware for a BLE/LoRa link monitor, integrating user inputs and LED telemetry for real-time field triage',
      'Reworked PMIC feedback networks to eliminate transient voltage drops, stabilizing critical 12V rails under heavy active loads',
      'Coordinated manufacturing lifecycle for prototype PCBs, overseeing from assembly to delivery with external fabrication vendors',
    ],
  },
  {
    id: 'qualcomm',
    title: 'RFHW Engineer Intern',
    company: 'Qualcomm',
    location: 'San Diego, CA',
    date: 'Summer 2025',
    img: qcCard,
    bulletColor: '#4f94ee',
    aos: 'fade-down',
    bullets: [
      'Designed and optimized diplexer circuits in ADS, tuning component values and filter order to balance insertion loss and high-band rejection, reaching 40dB rejection of harmonics on band n257 while keeping loss within budget',
      'Led end-to-end development of a sub-6 GHz RF board, from schematic design to tape-out to implement matching networks',
      'Tested diplexer boards, soldering 01005 components and using VNA to tune performance and meet 1024-QAM EVM requirements',
    ],
  },
  {
    id: 'apple',
    title: 'RFHW Engineer Intern',
    company: 'Apple',
    location: 'Cupertino, CA',
    date: 'Fall 2023',
    img: appleCard,
    bulletColor: '#e8a2d2',
    aos: 'fade-up',
    bullets: [
      'Modelled EM behaviour of circuits using Ansys HFSS by creating isolated cutouts of RFFE boards for simpler analysis, integrating 3D components, and defining ports to produce S-parameters of the board cutout which were integrated with ADS.',
      'Successfully designed and optimized matching networks for the development board using ADS tuning and optimization features to iteratively adjust component values for optimal performance and implemented Murata practical components library for more realistic performance, to minimize return loss at the operating frequency of the specific path for 5G NR and 4G LTE usage.',
      'Collaborated with others to iteratively design PCB layout using Altium, to minimize wasted space, loss and RF leakage.',
      'Ran tests on the PA evaluation board, while iteratively optimizing gain compression values to maximize efficiency while still meeting the regulatory compliance for ACLR emissions and EVM requirements.',
    ],
  },
  {
    id: 'rxfood',
    title: 'SW Engineer Intern',
    company: 'RxFood',
    location: 'Toronto, ON',
    date: 'Winter 2023',
    img: rxCard,
    bulletColor: '#7fc5ec',
    aos: 'fade-down',
    bullets: [
      'Developed a full-stack website using Python Flask and TypeScript React to streamline fax processing and appointment creation, resulting in a 50% reduction in processing time and increased efficiency for the team.',
      'Implemented automatic deployment and user authentication using Google Cloud Platform, reducing deployment time by 40% and improving site uptime and security.',
      'Integrated GCP with CI/CD tools such as Google Cloud Build and Google Kubernetes Engine, automating the deployment process and reducing deployment costs by 70%.',
    ],
  },
  {
    id: 'venngage',
    title: 'SW Developer Intern',
    company: 'Venngage',
    location: 'Toronto, ON',
    date: 'Winter 2022',
    img: vennCard,
    bulletColor: '#d694f5',
    aos: 'fade-up',
    bullets: [
      'Architected granular permissions library using PHP, providing more flexibility and customization options for user roles and allowing team owners to have increased control over team permissions.',
      'Redesigned user homepage and subscription page and implemented these new designs to improve user experience and increase user retention by 7%.',
    ],
  },
  {
    id: 'imc',
    title: 'SW Developer Intern',
    company: 'IMC',
    location: 'Toronto, ON',
    date: 'Fall 2020',
    img: imcCard,
    bulletColor: '#c7abb2',
    aos: 'fade-left',
    bullets: [
      'Implemented features using TypeScript and ReactJS based on user feedback to decrease user wait time on survey by 60%',
      'Implemented a content management system, WordPress, to facilitate client side content updates',
      'Compiled and organized data received from survey participants using MySQL and C to improve organization in survey database',
    ],
  },
];

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [animStyle, setAnimStyle] = useState({});

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setSelectedJob(null);
      setIsClosing(false);
    }, 280);
  };

  const handleCardClick = (exp, e) => {
    if (isClosing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const originCenterX = rect.left + rect.width / 2;
    const originCenterY = rect.top + rect.height / 2;
    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;
    const deltaX = originCenterX - windowCenterX;
    const deltaY = originCenterY - windowCenterY;
    const targetWidth = Math.min(640, window.innerWidth * 0.92);
    const scale = rect.width / targetWidth;

    setAnimStyle({
      '--dx': `${deltaX}px`,
      '--dy': `${deltaY}px`,
      '--scale': scale,
    });
    setIsClosing(false);
    setSelectedJob(exp);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (selectedJob) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedJob, isClosing]);

  return (
    <>
      <div className='navbar' data-aos="slide-down" data-aos-once='true'>
        <a href='/#projects'>
          <h1>projects</h1>
        </a>
        <a href='/#experience'>
          <h1>experience</h1>
        </a>
        <Link to={'/about'}>
          <h1>about</h1>
        </Link>
        <div className='scroll-container'>
          <img src={line} className='line' alt='line' />
          <img src={line} className='line' alt='line' />
          <img src={line} className='line' alt='line' />
        </div>
      </div>
      <div className='landing-container' id='home'>
        <div className='name' data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in">
          <div>EDUARDO</div>
          <div className='sanchez'>SANCHEZ</div>
        </div>
        <div className='icons-container'>
          <a href='https://github.com/EduardoSanchezzz' target="_blank"><img src={githubLogo} className='logo' alt='Github logo' /></a>
          <a href='https://www.linkedin.com/in/sanchez-ed/' target="_blank"><img src={linkedIn} className='logo' alt='LinkedIn Icon' /></a>
          <a href='mailto:e5sanchez@uwaterloo.ca' target="_blank"><img src={mail} className='logo' alt='Mail Icon' /></a>
          <a href={resumeFile} target="_blank"><img src={resume} className='logo' alt='Doc Icon' /></a>
        </div>
      </div>
      <div className='projects-container' id='projects'>
        <img src={line} className='line' alt='line' />
        <h1>projects</h1>
        <div className="project-container cpu" data-aos="fade-up">
          <div className="title">RISC-V Processor</div>
          <Link to={"/projects/riscv-processor"}>
            <img src={proj1} alt="" />
          </Link>
        </div>
        <div className="project-container claw" data-aos="fade-up">
          <div className="title">Claw Machine Controller</div>
          <a href="https://github.com/EduardoSanchezzz/ClawMachineController" target='blank'>
            <img src={proj3} alt="" />
          </a>
        </div>
        <div className="project-container lte" data-aos="fade-up">
          <div className="title">LTE Transceiver Uplink</div>
          <a href="https://github.com/EduardoSanchezzz/RFFEUplink" target='blank'>
            <img src={proj4} alt="" />
          </a>
        </div>
        <div className="project-container uart" data-aos="fade-up">
          <div className="title">UART Circuit Module</div>
          <a href="https://github.com/EduardoSanchezzz/UART" target='blank'>
            <img src={proj5} alt="" />
          </a>
        </div>
        <div className="project-container music" data-aos="fade-up">
          <div className="title">Music Showcase Website</div>
          <a href="https://eduardosanchez.dev/music-collection-app/" target='blank'>
            <img src={proj2} alt="" />
          </a>
        </div>
      </div>
      <div className="experience-container" id='experience'>
        <img src={line} className='line' alt='line' />
        <h1>experience</h1>
        <div className='exp-cont'>
          {experiences.slice(0, 2).map((exp) => (
            <div
              key={exp.id}
              className='job-card'
              data-aos={exp.aos}
              onClick={(e) => handleCardClick(exp, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(exp, e);
                }
              }}
            >
              <img src={exp.img} alt="" />
              <div className='job-header'>
                <div className='job-title'>{exp.title}</div>
                <div className='job-company'>{exp.company}</div>
              </div>
              <div className='job-footer'>
                <div className='job-location'>{exp.location}</div>
                <div className='job-date'>{exp.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='exp-cont'>
          {experiences.slice(2, 4).map((exp) => (
            <div
              key={exp.id}
              className='job-card'
              data-aos={exp.aos}
              onClick={(e) => handleCardClick(exp, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(exp, e);
                }
              }}
            >
              <img src={exp.img} alt="" />
              <div className='job-header'>
                <div className='job-title'>{exp.title}</div>
                <div className='job-company'>{exp.company}</div>
              </div>
              <div className='job-footer'>
                <div className='job-location'>{exp.location}</div>
                <div className='job-date'>{exp.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='exp-cont'>
          {experiences.slice(4, 6).map((exp) => (
            <div
              key={exp.id}
              className='job-card'
              data-aos={exp.aos}
              onClick={(e) => handleCardClick(exp, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(exp, e);
                }
              }}
            >
              <img src={exp.img} alt="" />
              <div className='job-header'>
                <div className='job-title'>{exp.title}</div>
                <div className='job-company'>{exp.company}</div>
              </div>
              <div className='job-footer'>
                <div className='job-location'>{exp.location}</div>
                <div className='job-date'>{exp.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-container" id='contact'>
        <img src={line} className='line' alt='line' />
        <div className="footer">
          <a href='#home'><img src={home} className='logo' alt='Home Icon' /></a>
          {/* <a href={resumeFile} target="_blank">
            <h1>resume</h1>
          </a> */}
          <div className="contact-container">
            <div className="contact">
              contact
            </div>
            <div className="contact-info">
              <div>e5sanchez@uwaterloo.ca</div>
              <div>905-966-4113</div>
              <div>linkedin.com/sanchez-ed</div>
            </div>
          </div>
        </div>

      </div>

      {selectedJob && (
        <div
          className={`job-modal-backdrop ${isClosing ? 'closing' : ''}`}
          onClick={handleClose}
        >
          <div
            className={`job-card-expanded ${isClosing ? 'closing' : ''}`}
            style={{
              ...animStyle,
              '--bullet-color': selectedJob.bulletColor,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedJob.img} alt="" className="job-card-expanded-bg" />
            <button
              className="job-card-expanded-close"
              onClick={handleClose}
              aria-label="Close"
            >
              &times;
            </button>

            <div className="job-header">
              <div className="job-title">{selectedJob.title}</div>
              <div className="job-company">{selectedJob.company}</div>
            </div>

            <div className="job-card-expanded-body">
              <ul className="job-card-bullets">
                {selectedJob.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="job-footer">
              <div className="job-location">{selectedJob.location}</div>
              <div className="job-date">{selectedJob.date}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
