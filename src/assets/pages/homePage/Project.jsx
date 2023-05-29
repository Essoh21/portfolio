import { propTypes } from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Project = ({ title, description, link, className, imgSrc }) => {
  return (
    <Link to={link} className={className}>
      <div className="w-[10rem] flex flex-col">
        <div>
          <img src={imgSrc} alt={title} />
        </div>
        <div className="flex flex-row justify-between">
          <h2>{title}</h2>{' '}
          <span className="flex flex-row gap-2">
            {' '}
            <FaGithub /> <BsBoxArrowUpRight />{' '}
          </span>
        </div>
        <div>{description}</div>
      </div>
    </Link>
  );
};

export default Project;
