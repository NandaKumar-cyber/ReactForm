import React, { Component } from "react";

class Nanda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Item: "Fancy Items",
      Order: "1AsD25781",
      Mobile: "9874561230",
    
    };
    this.validForm = this.validForm.bind(this);
  }

  validForm() {
    console.log(this.state);
  }
  valueUpdated = function (e) {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <h2>Details</h2>
        <table>
          <tbody>
            <tr>
              <th>1</th>
              <th>2</th>
             
            </tr>

            <tr>
              <td>Item</td>
             
              <td>
                <h2>{this.state.Item}</h2>
              </td>
              {/* <button onClick={this.validForm}></button> */}
            </tr>

            <tr>
              <td>Order</td>
              
              <td>
                <h2>{this.state.Order}</h2>
              </td>
            </tr>

            <tr>
              <td>Mobile</td>
             
              <td>
                <h2>{this.state.Mobile}</h2>
              </td>
            </tr>
            <button onClick={this.validForm}>Add</button>
            {this.state.value}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Nanda;
