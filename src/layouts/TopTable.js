import React from 'react';

import Table from 'react-bootstrap/Table'

import Task from './Task';

const apiURL = 'https://jsonplaceholder.typicode.com/users/';



const TopTable = (props) => {

    const getUser = async (id) => {
        try {
            const response = await fetch(`${apiURL}${id}`);
            const data = await response.json();

            return data;

        } catch (err) {
            console.log(err)
        }
    };

    getUser(3).then((data) => {
        const user = data;
        const { username } = user;

        const userAPI = username;

        console.log(userAPI)

    })

    const basicScore = 100;

    const user1 = 'RoseRick'
    const user2 = 'MattJ';
    const user3 = props.randomUsers.slice(-1)
    const user4 = 'Destroyer999'
    const user5 = props.randomUsers.slice(0, 1);


    const done = props.tasks.filter(task => !task.active);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (

        <div className="topTable">
            <h6 className="title"><strong>Top z tyg.</strong></h6>
            <Table striped bordered hover size="sm" className='table'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Pkt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{user1}</td>
                        <td>{doneTasks.length === 0 ? basicScore : doneTasks.length * 10 + basicScore}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{user2}</td>
                        <td>{doneTasks.length === 0 ? 70 : doneTasks.length * 10 + 70}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{user3}</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{user4}</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{user5}</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    );
}

export default TopTable;