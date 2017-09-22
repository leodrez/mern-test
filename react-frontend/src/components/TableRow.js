import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
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
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
      <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">
        Edit
      </Link>
      </div>
    );
  }
}

export default TableRow;
