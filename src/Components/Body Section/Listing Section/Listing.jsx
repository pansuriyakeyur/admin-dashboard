import React from 'react'

import './listing.css'

import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'


import image from '../../../Assets/pngegg.png'
import image2 from '../../../Assets/plants-png-44904.png'
import image3 from '../../../Assets/pngegg (1).png'
import image4 from '../../../Assets/pngegg (2).png'

import image5 from '../../../Assets/user2.png'
import image6 from '../../../Assets/profile1.png'
import image7 from '../../../Assets/profile.png'
import image8 from '../../../Assets/Infinite_Collection.png'




const Listing = () => {
  return (
    <div className='listingSection'> 

        <div className="heading flex">
            <h1 className="head1">My Listings</h1>
            <button className="btn flex">
                See All <BsArrowRightShort className="icon" />
            </button>
        </div>

        <div className="secContainer flex">
            
            <div className="singleItem">
                <AiFillHeart  className="ic"/>
                <img src={image} alt="Image Name" className="imae1" />
                <h3 className='h3'>Annual Vince</h3>
            </div>

            <div className="singleItem">
                <AiOutlineHeart  className="ic"/>
                <img src={image2} alt="Image Name" className="imae1" />
                <h3 className='h3'>Coffee Plant</h3>
            </div>

            <div className="singleItem">
                <AiOutlineHeart  className="ic"/>
                <img src={image3} alt="Image Name" className="imae1" />
                <h3 className='h3'>Button Fern</h3>
            </div>

            <div className="singleItem">
                <AiFillHeart  className="ic"/>
                <img src={image4} alt="Image Name" className="imae1" />
                <h3 className='h3'>Spider Plant</h3>
            </div>
        </div>

        <div className="sellers flex">
            <div className="topSellers">
                <div className="heading flex">
                    <h3>Top Sellers</h3>
                    <button className='btn flex'>
                        See All <BsArrowRightShort className='icon' />
                    </button>
                </div>

                <div className="card flex">
                    <div className="users">
                    <img src={image5} alt="Image Nmae" className='user_image' />
                    <img src={image6} alt="Image Nmae" className='user_image' />
                    <img src={image7} alt="Image Nmae" className='user_image' />
                    <img src={image8} alt="Image Nmae" className='user_image' />
                    </div>
                    <div className="cardText">
                        <span className="text1">
                            14.556 Plant Sold <br />
                            <small className="small_text">
                                21 Sellers <span className='date'>7 Days</span>
                            </small>
                        </span>
                    </div>
                </div>
            </div>

            <div className="featuredSellers">
                <div className="heading flex">
                    <h3>Featured Sellers</h3>
                    <button className='btn flex'>
                        See All <BsArrowRightShort className='icon' />
                    </button>
                </div>

                <div className="card flex">
                    <div className="users">
                    <img src={image5} alt="Image Nmae" className='user_image' />
                    <img src={image6} alt="Image Nmae" className='user_image' />
                    <img src={image7} alt="Image Nmae" className='user_image' />
                    <img src={image8} alt="Image Nmae" className='user_image' />
                    </div>
                    <div className="cardText">
                        <span className="text1">
                            28.556 Plant Sold <br />
                            <small className="small_text">
                                26 Sellers <span className='date'>31 Days</span>
                            </small>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </div>

    )
}

export default Listing