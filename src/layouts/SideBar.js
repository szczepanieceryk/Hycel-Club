import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar'

import '../styles/_SideBar.scss';

const SideBar = () => {

    const now = 40;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
    return (
        <div className="sidebar">
            <div className="activity">
                <h6>
                    Dzienna efektywność
                </h6>
            </div>
            <div className="progress">

                {progressInstance}

            </div>
        </div>
    );
}

export default SideBar;