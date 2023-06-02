import face from '../images/facer.png';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Project from './projects/Project';
import myWork from './projects/myWork';
import links from './projects/links';

const HomePageBody = () => {
  return (
    <main className="flex w-full flex-row flex-wrap  box-border">
      <section className="w-full md:absolute md:top-0 ">
        <div
          className="absolute  md:float-left md:relative top-6 md:top-2  left-4 before:absolute
            before:w-full md:before:w-[30rem]
          before:content-['Essohanam_ALOU'] before:bottom-0  md:before:top-2 md:before:left-64
           before:text-[2.6rem] md:before:text-[3.4rem] before:text-gray-100
          before:font-Playfair-display before:animate-fad-anime before:invisible
           overflow-hidden md:overflow-visible before:text-center
           before:[text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)]
        "
        >
          <img
            src={face}
            alt="Essohanam ALOU"
            className="h-[20rem]   xs:h-[24rem] md:h-[28rem]  object-cover
            w-auto  md:mx-8 md:mb-8 md:mt-4 "
          />
        </div>
        <div
          className=" mt-6 md:max-w-[50rem]  md:bg-gray-100 md:mt-[5.7rem]
          p-1 sm:p-2 mx-4 md:mx-24 md:border-2 md:p-4 shadow-lg  box-border"
        >
          <h1
            className="m-0 p-0 font-Playfair-display 
           text-3xl xl:text-4xl text-black  text-center"
          >
            About me{' '}
          </h1>
          <p
            className=" p-1 sm:p-4 mx-2 md:pl-0 text-lg 
           text-gray-800 "
          >
            {' '}
            {ABOUT_Me}
          </p>

          <ul
            className="flex flex-row gap-4 justify-center  mx-4 mt-3"
            aria-describedby="Social medias"
          >
            <li aria-label="github Link">
              <Link to={links.myGithubProfileLink}>
                {' '}
                <FaGithub size={25} />
              </Link>
            </li>
            <li aria-label="LinkedIn Link">
              <Link to={links.myLinkedinLink}>
                {' '}
                <FaLinkedin size={25} />{' '}
              </Link>
            </li>
            <li aria-label="twitter Link">
              <Link to={links.myTwitterLink}>
                {' '}
                <FaTwitter size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full">
        <h1
          className="font-Playfair-display text-3xl 
        text-center mt-4"
        >
          My work
        </h1>
        <div className="w-full mt-4 px-8 md:px-14 lg:px-20 xl:px-32 flex items-center justify-between  flex-row flex-wrap">
          {myWork.map((work) => {
            return (
              <Project
                key={work.title}
                imgSrc={work.imageSrc}
                title={work.title}
                link={work.link}
                appLink={work.appGithubLink}
                description={work.appDescription}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

const ABOUT_Me = `Hi, I'm Essohanam, a
passionate full-stack developer with a strong foundation in
mathematics. I believe that the intersection of logic,
problem-solving, and creativity is where the magic of coding
happens.
From building responsive and user-friendly front-end interfaces
using HTML, CSS, and JavaScript, to designing and implementing
robust back-end systems with Node.js and databases like SQL
and MongoDB, I thrive in full-stack development environments. I constantly strive to stay
up-to-date with the latest industry trends and best practices. I'm ready to
take on new challenges and contribute my expertise to create
exceptional digital experiences. `;
export default HomePageBody;
