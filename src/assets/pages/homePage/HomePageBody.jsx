import face from '../images/facer.png';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Project from './projects/Project';
import myWork from './projects/myWork';

const HomePageBody = () => {
  return (
    <main className="flex w-full flex-row flex-wrap  box-border">
      <section className="w-full">
        <div
          className="absolute top-6 md:t-16 left-8 before:absolute before:w-full
          before:content-['Essohanam_ALOU'] before:bottom-0 
           before:text-[2.6rem] md:before:text-[3.6rem] before:text-gray-100
          before:font-Playfair-display before:animate-fad-anime before:invisible
           overflow-hidden before:text-center
           before:[text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)]
        "
        >
          <img
            src={face}
            alt="Essohanam ALOU"
            className="h-[20rem]  xs:h-[24rem] md:h-[28rem] object-cover
            w-auto  m-0 "
          />
        </div>
        <div className="  mt-6  md:mt-0 p-1 sm:p-2 mx-4 md:border-2 md:p-4 shadow-lg  box-border">
          <h1
            className="m-0 p-0 font-Playfair-display 
           text-3xl xl:text-4xl text-black  text-center"
          >
            About me{' '}
          </h1>
          <p
            className=" p-1 sm:p-4 mx-2 md:mx-4 text-lg
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
              <Link to={'https://github.com/Essoh21'}>
                {' '}
                <FaGithub size={25} />
              </Link>
            </li>
            <li aria-label="LinkedIn Link">
              <Link to={'#'}>
                {' '}
                <FaLinkedin size={25} />{' '}
              </Link>
            </li>
            <li aria-label="twitter Link">
              <Link to={'#'}>
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
        <div className="w-full mt-4 px-8 flex items-center justify-between  flex-row flex-wrap">
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
and MongoDB, I thrive in full-stack development environments. I'm
passionate about creating clean, maintainable, accessible and efficient code. I
prioritize writing modular and well-documented code that not only
solves the immediate problem but also lays a solid foundation for
future enhancements and collaborations. I constantly strive to stay
up-to-date with the latest industry trends and best practices,
allowing me to deliver high-quality solutions that align with
industry standards. Beyond coding, I enjoy collaborating with
multidisciplinary teams, brainstorming ideas, and finding innovative
solutions to complex problems. I'm always looking
for new opportunities to expand my skillset and work on impactful
projects. Whether it's building intuitive user interfaces,
optimizing database performance, or integrating APIs, I'm ready to
take on new challenges and contribute my expertise to create
exceptional digital experiences. If you're looking for a versatile
full-stack developer with a strong mathematical background, I would
love to connect and explore how I can bring value to your team or
project. Please feel free to reach out to me to discuss
collaboration opportunities or to view my portfolio.`;
export default HomePageBody;
