/* eslint-disable */
const React = require("react");

var patientObj = {
  firstName: "",
  lastName: ""
};

class AddPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientObj: {
        firstName: "",
        lastName: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.createPatient = this.createPatient.bind(this);
  }

  handleChange(event) {
    const patientObj = this.state.patientObj;
    patientObj[event.target.name] = event.target.value;
    this.setState({
      patientObj: patientObj
    });
  }
  createPatient(e) {
    e.preventDefault();
    console.log(this.state.patientObj);
  }

  render() {
    return (
      <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <div className="main-content-container container-fluid px-4">
          <div className="page-header row no-gutters py-4">
            <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
              <span className="text-uppercase page-subtitle" />
              <h3 className="page-title">New Patient Profile</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                  <h6 className="m-0">Details</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-3">
                    <div className="row">
                      <div className="col">
                        <form onSubmit={e => this.createPatient(e)}>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="feFirstName">First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="feFirstName"
                                name="firstName"
                                onChange={this.handleChange}
                                placeholder="First Name"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="feLastName">Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="feLastName"
                                name="lastName"
                                onChange={this.handleChange}
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="feMobile">Mobile</label>
                              <input
                                type="text"
                                className="form-control"
                                id="feMobile"
                                name="mobile"
                                onChange={this.handleChange}
                                placeholder="Mobile"
                                value=""
                              />
                            </div>

                            <div className="form-group col-md-6">
                              <label htmlFor="feEmailAddress">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="feEmailAddress"
                                placeholder="Email"
                                name="email"
                                onChange={this.handleChange}
                                value="sierra@example.com"
                              />
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="feGender">Gender</label>
                              <div className="form-group">
                                <div className="form-check form-check-inline">
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      onChange={this.handleChange}
                                      name="inlineRadioOptions"
                                      id="inlineRadio1"
                                      value="female"
                                    />
                                    Female
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio2"
                                  >
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      onChange={this.handleChange}
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="male"
                                    />
                                    Male
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio3"
                                  >
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      onChange={this.handleChange}
                                      name="inlineRadioOptions"
                                      id="inlineRadio3"
                                      value="other"
                                      checked
                                    />
                                    Other
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="fePrice">Price</label>
                              <input
                                type="text"
                                className="form-control"
                                id="fePrice"
                                name="price"
                                onChange={this.handleChange}
                                placeholder="Price"
                                value=""
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="fePassword">Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="fePassword"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="feInputAddress">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              id="feInputAddress"
                              placeholder="1234 Main St"
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="feInputCity">City</label>
                              <input
                                type="text"
                                className="form-control"
                                id="feInputCity"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <label htmlFor="inputZip">Zip</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputZip"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="feDescription">Description</label>
                              <textarea
                                className="form-control"
                                name="feDescription"
                                rows="5"
                              >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odio eaque, quidem, commodi
                                soluta qui quae minima obcaecati quod dolorum
                                sint alias, possimus illum assumenda eligendi
                                cumque?
                              </textarea>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-accent">
                            Update Account
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- End Default Light Table --> */}
        </div>
      </div>
    );
  }
}

module.exports = AddPatient;
