import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table'

const TopTable = () => {

    const apiURL = 'https://jsonplaceholder.typicode.com/users/';

    // const getUser = async (id) => {
    //     try {
    //         const response = await fetch(`${apiURL}${id}`)
    //         const data = await response.json();

    //         return data;
    //     } catch (err) {
    //         console.log(err)
    //     }
    // };

    // getUser(1).then((data) => {
    //     const [user] = data;
    //     const { username } = user;

    //     const userBoard = username;

    //     console.log(userBoard);
    // })




    return (

        <div className="topTable">
            <Table striped bordered hover size="sm">
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
                        <td>RoseRick</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>MattJ</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Kamcio</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Jacob</td>
                        <td>40</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TopTable;