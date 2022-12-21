import React from "react";
import { content } from "../Content";

import Modal from "react-modal";
import { createElement, useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Projects = () => {
  const [modal1IsOpen, setIs1Open] = useState(false);
  const [modal2IsOpen, setIs2Open] = useState(false);
  const [modal3IsOpen, setIs3Open] = useState(false);

  function openModal1() {
    setIs1Open(true);
  }
  function openModal2() {
    setIs2Open(true);
  }
  function openModal3() {
    setIs3Open(true);
  }

  function closeModal() {
    setIs1Open(false);
    setIs2Open(false);
    setIs3Open(false);
  }

  return (
    <div
      id="portfolio"
      className="bg-white w-full text-white md:h-screen"
    >
      <Modal
        isOpen={modal1IsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <h6>Music Collection App</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Stylish Website created with ReactJS to showcase music I listen to</li>
          <li>Created react hooks to create modular components</li>
          <li>Used CSS flexbox and grid to create a dynamic and responsive user interface </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <h6>Maps Widget</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Used Highcharts API to render Maps Widget for users</li>
          <li>Designed and implemented new sidebar to improve user experience</li>
          <li>Managed state using Redux</li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={modal3IsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <h6>Homepage Redesign</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Completely redesigned the user homepage of Venngage.com</li>
          <li>Helped with the initital Figma design</li>
          <li>Implemented the design using ReactJS</li>
          <li>
            Created React components that could be reused throughout the website, created a unified experience
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {content.Projects.project_content.map(({ id, data }) => (
            <div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            data-aos="fade-up"
            data-aos-delay={400}>
              <img
                src={data.image}
                alt=""
                className="rounded-t-lg duration-200 hover:scale-105"
              />
               <div className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title}</h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.desc}</p>
                <div onClick={() => {
                  id === 1 ? openModal1() : id === 2 ? openModal2() : openModal3();
                  }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;