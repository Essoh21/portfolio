import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Project = ({ title, description, link, imgSrc, appLink }) => {
  const openAppLink = (appLink, inNewPage = true) => {
    window.open(
      appLink,
      `${inNewPage ? '_blank' : '_self'}`,
      'noopener, noreferrer',
    );
  };
  return (
    <Link to={link} rel="noopener noreferrer">
      <div className=" max-w-[40rem] md:max-w-[20rem] m-4 flex flex-col border shadow-lg">
        <div>
          <img
            src={imgSrc}
            srcSet={`${imgSrc}`}
            alt={title}
            className="w-full "
          />
        </div>
        <div className="flex flex-row justify-between my-4 ">
          <h2 className="text-lg text-black font-Playfair-display w-full text-center ">
            {title}
          </h2>{' '}
          <span className="flex flex-row gap-2">
            {' '}
            <FaGithub
              size={20}
              onClick={(e) => {
                e.stopPropagation();
                openAppLink(appLink, false);
              }}
            />{' '}
            <BsBoxArrowUpRight
              onClick={(e) => {
                e.stopPropagation();
                openAppLink(appLink);
              }}
              size={20}
            />{' '}
          </span>
        </div>
        <div className="py-4 w-full text-center"> {description}</div>
      </div>
    </Link>
  );
};

export default Project;
