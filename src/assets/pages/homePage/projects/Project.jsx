import { propTypes } from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Project = ({ title, description, link, imgSrc }) => {
  return (
    <Link to={link}>
      <div className="w-full flex flex-col">
        <div>
          <img
            src={imgSrc}
            srcSet={`${imgSrc} 1.25x, ${imgSrc} 1.5x, ${imgSrc} 7.8x  `}
            alt={title}
            className="max-w-[20rem] "
          />
        </div>
        <div className="flex flex-row justify-between ">
          <h2 className="py-4">{title}</h2>{' '}
          <span className="flex flex-row gap-2">
            {' '}
            <FaGithub size={25} /> <BsBoxArrowUpRight size={25} />{' '}
          </span>
        </div>
        <div className="py-4"> {description}</div>
      </div>
    </Link>
  );
};

export default Project;
