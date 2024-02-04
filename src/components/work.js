// import React from 'react'

// import PropTypes from 'prop-types'

// import Link from './link'
// import Tag from './tag'
// import './work.css'

// const Work = (props) => {
//   return (
//     <div className={`work-work ${props.rootClassName} `}>
//       <img alt="image" src={props.image} className="work-image" />
//       <div className="work-details">
//         <div className="work-header">
//           <div className="work-heading">
//             <span className="work-text">{props.title}</span>
//             <a
//               href="https://www.youtube.com/@risha4265"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="work-link"
//             >
//               <Link
//                 rootClassName="link-root-class-name1"
//                 className="work-component"
//               ></Link>
//             </a>
//           </div>
//           <span className="work-text1">{props.description}</span>
//         </div>
//         <div className="work-tags">
//           <Tag rootClassName="tag-root-class-name" className=""></Tag>
//           <Tag
//             tag="Video Editing"
//             rootClassName="tag-root-class-name1"
//             className=""
//           ></Tag>
//           <Tag
//             tag="Web Development"
//             rootClassName="tag-root-class-name2"
//             className=""
//           ></Tag>
//         </div>
//       </div>
//     </div>
//   )
// }

// Work.defaultProps = {
//   image: '/work1-800h.png',
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
//   title: 'MMA Courses Site',
//   rootClassName: '',
// }

// Work.propTypes = {
//   image: PropTypes.string,
//   description: PropTypes.string,
//   title: PropTypes.string,
//   rootClassName: PropTypes.string,
// }

// export default Work
import React from 'react';
import PropTypes from 'prop-types';
import Link from './link';
import Tag from './tag';
import './work.css';

const Work = (props) => {
  return (
    <div className={`work-work ${props.rootClassName}`}>
      <img alt="image" src={props.image} className="work-image" />
      <div className="work-details">
        <div className="work-header">
          <div className="work-heading">
            <span className="work-text">{props.title}</span>
            <a
              href={props.workLink}
              target="_blank"
              rel="noreferrer noopener"
              className="work-link"
            >
              <Link
                rootClassName="link-root-class-name1"
                className="work-component"
              ></Link>
            </a>
          </div>
          <span className="work-text1">{props.description}</span>
        </div>
        <div className="work-tags">
          {props.tags.map((tag, index) => (
            <Tag
              key={index}
              rootClassName={`tag-root-class-name${index}`}
              tag={tag}
              className=""
            ></Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

Work.defaultProps = {
  image: '/work1-800h.png',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  title: 'MMA Courses Site',
  rootClassName: '',
  workLink: 'https://www.angadbishtmmacourses.com/',
  tags: ['Branding', 'Video Editing', 'Web Development'],
};

Work.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  workLink: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Work;
