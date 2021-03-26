import React from 'react';

import Button from 'react-bootstrap/Button';

import '../styles/_Task.scss';

const Task = (props) => {

    const { id, animal, breed, area, important, active, date, finishDate } = props.task;

    const dateTo = new Date(date).toLocaleDateString();

    const style = {
        color: '#dc3545'
    }

    if (active) {
        return (
            <>
                <div className="task">
                    <p>
                        <strong style={important ? style : null}>{animal.toLowerCase()}</strong> - {breed} ({area.toLowerCase()}) do <em>{dateTo}</em>
                        <Button onClick={() => props.change(id)} variant="success" size="sm">Wykonane</Button>
                        <Button onClick={() => props.delete(id)} variant="danger" size="sm">Anuluj</Button>
                    </p>
                </div>
            </>
        );
    } else {

        const finish = new Date(finishDate).toLocaleDateString();

        return (
            <>
                <div className="task">
                    <ul>
                        <li>
                            <p>
                                <strong>{animal} ({area.toLowerCase()})</strong> - <span>{finish}</span>
                                <br />
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </p>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}


export default Task;