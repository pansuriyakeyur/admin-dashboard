import React from 'react'
import './top.css'
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {FaRegUserCircle} from 'react-icons/fa'
import {BsArrowRightShort} from 'react-icons/bs'

// import img from './../../../Assets/profile.png'
import video from '../../../Assets/video.mp4'
import img2 from '../../../Assets/image1.png'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1 className='head1'>Welcome to Keshti.</h1>
          <p className='para1'>Hello K Tech, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input className='search' type="text" placeholder='Search dashboard' />
          <BiSearchAlt className='icon' />
        </div>

        <div className="adminDiv">
          <TbMessageCircle className="icon2" />
          <MdOutlineNotificationsNone className="icon2" />
          <FaRegUserCircle className="icon2" />
          {/* <div className="adminImage">
            <img src={img} alt="Admin Image" className="profile" />
          </div> */}
        </div>
      </div>


      <div className="cardSection flex">
        
        <div className="rightCard flex">
          <h1 className="head2">Create and sell extraordinary products</h1>
          <p className="para2">The world's fast growing industry today are natural made products!</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video className="video" src={video} autoPlay loop muted></video>

          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            
            <div className="textDiv">
              <h1 className='head3'>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small className="small">4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small className="small">127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon3" />
              </span>

            </div>

            {/* <div className="imgDiv">
              <img src={img2} alt="Image Name" className='image1' />
            </div> */}

            
            {/* <div className="sideBarCard">
        <BsQuestionCircle className='icon1' />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3 className='head3'>Help Center</h3>
          <p className='para'>Having trouble in Keshti, please contact us from for more questions.</p>
          <button className='btn'>Go to help center</button>
        </div> */}

          </div>
        </div>


      </div>
    </div>
  )
}

export default Top