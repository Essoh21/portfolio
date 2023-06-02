import images from './projects/images';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HomePageFooter = () => {
  return (
    <footer
      className="w-full md:bg-sky-500 md:flex-row 
      md:justify-between m-0 flex flex-col  mt-8"
    >
      <section className="flex  p-4 flex-col justify-between bg-sky-500 min-h-[25rem] w-full ">
        <h1 className="font-Playfair-display w-full text-center text-4xl text-white">
          Contact me{' '}
        </h1>
        <div className="h-full flex flex-col gap-8  text-center">
          <p className="text-white">
            Please Get in touch if you think I could help or you have an offer.
          </p>

          <p className="text-white">address: Lomé</p>
          <p className="text-white">email: myemail@email.com</p>
        </div>
        <div>
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
      <div className="w-full md:max-h-[25rem] md:my-8">
        <img
          src={images.profile}
          alt="Essohanam Alou"
          className="w-auto h-full"
        />
      </div>
    </footer>
  );
};

export default HomePageFooter;
