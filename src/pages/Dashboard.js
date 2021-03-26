import React, { Component } from 'react';

import AddTask from '../layouts/AddTask';
import ActivityCard from '../layouts/ActivityCard';
import CatchedList from '../layouts/CatchedList';
import ProfileBar from '../layouts/ProfileBar';
import ProfileCard from '../layouts/ProfileCard';
import TaskList from '../layouts/TaskList';
import TopTable from '../layouts/TopTable';

import '../styles/_Dashboard.scss';


class Dashboard extends Component {

    userName = 'Admin';

    counter = 0;
    state = {
        tasks: [],
        randomUsers: ['CrazyLoco', 'adam1234', 'RoseRick', 'MatJ', 'Destroyer999', 'HycelMajster']
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
    addTask = (animal, breed, area, important, date) => {
        const task = {
            id: this.counter,
            animal,
            breed,
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
                    <ActivityCard tasks={this.state.tasks} />
                    <div className="task-title">
                        <h6><strong>DODAJ ZLECENIE</strong></h6>
                    </div>
                    <AddTask add={this.addTask} />
                    <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
                    <CatchedList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
                    <TopTable tasks={this.state.tasks} randomUsers={this.state.randomUsers} />
                    <ProfileCard tasks={this.state.tasks} userName={this.userName} />
                </div>
            </>
        );
    }
}
export default Dashboard;

