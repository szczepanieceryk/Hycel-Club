import React from 'react';

import ListDog from './ListDog';

import '../styles/_CatchedList.scss';

const CatchedList = (props) => {
    const done = props.tasks.filter(task => !task.active);
    const doneTasks = done.map(task => <ListDog key={task.id} task={task} delete={props.delete} change={props.change} />)

    return (
        <div className="list-wrapper">
            <h6 className="title"><strong>LISTA DODANYCH PSÓW</strong></h6>
            <div className="list">
                {doneTasks.length === 0 && < p className='default'>Dodaj nowego psa</p>}
                {doneTasks.length > 3 && <span className="info">(Wyświetlane są jedynie 3 ostatnio dodane psy)</span>}
                {doneTasks.slice(0, 3)}
            </div>
        </div >
    );

}

export default CatchedList;