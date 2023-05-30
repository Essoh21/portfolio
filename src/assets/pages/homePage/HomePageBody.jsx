import face from '../images/face.png';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Project from './projects/Project';
import myWork from './projects/myWork';
import images from './projects/images';

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
            className="h-[20rem]  xs:h-[24rem] md:h-[28rem] 
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
        <div className="w-full mt-4 p-4">
          <Project
            imgSrc={myWork[0].imageSrc}
            className="w-[60rem]"
            title={myWork[0].title}
            description={'description of the project in hand '}
          />
        </div>
      </section>
    </main>
  );
};

const ABOUT_Me = `Hi, I'm Essohanam, a
passionate full-stack developer with a strong foundation in
mathematics. I believe that the intersection of logic,
problem-solving, and creativity is where the magic of coding
happens. With a degree in Mathematics and my love for technology, I
bring a unique perspective to the world of web development. I enjoy
translating complex algorithms and mathematical concepts into
elegant and efficient code. My analytical mindset and attention to
detail allow me to approach challenges with a systematic approach,
ensuring robust and scalable solutions. Throughout my career, I have
gained expertise in a wide range of technologies and frameworks.
From building responsive and user-friendly front-end interfaces
using HTML, CSS, and JavaScript, to designing and implementing
robust back-end systems with Node.js, Python, and databases like SQL
and MongoDB, I thrive in full-stack development environments. I'm
passionate about creating clean, maintainable, and efficient code. I
prioritize writing modular and well-documented code that not only
solves the immediate problem but also lays a solid foundation for
future enhancements and collaborations. I constantly strive to stay
up-to-date with the latest industry trends and best practices,
allowing me to deliver high-quality solutions that align with
industry standards. Beyond coding, I enjoy collaborating with
multidisciplinary teams, brainstorming ideas, and finding innovative
solutions to complex problems. I thrive in dynamic and fast-paced
environments where I can apply my problem-solving skills and
contribute to the success of exciting projects. I'm always looking
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
