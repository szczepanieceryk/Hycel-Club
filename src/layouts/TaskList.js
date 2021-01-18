import React from 'react';

import Task from '../layouts/Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    return (
        <>
            <div className="active">
                <h2>Zlecenia do zrobienia</h2>
                {activeTasks.length > 0 ? activeTasks : <p>Dodaj zlecenie</p>}
            </div>
            <div className="done">
                <h3>Zlecenia wykonane <em>doneTasks.length</em></h3>
                {doneTasks > 5 && <span style={{ fontSize: '10px' }}>wyświetlonych jest jedynie 5 ostatnich zleceń</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;