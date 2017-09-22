import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
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
    );
  }
}

export default TableRow;
