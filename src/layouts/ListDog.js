import React from 'react';

import dogo from '../images/dog-3216207_1280.png';

import '../styles/_ListDog.scss';

const ListDog = (props) => {

    const { id, dog, finishDate } = props.task;

    const finish = new Date(finishDate).toLocaleDateString();
    return (
        <div className="list-dog">
            <p>
                <strong>{dog}</strong> - <span>{finish}</span>
                <br />
                <img className='dogo' src={dogo} alt="pies" />
                <svg onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
            </p>
            <hr />
        </div>
    );
}

export default ListDog;