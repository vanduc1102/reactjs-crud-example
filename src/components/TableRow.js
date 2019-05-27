import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import REACT_APP_BASE_URL from '../utils/endpoint'

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete(REACT_APP_BASE_URL + '/products/'+this.props.obj.key.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.data.person_name}
          </td>
          <td>
            {this.props.obj.data.business_name}
          </td>
          <td>
            {this.props.obj.data.business_gst_number}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.key.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;