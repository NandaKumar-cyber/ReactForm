import React from "react";
import axios from "axios";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_purchased: "",
      order_number: "",
      value: "",
      mobile_number: "",
    };
    this.validateForm = this.validateForm.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  validateForm() {
    // console.log("Added");
    const item_purchased = this.state.item_purchased;
    const order_number = this.state.order_number;
    const value = this.state.value;
    const mobile_number = this.state.mobile_number;

    var detailsFormInput = {
      item_purchased: item_purchased,
      order_number: order_number,
      value: value,
      mobile_number: mobile_number,
    };

    console.log("--------detailsFormInput------", detailsFormInput);

    axios
      .post("http://localhost:3001/details", detailsFormInput)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeInput(event) {
    //   console.log("-------event----",event);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-9 register-right">
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item"></li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
                onChange={(e) => this.onChangeInput(e)}
              >
                <h3 className="register-heading">Details</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="item_purchased"
                        className="form-control"
                        value={this.state.item_purchased}
                        placeholder="Item Purchased *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="order_number"
                        className="form-control"
                        placeholder="Order Number *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="value"
                        className="form-control"
                        placeholder="Value *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="mobile_number"
                        className="form-control"
                        placeholder="Mobile Number *"
                      />
                    </div>
                    <input
                      type="submit"
                      className="btnRegister"
                      value="Add"
                      onClick={this.validateForm}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
