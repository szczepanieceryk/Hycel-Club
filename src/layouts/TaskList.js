import React from 'react';

import Task from '../layouts/Task';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import '../styles/_TaskList.scss';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);


    // if (active.length >= 2) {
    //     active.sort((a, b) => {
    //         a = a.text.toLowerCase();


    //         if (a < b) return -1;
    //         if (a > b) return 1;
    //         return 0
    //     })
    // }


    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    return (
        <div className="taskList">
            <h6>MOJE ZLECENIA</h6>
            <Tabs className="tabs" defaultActiveKey="home" transition={false} id="noanim-tab-example">
                <Tab eventKey="home" title="Aktywne">
                    <div className="active">
                        <h6 className="title">ZLECENIA DO WYKONANIA</h6>
                        {activeTasks.length > 0 ? activeTasks : <p>Dodaj zlecenie</p>}
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