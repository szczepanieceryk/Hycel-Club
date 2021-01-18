import React from 'react';

import Button from 'react-bootstrap/Button';

const Task = (props) => {

    const { id, dog, area, important, active, date, finishDate } = props.task;

    if (active) {
        return (
            <>
                <div className="task">
                    <p>
                        <strong>{dog} - {area}</strong> - do <span>{date}</span>
                        <Button onClick={() => props.change(id)} variant="success" size="sm">Wykonane</Button>
                        <svg onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                        </svg>
                    </p>
                </div>
            </>
        );
    } else {

        const finish = new Date(finishDate).toLocaleDateString();
        return (
            <>
                <div>
                    <p>
                        <strong>{dog} - {area}</strong> <em>(zrobić do{date})</em>
                        <br />
                        - potwierdzenie wykonania <span>{finish}</span>
                        <svg onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                        </svg>
                    </p>
                </div>
            </>
        );
    }
}


export default Task;