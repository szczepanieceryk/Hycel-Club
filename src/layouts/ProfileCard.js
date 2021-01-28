import React from 'react';

import '../styles/_ProfileCard.scss';

const ProfileCard = (props) => {

    const userName = props.userName;
    const folowing = 30;
    const folowers = 45;
    const overalStats = 10;

    const profileIcon = <svg className="profile" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
    </svg>



    return (
        <div className="profile-card">
            {profileIcon}
            <h5 className="userName"><strong>{userName}</strong></h5>
            <div className="profile-body">
                <ul>
                    <li>
                        <a href="">
                            <span className="title">Obserwujący</span>
                            <b className="stats">{folowers}</b>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="title">Obserwowani</span>
                            <b className="stats">{folowing}</b>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="title">Zł. psy</span>
                            <b className="stats">{overalStats}</b>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileCard;