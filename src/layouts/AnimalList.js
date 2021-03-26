import React from 'react';

import dogo from '../images/dog-3216207_1280.png';
import cat from '../images/cat.svg';
import parrot from '../images/parrot.svg';
import fox from '../images/fox.svg';
import otherAnimal from '../images/pawprint.svg';

import '../styles/_ListDog.scss';

const AnimalList = (props) => {

    const { id, animal, finishDate } = props.task;

    const finish = new Date(finishDate).toLocaleDateString();
    if (animal === 'pies') {
        return (
            <div className="list-animal">
                <p>
                    <strong>{animal.toLowerCase()}</strong> - <span>{finish}</span>
                    <br />
                    <img className='animal' src={dogo} alt="pies" />
                    <svg id='delete' onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </p>
                <hr />
            </div>
        );
    } else if (animal === 'kot') {
        return (
            <div className="list-animal">
                <p>
                    <strong>{animal.toLowerCase()}</strong> - <span>{finish}</span>
                    <br />
                    <img className='animal' src={cat} alt="kot" />
                    <svg id='delete' onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </p>
                <hr />
            </div>
        );
    } else if (animal === 'ptak') {
        return (
            <div className="list-animal">
                <p>
                    <strong>{animal.toLowerCase()}</strong> - <span>{finish}</span>
                    <br />
                    <img className='animal' src={parrot} alt="papuga" />
                    <svg id='delete' onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </p>
                <hr />
            </div>
        );
    } else if (animal === 'lis') {
        return (
            <div className="list-animal">
                <p>
                    <strong>{animal.toLowerCase()}</strong> - <span>{finish}</span>
                    <br />
                    <img className='animal' src={fox} alt="lis" />
                    <svg id='delete' onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </p>
                <hr />
            </div>
        );
    } else {
        return (
            <div className="list-animal">
                <p>
                    <strong>{animal.toLowerCase()}</strong> - <span>{finish}</span>
                    <br />
                    <img className='animal' src={otherAnimal} alt="odcisk łapy" />
                    <svg id='delete' onClick={() => props.delete(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </p>
                <hr />
            </div>
        );
    }
}
export default AnimalList;