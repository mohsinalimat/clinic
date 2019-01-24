/* eslint-disable */
const React = require("react");
const jquery = require("jquery");
const Patient = require("./Patient");
const Procedure = require("./Procedure.jsx");
const $ = jquery;
const DayPickerInput = require("react-day-picker/DayPickerInput").default;
const ReactBsTable = require("react-bootstrap-table");
const BootstrapTable = ReactBsTable.BootstrapTable;
const TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class SelectedPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {
        id: "",
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        price: "",
        gender: "",
        date: "",
        note: ""
      },
      procedures: new Map(),
      procedureData: null,
      procedureList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleProCheckbox = this.handleProCheckbox.bind(this);
    this.updatePatient = this.updatePatient.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
  }
  componentDidMount() {
    //set the state
    this.setState({
      patient: this.props.patient
    });

    //use state and retrieve data
    var self = this;
    var id = this.props.patient.id;
    var p = new Patient();
    p.getProcedureByPatientID(id, function(data) {
      self.setState({ procedureData: data });
    });

    p.getProcedureList(function(allData) {
      self.setState({ procedureList: allData });
    });
  }
  handleGender(target) {
    if (
      target.value === "male" ||
      target.value === "female" ||
      target.value === "other"
    ) {
      return "gender";
    } else {
      return target.name;
    }
  }
  handleChange(event) {
    const patient = this.state.patient;
    var name = this.handleGender(event.target);
    patient[name] = event.target.value;
    this.setState({
      patient: patient
    });
  }
  handleDate() {}
  updatePatient(e) {
    e.preventDefault();
  }
  onRowClick(row) {
    //create a new window
    var childWindow = new BrowserWindow({
      width: 800,
      height: 600
    });
    // and load the index.html of the app.
    childWindow.loadURL(`file://${dirName}/case.html`);
    childWindow.webContents.on("did-finish-load", () => {
      var selectedProcedure = {
        row: row,
        storageID: this.props.patient.storageID
      };
      childWindow.webContents.send("sendData", selectedProcedure);
    });
    childWindow.webContents.openDevTools();
  }

  handleProCheckbox(e) {
    const key = e.target.name;
    const value = e.target.value;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      procedures: prevState.procedures.set(key, {
        isChecked: isChecked,
        name: value
      })
    }));
  }

  render() {
    const {
      id,
      firstName,
      lastName,
      mobile,
      gender,
      email,
      note,
      date,
      birthday
    } = this.state.patient;
    const options = {
      onRowClick: this.onRowClick
    };
    return (
      <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <div className="main-content-container container-fluid px-4">
          <div className="page-header row no-gutters py-4">
            <div className="col-12 col-sm-12 text-center text-sm-left mb-0">
              <span className="text-uppercase page-subtitle" />
              <h3 className="page-title">
                {firstName} {lastName}
              </h3>
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
                        <form onSubmit={e => this.updatePatient(e)}>
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
                                value={firstName}
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
                                value={lastName}
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
                                value={mobile}
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
                                value={email}
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
                                      checked={
                                        gender == "female" ? true : false
                                      }
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
                                      checked={gender == "male" ? true : false}
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
                                      checked={gender == "other" ? true : false}
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
                              <DayPickerInput
                                onDayChange={this.handleDate}
                                value={date}
                              />
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
                                value={note}
                              />
                            </div>
                          </div>

                          <br />

                          <div className="form-row">
                            <div className="col-md-12">
                              <label htmlFor="feDate">Past Procedure(s)</label>
                            </div>
                          </div>
                          <div>
                            <div className="col-md-12">
                              <BootstrapTable
                                data={this.state.procedureData}
                                striped
                                hover
                                options={options}
                              >
                                <TableHeaderColumn
                                  isKey
                                  dataField="id"
                                  filter={{ type: "TextFilter" }}
                                >
                                  ID
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                  dataField="name"
                                  filter={{ type: "TextFilter" }}
                                >
                                  Name
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                  dataField="note"
                                  filter={{ type: "TextFilter" }}
                                >
                                  Note
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                  dataField="price"
                                  filter={{ type: "TextFilter" }}
                                >
                                  Price
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                  dataField="date"
                                  filter={{ type: "TextFilter" }}
                                >
                                  Date
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                  dataField="storageID"
                                  filter={{ type: "TextFilter" }}
                                >
                                  Case #
                                </TableHeaderColumn>
                              </BootstrapTable>
                            </div>
                          </div>

                          <br />
                          <div className="form-row">
                            <div className="col-md-12">
                              <label htmlFor="feDate">Add Procedure(s)</label>
                            </div>
                          </div>

                         
                          <div className="form-row" id="procedure">
                            {this.state.procedureList.map(item => (
                              <Procedure
                                key={item.id}
                                id={item.id}
                                isChecked={this.state.procedures.get(item.name)}
                                labelName={item.name}
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
                                Update
                              </button>
                            </div>
                          </div>
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
    );
  }
}

module.exports = SelectedPatient;
