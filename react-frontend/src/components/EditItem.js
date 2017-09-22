import React, { Component } from 'react';
import axios from 'axios';

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = { items: '' }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/items/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ items: response.data }); 
    })
    .catch(function (error) {
      console.log(error); 
    });
  } 

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>
            Edit Item:
            <input type="text" value={this.state.items.item} />
          </label><br/>
            <input type="submit" value="Update" />
        </form>
      </div>
    );  
  }
}

export default EditItem;
