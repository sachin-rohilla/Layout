import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <>
    <h4 className='doctor-list'> Doctor List</h4>
    <div>
      <input type="text" name="" id="" placeholder='Search'  className='profile-input'/>
      <button className='profile-btn'>Choose</button>
    </div>
      <div className="profile-grid">
        <div className="profile-grid1">
          <div className="profile-pic">
            <img
              src="https://media.istockphoto.com/photos/doctor-woman-in-white-coat-with-stethoscope-picture-id1131403977"
              alt=""
              width="100px"
              height="100px"
            />
          </div>

          <div className="profile-des">
            <span>Eye</span>
            <p className="profile-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit., dicta.
            </p>
          </div>
        </div>
        <div className=" profile-grid2">
          <div className="profile-pic">
            <img
              src="https://previews.123rf.com/images/lithian/lithian1602/lithian160200034/52548478-portrait-of-an-attractive-young-female-doctor-in-white-coat-.jpg"
              alt=""
              width="100px"
              height="100px"
            />
          </div>

          <div className="profile-des">
            <span>Ear</span>
            <p className="profile-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit., dicta.
            </p>
          </div>
        </div>
      </div>
      <div className=" profile-grid">
        <div className="profile-grid1">
          <div className="profile-pic">
            <img
              src="https://previews.123rf.com/images/lithian/lithian1603/lithian160300102/53995136-portrait-of-an-attractive-young-female-doctor-in-white-coat-.jpg"
              alt=""
              width="100px"
              height="100px"
            />
          </div>

          <div className="profile-des">
            <span>Neck</span>
            <p className="profile-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit., dicta.
            </p>
          </div>
        </div>
        <div className="profile-grid2">
          <div className="profile-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87sXH9LatzRqB9oOS_uQVQ-7rwyXYnB2O2kBE1_qpk_J24GEE9bzS0K_sFt4afOLeSjw&usqp=CAU"
              alt=""
              width="100px"
              height="100px"
            />
          </div>

          <div className="profile-des">
            <span> Knee</span>
            <p className="profile-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit., dicta.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile