import React from 'react';

import Button from 'react-bootstrap/Button';

import dogo from '../images/dog-3216207_1280.png';

import '../styles/_Task.scss';

const Task = (props) => {

    const { id, dog, area, important, active, date, finishDate } = props.task;

    const style = {
        color: '#dc3545'
    }

    if (active) {
        return (
            <>
                <div className="task">
                    <p>
                        <strong style={important ? style : null}>{dog}</strong> - {area} do <em>{date}</em>
                        <Button onClick={() => props.change(id)} variant="success" size="sm">Wykonane</Button>
                        <svg onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg>
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
                                <strong>{dog}</strong> - <span>{finish}</span>
                                <br />
                                <img className='dogo' src={dogo} alt="pies" />
                                <svg onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </p>
                        </li>
                    </ul>
                </div>
            </>
            /* <div className="task">
                    <p>
                        <strong>{dog} - {area}</strong>
                        <br />
                        - potwierdzenie wykonania <span>{finish}</span>
                        <svg onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                    </p>
                </div> */
        );
    }
}


export default Task;