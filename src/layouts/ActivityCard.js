import React from 'react';

import Task from '../layouts/Task';

import ProgressBar from 'react-bootstrap/ProgressBar'

import '../styles/_ActivityCard.scss';

const ActivityCard = (props) => {

    const done = props.tasks.filter(task => !task.active);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    const now = 100;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

    return (
        <div className="activity-wrapper">
            <div className="activity">
                <h6 className='title'>
                    Dzienna efektywność
                </h6>
                <p>Złapane psy:</p><span>{doneTasks.length > 0 ? doneTasks.length : 0}</span>
                <p>Zebrane pkt:</p><span>{doneTasks.length > 0 ? doneTasks.length * 10 : 0}</span>
            </div>
            <div className="progress">

                <ProgressBar />
            </div>
        </div>
    );
}

export default ActivityCard;