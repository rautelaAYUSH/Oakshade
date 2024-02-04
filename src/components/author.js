import React from 'react'

import PropTypes from 'prop-types'

import './author.css'

const Author = (props) => {
  return (
    <div className={`author-author ${props.rootClassName} `}>
      <img alt="image" src={props.avatar} className="author-avatar" />
      <div className="author-details">
        <span className="author-text">{props.author}</span>
        <span className="author-text1">{props.mention}</span>
      </div>
    </div>
  )
}

Author.defaultProps = {
  rootClassName: '',
  mention: '@spyrl',
  author: 'Joanna Smith',
  avatar:
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&ixlib=rb-4.0.3&w=200',
}

Author.propTypes = {
  rootClassName: PropTypes.string,
  mention: PropTypes.string,
  author: PropTypes.string,
  avatar: PropTypes.string,
}

export default Author
