import React, { Component } from 'react';

import AddTask from '../layouts/AddTask';
import CatchedList from '../layouts/CatchedList';
import ProfileBar from '../layouts/ProfileBar';
import SideBar from '../layouts/SideBar';
import TaskList from '../layouts/TaskList';
import TopTable from '../layouts/TopTable';

import '../styles/_Dashboard.scss';


class Dashboard extends Component {
    counter = 0;
    state = {
        tasks: [
        ]
    }
    deleteTask = (id) => {
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1);

        this.setState({
            tasks
        })
    }
    changeTaskStatus = (id) => {
        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime()
            }
        })
        this.setState({
            tasks
        })
    }
    addTask = (dog, area, important, date) => {
        const task = {
            id: this.counter,
            dog,
            area,
            important,
            date,
            active: true,
            finishDate: null
        }
        this.counter++;
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }))
        return true
    }
    render() {
        return (
            <>
                <div className="dashboard-wrapper">
                    <ProfileBar />
                    <div className="task">
                        <h6>DODAJ ZLECENIE</h6>
                    </div>
                    <br />
                    <AddTask add={this.addTask} />
                    <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
                    <CatchedList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
                    <SideBar />
                    <TopTable />
                </div>


            </>
        );
    }
}
export default Dashboard;