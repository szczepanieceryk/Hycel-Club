import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar'

import '../styles/_SideBar.scss';

const SideBar = (props) => {


    const now = 100;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

    return (
        <div className="sidebar">
            <div className="activity">
                <h6>
                    Dzienna efektywność
                </h6>
                <p>Złapane psy: 0</p>
                {/* <p>Złapane psy:</p><span>{doneTasks.length > 0 ? doneTasks : '0'}</span> */}
            </div>
            <div className="progress">

                <ProgressBar />
            </div>
        </div>
    );
}

export default SideBar;