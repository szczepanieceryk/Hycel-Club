import React from 'react';

import Task from '../layouts/Task';

import '../styles/_CatchedList.scss';

const CatchedList = (props) => {
    const done = props.tasks.filter(task => !task.active);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    return (
        <div className="list-wrapper">
            <h6>LISTA DODANYCH PSÓW</h6>
            <div className="list">
                {doneTasks.length > 0 ? doneTasks : null}
            </div>
        </div>
    );
}

export default CatchedList;