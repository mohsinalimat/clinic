/* eslint-disable */
const React = require("react");
const jquery = require("jquery");
const Patient = require("./Patient");
const $ = jquery;
const DayPickerInput = require("react-day-picker/DayPickerInput").default;

class SelectedPatient extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }
    handleChange() {

    }
    handleDate() {

    }

    render() {
        const {firstName, lastName} = this.props.patient;
        return (
            <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <div className="main-content-container container-fluid px-4">
          <div className="page-header row no-gutters py-4">
            <div className="col-12 col-sm-12 text-center text-sm-left mb-0">
              <span className="text-uppercase page-subtitle" />
              <h3 className="page-title">{firstName} {lastName}</h3>
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
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="feDate">Date</label>
                              <br />
                              <DayPickerInput onDayChange={this.handleDate} />
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="feNote">Note</label>
                              <textarea
                                className="form-control"
                                name="feNote"
                                rows="5"
                                name="note"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>

                          <hr />

                          {/* <div className="form-row">
                            <div className="col-md-12">
                              <label htmlFor="feDate">Procedure</label>
                            </div>
                          </div>

                          <div className="form-row" id="procedure">
                            {procedures.map(item => (
                              <Procedure
                                key={item.key}
                                prokey={item.prokey}
                                prikey={item.prikey}
                                isChecked={this.state.procedures.get(item.name)}
                                chkName={item.key}
                                labelName={item.labelName}
                                procedureNote={item.procedureNote}
                                procedurePrice={item.procedurePrice}
                                handleProCheckbox={this.handleProCheckbox}
                              />
                            ))}
                          </div>

                          <div className="form-row">
                            <div className="col-md-12">
                              <label>Images</label>
                            </div>
                          </div>
                          <div className="form-row">
                            <input
                              type="file"
                              className="form-control"
                              id="procedureImages"
                              multiple
                            />
                          </div>
                              <br />
                          <div className="form-row">
                            <div className="col-sm-12">
                              <button type="submit" className="btn btn-accent">
                                Create
                              </button>
                            </div>
                          </div>
                        */}
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}


module.exports = SelectedPatient;