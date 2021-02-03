import React from 'react';

import Task from '../layouts/Task';

import ProgressBar from 'react-bootstrap/ProgressBar'

import '../styles/_ActivityCard.scss';

const check = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
</svg>

const ActivityCard = (props) => {

    const done = props.tasks.filter(task => !task.active);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    const now = 0;
    const pkt = 10;
    const progress = 25;
    const finished = 4;

    return (
        <div className="activity-wrapper">
            <h6 className='title'>
                <strong>Dzienna efektywność</strong>
            </h6>
            <p><strong>Cel dnia:</strong></p>
            <span>{doneTasks.length < finished ? doneTasks.length : finished}/4 psy</span>
            {doneTasks.length >= finished && check}
            <div className="activity">
                <p><strong>Złapane psy:</strong></p>
                <span>{doneTasks.length > 0 ? doneTasks.length : 0}
                </span>
                <p><strong>Zebrane pkt:</strong></p>
                <span> {doneTasks.length > 0 ? doneTasks.length * pkt : 0} </span>
            </div>
            <div className="progress">
                <ProgressBar className="bar" animated now={doneTasks.length > 0 ? doneTasks.length * progress : now} label={`${doneTasks.length > 0 ? doneTasks.length * progress : now}%`} />
            </div>
            <div className="sucess">
                {doneTasks.length === finished && <h6>Brawo! wykonałeś 100% dziennej aktywności :D</h6>}
                {doneTasks.length > finished ? <h6> Świetnie! wykonałeś {doneTasks.length * progress}% przeciętnej dziennej aktywności 💪</h6> : null}
            </div>

        </div>
    );
}

export default ActivityCard; 