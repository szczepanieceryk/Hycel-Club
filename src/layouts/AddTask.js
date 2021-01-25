import React, { Component } from 'react';

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';

import '../styles/_AddTask.scss';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        dog: '',
        area: '',
        checked: false,
        date: this.minDate,
    }

    handleText = (e) => {
        this.setState({
            dog: e.target.value
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
        const { dog, area, checked, date } = this.state;
        if (dog.length > 3) {
            const add = this.props.add(dog, area, checked, date);
            if (add) {
                this.setState({
                    dog: '',
                    area: '',
                    checked: false,
                    date: this.minDate,
                })
            }
        } else {
            // alert('Za krótka nazwa. Dodawany pies musi mieć min. 4 znaki')
            < Alert className='aler' variant='warning' >
                Za krótka nazwa.Dodawany pies musi mieć min. 4 znaki.
            </Alert >

        }
    }
    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + '-12-31';
        return (
            <div className="addTask">
                <div className="form">
                    <input type="text" placeholder="dodaj psa" value={this.state.dog} onChange={this.handleText} />
                    <input type="text" placeholder="dodaj miejsce" value={this.state.area} onChange={this.handleInput} />
                    <label htmlFor="date">Do kiedy zrobić</label>
                    <input type="date" value={this.state.date} min={this.minDate} onChange={this.handleDate} />
                    <br />
                    <input type="checkbox" id="important" value={this.state.checked} onChange={this.handleCheckbox} />
                    <label htmlFor="important">Priorytet</label>
                    <Button className="add" onClick={this.handleClick}>DODAJ</Button>
                </div>
            </div>
        )
    }
}
export default AddTask;