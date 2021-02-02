import React from 'react';

import Task from '../layouts/Task';

import ProgressBar from 'react-bootstrap/ProgressBar'

import '../styles/_ActivityCard.scss';

const ActivityCard = (props) => {

    const done = props.tasks.filter(task => !task.active);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    const now = 0;
    const progress = 25;

    return (
        <div className="activity-wrapper">
            <h6 className='title'>
                <strong>Dzienna efektywność</strong>
            </h6>
            <div className="activity">
                <p>Złapane psy:</p><span>{doneTasks.length > 0 ? doneTasks.length : 0}</span>
                <p>Zebrane pkt:</p><span>{doneTasks.length > 0 ? doneTasks.length * 10 : 0}</span>
            </div>
            <div className="progress">
                {/* <ProgressBar animated now={doneTasks.length > 0 ? now * 2.5 : 0} /> */}
                {/* <ProgressBar animated now={doneTasks.length > 0 ? doneTasks * 25 : now} /> */}
                <ProgressBar className="bar" animated now={doneTasks.length > 0 ? doneTasks.length * progress : now} label={`${doneTasks.length > 0 ? doneTasks.length * progress : now}%`} />
            </div>
            <h6 className="sucess"> Brawo! wykonałeś 100% dziennej aktwności</h6>

        </div>
    );
}

export default ActivityCard; 