import React, { Component } from 'react';
import ItemService from './ItemService';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { value:'' };
    this.addItemService = new ItemService();

    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }); 
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItemService.sendData(this.state.value);
    this.props.history.push('/');
  }

  render() {
    return(
      <div>
        <h1>Add item</h1>
        <form onSubmit={ this.handleSubmit }>
          <lable>
            Add Item:
            <input type='text' value={ this.state.value } 
              onChange={ this.handleChange } />
          </lable><br />
          <input type='submit' value='Submit' />`
        </form>
      </div>
    ); 
  }
}

export default Add;
