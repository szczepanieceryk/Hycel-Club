import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Task from '../layouts/Task';

import '../styles/_TaskList.scss';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    return (
        <div className="taskList">
            <h6><strong>MOJE ZLECENIA</strong></h6>
            <Tabs className="tabs" defaultActiveKey="home" transition={false} id="noanim-tab-example">
                <Tab eventKey="home" title="Aktywne">
                    <div className="active">
                        {activeTasks.length > 0 ? activeTasks : <p className='text'>Tutaj znajdziesz Twoje aktywne i zakończone zlecenia</p>}
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Zakończone">
                    <div className="done">
                        <h6>WYKONANE ZLECENIA: <em>{doneTasks.length}</em></h6>
                        {doneTasks > 5 && <span style={{ fontSize: '10px' }}>wyświetlonych jest jedynie 5 ostatnich zleceń</span>}
                        {doneTasks.slice(0, 5)}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default TaskList;