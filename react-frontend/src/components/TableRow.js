import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemService from './ItemService';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.addItemService = new ItemService();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItemService.deleteData(this.props.obj._id);
  }

  render() {
    return (
    <div>
      <tr>
        <td>
          {this.props.obj._id}
        </td>
        <td>
          {this.props.obj.item}
        </td>
        <Link to={"/edit/"+this.props.obj._id}>
          Edit
        </Link>
        <td>
          <form onSubmit={ this.handleSubmit }>
            <input type='submit' value='Delete' /> 
          </form>
        </td>
      </tr>
      </div>
    );
  }
}

export default TableRow;
