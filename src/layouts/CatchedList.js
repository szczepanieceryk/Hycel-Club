import React from 'react';

import ListDog from './ListDog';

import '../styles/_CatchedList.scss';

const CatchedList = (props) => {
    const done = props.tasks.filter(task => !task.active);
    const doneTasks = done.map(task => <ListDog key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <div className="list-wrapper">
            <h6 className="title">LISTA DODANYCH PSÓW</h6>
            <div className="list">
                {/* {doneTasks.length > 0 ? doneTasks : null} */}
                {doneTasks.length > 5 && <span className="info">(Wyświetlonych jest jedynie 5 ostatnio dodanych psów)</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </div>
    );
}

export default CatchedList;