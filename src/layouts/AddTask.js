import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import '../styles/_AddTask.scss';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        animal: 'pies',
        breed: 'Mieszaniec',
        area: '',
        checked: false,
        date: this.minDate,
    }
    handleAnimalChange = (e) => {
        this.setState({
            animal: e.target.value
        })
    }
    handleBreedChange = (e) => {
        this.setState({
            breed: e.target.value
        })
    }
    handleInput = (e) => {
        this.setState({
            area: e.target.value
        })
    }
    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }
    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    handleClick = () => {
        const { animal, breed, area, checked, date } = this.state;
        const add = this.props.add(animal, breed, area, checked, date);
        if (add) {
            this.setState({
                animal: 'pies',
                breed: 'Mieszaniec',
                area: '',
                checked: false,
                date: this.minDate,
            })
        }
    }
    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + '-12-31';
        return (
            <div className="addTask">
                <h6><strong>DODAJ ZLECENIE</strong></h6>
                <div className="form">
                    <label className='animals' htmlFor="animals">RODZAJ ZWIERZĘCIA</label>
                    <select name="animal" id="animal" value={this.state.animal} onChange={this.handleAnimalChange}>
                        <option value='pies' defaultValue>pies</option>
                        <option value='kot'>kot</option>
                        <option value='lis'>lis</option>
                        <option value='ptak'>ptak</option>
                        <option value='inne'>inne</option>
                    </select>
                    <label className='breed' htmlFor="breed">RASA</label>
                    <select name="breed" id="breed" value={this.state.breed} onChange={this.handleBreedChange}>
                        <option value='Mieszaniec' defaultValue>Mieszaniec</option>
                        <option value='Pitbull'>Pitbull</option>
                        <option value='Doberman'>Doberman</option>
                        <option value='Owczarek niem.'>Owczarek niem.</option>
                        <option value='Labrador'>Labrador</option>
                        <option value='Rasowy'>Rasowy</option>
                        <option value='Inna'>Inna</option>
                    </select>
                    <label className='last-place' htmlFor="">OSTATNIO WIDZIANE</label>
                    <input type="text" placeholder="Wpisz lokalizację" value={this.state.area} onChange={this.handleInput} />
                    <label htmlFor="date" id="date">TERMIN ZŁAPANIA</label>
                    <input className='input-date' type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                    <br />
                    <input type="checkbox" id="important" value={this.state.checked} onChange={this.handleCheckbox} />
                    <label className="important" htmlFor="important"><strong>Zlecenie priorytetowe</strong></label>
                    <Button className="add" onClick={this.handleClick}>DODAJ ZLECENIE</Button>
                </div>
            </div>
        )
    }
}
export default AddTask;