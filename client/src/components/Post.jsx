import React from 'react'
import Wrapper from '../assets/wrappers/Post';
import {  FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Post = (props) => {
  const {posts, title, img} = props
    return (
      <Wrapper>
        <div className="post-container">
          <div className="image-wrapper">
            <img src={img} alt="" />
          </div>
          <div className="blog-content">
            <div className="date">
              Posted <span>17th Nov 2023</span>
            </div>
            <h1>{title}</h1>
            <div className="content">
              <p>
               {posts}
                <Link className="see-more">
                  ...see more
                  <FaCaretDown />
                </Link>
              </p>
            </div>

            <div className="date credit">
              By <span>Abdulwahab Abdulwarith</span>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}

export default Post