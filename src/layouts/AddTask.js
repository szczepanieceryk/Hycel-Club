import React, { Component } from 'react';

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
    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }
    handelText = (e) => {
        this.setState({
            dog: e.target.dog
        })
    }
    handelText = (e) => {
        this.setState({
            area: e.target.area
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
            alert('Za krótka nazwa. Dodawany pies musi mieć min. 4 znaki')
        }
    }
    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + '-12-31';
        return (
            <div className="addTask">
                <h6 className="title">MOJE ZLECENIA</h6>
                <hr />
                <div className="form">
                    <input type="text" placeholder="dodaj psa" value={this.state.dog} onChange={this.handelText} />
                    <input type="text" placeholder="dodaj miejsce" value={this.state.area} onChange={this.handelText} />
                    <input type="date" value={this.state.date} min={this.minDate} onChange={this.handelDate} />
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