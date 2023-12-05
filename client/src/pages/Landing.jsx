import React from 'react'
import {Logo, Post} from '../components'
import Wrapper from '../assets/wrappers/Landing'
import illustration from '../assets/images/welcome.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="page-container">
        <div className="container page">
          <div className="info">
            <img src={illustration} alt="" className="img mobile-img" />
            <h1>
              <span>welcome</span> to 329 media
            </h1>
            <p className="text">
              {/* This blog website has personalized features that gives you control
              over the entire layout of your blogging website. This includes
              features to edit colors used on the site, edit logos, edit the
              display of your posts and you can also edit the texts too. All */}
              329Media is a media agency with the objective of projecting, promoting
              and building media publicity for new and existing brands, startups
              companies etc from the ground up...
            </p>
            <Link to="/login" className="btn">
              {" "}
              Get started
            </Link>
          </div>
          <div>
            <img src={illustration} alt="" className="img main-img" />
          </div>
        </div>

        <section className="posts">
          <div className="headerText">
            Popular posts <div></div>
          </div>
          <Post title="Objective" posts="The primary objective of our media agency is to leverage innovative and strategic communication solutions to empower brands, businesses, and organizations in effectively reaching and engaging their target audiences. Through a combination of cutting-edge digital and traditional media channels, we aim to enhance brand visibility, foster meaningful connections, and drive measurable results for our clients. Our mission is to be a trusted partner, delivering creative and data-driven media solutions that align with our clients' goals and contribute to their long-term success in an ever-evolving media landscape.

"/>
          <Post title="Vision"  posts="Our media agency envisions a future where every brand, regardless of size or industry, can harness the power of media to tell compelling stories, build authentic connections, and inspire positive change. We aspire to be at the forefront of media innovation, constantly adapting to emerging trends and technologies, while maintaining a steadfast commitment to creativity, integrity, and client success. In our vision, we see a dynamic media ecosystem where our expertise and strategic insights empower clients to not only navigate the complexities of the digital age but also to thrive and leave a lasting impact on their audiences. Through our vision, we aim to shape the future of media, fostering a world where communication transcends boundaries and possibilities are limitless."/>
          <Post title="Mission"  posts="Our mission is to elevate brands and businesses through the art and science of media. We are dedicated to delivering innovative, data-driven solutions that captivate audiences, drive engagement, and amplify our clients' messages. By leveraging our expertise in diverse media channels, we aim to be the catalyst for our clients' success, providing strategic guidance and creative excellence. We are committed to building lasting partnerships, fostering a culture of continuous learning, and contributing positively to the communities we serve. At the core of our mission is a passion for crafting impactful narratives that resonate, inspire, and propel our clients toward sustainable growth in an ever-evolving media landscape."/>
          {/* <Post posts='section'/>
          <Post posts='section'/>
          <Post posts='section'/> */}
          
        </section>
      </div>
    </Wrapper>
  );
}

export default Landing