import React from 'react'
import './activity.css'

import {BsArrowRightShort} from 'react-icons/bs'

import user1 from '../../../Assets/user2.png'
import user2 from '../../../Assets/profile1.png'
import user3 from '../../../Assets/profile.png'
import user4 from '../../../Assets/Infinite_Collection.png'


const Activity = () => {
  return (
    
      <div className="activitySection">
        <div className="heading flex">
          <h1 className="name1">Recent Activity</h1>
          <button className="btn flex">See All
            <BsArrowRightShort className="icon" />
          </button>
        </div>

        <div className="secContainer1 grid">
          <div className="singleCustomer flex">
            <img src={user1} alt="customer image" className="customer" />
            <div className="customerDetails">
              <span className="name">Ola Martin</span>
              <small className="order">Ordered a new plant</small>
            </div>

            <div className="duration">
              2 min ago
            </div>

          </div>

          <div className="singleCustomer flex">
            <img src={user2} alt="customer image" className="customer" />
            <div className="customerDetails">
              <span className="name">Ola Martin</span>
              <small className="order">Ordered a new plant</small>
            </div>

            <div className="duration">
              2 min ago
            </div>

          </div>

          <div className="singleCustomer flex">
            <img src={user3} alt="customer image" className="customer" />
            <div className="customerDetails">
              <span className="name">Ola Martin</span>
              <small className="order">Ordered a new plant</small>
            </div>

            <div className="duration">
              2 min ago
            </div>

          </div>

          <div className="singleCustomer flex">
            <img src={user4} alt="customer image" className="customer" />
            <div className="customerDetails">
              <span className="name">Ola Martin</span>
              <small className="order">Ordered a new plant</small>
            </div>

            <div className="duration">
              2 min ago
            </div>

          </div>

          <div className="singleCustomer flex">
            <img src={user1} alt="customer image" className="customer" />
            <div className="customerDetails">
              <span className="name">Ola Martin</span>
              <small className="order">Ordered a new plant</small>
            </div>

            <div className="duration">
              2 min ago
            </div>

          </div>

        </div>
      </div>

  )
}

export default Activity