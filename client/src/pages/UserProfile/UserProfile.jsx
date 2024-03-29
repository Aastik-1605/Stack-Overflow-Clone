import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router'
import birthdayCake from '../../assets/cake-candles-solid.svg'
import pen from '../../assets/pen-solid.svg'
import moment from 'moment'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UsersProfile.css'

const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    const [Switch, setSwitch] = useState(false)

    return (
        <div className="home-container-1">
          <LeftSidebar />
          <div className="home-container-2">
            <section>
              <div className="user-details-container">
                <div className="user-details">
                  <Avatar
                    backgroundColor="purple"
                    color="white"
                    fontSize="50px"
                    px="40px"
                    py="30px"
                    borderRadius="5px"
                  >
                    {currentProfile?.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <div className="user-name">
                    <h1>{currentProfile?.name}</h1>
                    <p>
                      <img src={birthdayCake} alt="" width="18px"/> Joined
                      {moment(currentProfile?.joinedOn).fromNow()}
                    </p>
                  </div>
                </div>
                {currentUser?.result._id === id && (
                  <button
                    type="button"
                    onClick={() => setSwitch(true)}
                    className="edit-profile-btn edit-profile-btn-big"
                  >
                    <img src={pen} alt="" width="18px"/> Edit Profile
                  </button>
                )}
                {currentUser?.result._id === id && (
                  <button
                    type="button"
                    onClick={() => setSwitch(true)}
                    className="edit-profile-btn edit-profile-btn-small"
                  >
                    <img src={pen} alt="" width="18px"/>
                  </button>
                )}
              </div>
              <>
                {Switch ? (
                  <EditProfileForm
                    currentUser={currentUser}
                    setSwitch={setSwitch}
                    className="edit-profile-form"
                  />
                ) : (
                  <ProfileBio currentProfile={currentProfile} />
                )}
              </>
            </section>
          </div>
        </div>
      );
    
}

export default UserProfile
