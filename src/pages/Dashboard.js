import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import AddTask from '../layouts/AddTask';
import TaskList from '../layouts/TaskList';

import ProfileBar from '../layouts/ProfileBar';

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
    addTask = (dog, area, important) => {
        const task = {
            id: this.counter,
            dog,
            area,
            important,
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
            <Container>
                <div className="dashboard-wrapper">
                    <ProfileBar />
                    <div className="task">
                        <h6>WYBÓR ZLECENIA</h6>
                    </div>
                    <hr />
                    <AddTask add={this.addTask} />
                    <TaskList delete={this.deleteTask} change={this.changeTaskStatus} />
                </div>
            </Container>
        );
    }
}
export default Dashboard;