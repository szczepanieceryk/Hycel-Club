import React, { Component } from 'react';

import AddTask from '../layouts/AddTask';
import CatchedList from '../layouts/CatchedList';
import ProfileBar from '../layouts/ProfileBar';
import ProfileCard from '../layouts/ProfileCard';
import ActivityCard from '../layouts/ActivityCard';
import TaskList from '../layouts/TaskList';
import TopTable from '../layouts/TopTable';
import Toast from '../layouts/Notification';

import '../styles/_Dashboard.scss';


class Dashboard extends Component {

    userName = 'Admin';

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
                <Toast />
                <div className="dashboard-wrapper">
                    <ProfileBar />
                    <div className="task">
                        <h6>DODAJ ZLECENIE</h6>
                    </div>
                    <br />
                    <AddTask add={this.addTask} />
                    <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
                    <CatchedList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
                    <ActivityCard tasks={this.state.tasks} />
                    <TopTable tasks={this.state.tasks} />
                    <ProfileCard tasks={this.state.tasks} userName={this.userName} />
                </div>


            </>
        );
    }
}
export default Dashboard;