/* eslint-disable */
const React = require("react");
const Procedure = require("./Procedure.jsx");
const jquery = require("jquery");
const Patient = require("./Patient");

const $ = jquery;

var patientObj = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  price: "",
  date: "",
  note: ""
};
var procedures = [
  {
    key: "p1",
    prokey: "prokey1",
    prikey: "prikey1",
    labelName: "Botox"
  },
  {
    key: "p2",
    prokey: "prokey2",
    prikey: "prikey2",
    labelName: "Filler"
  },
  {
    key: "p3",
    prokey: "prokey3",
    prikey: "prikey3",
    labelName: "PRP"
  },
  {
    key: "p4",
    prokey: "prokey4",
    prikey: "prikey4",
    labelName: "Mesotherapy"
  },
  {
    key: "p5",
    prokey: "prokey5",
    prikey: "prikey5",
    labelName: "Laser Ruby"
  },
  {
    key: "p6",
    prokey: "prokey6",
    prikey: "prikey6",
    labelName: "Laser Er YAG"
  },
  {
    key: "p7",
    prokey: "prokey7",
    prikey: "prikey7",
    labelName: "Laser IPL"
  },
  {
    key: "p8",
    prokey: "prokey8",
    prikey: "prikey8",
    labelName: "Fat graft Face"
  },
  {
    key: "p9",
    prokey: "prokey9",
    prikey: "prikey9",
    labelName: "Fat graft Hand"
  },
  {
    key: "p10",
    prokey: "prokey10",
    prikey: "prikey10",
    labelName: "Fat graft breast"
  },
  {
    key: "p11",
    prokey: "prokey11",
    prikey: "prikey11",
    labelName: "Fat graft buttock"
  },
  {
    key: "p12",
    prokey: "prokey12",
    prikey: "prikey12",
    labelName: "Fat graft leg"
  },
  {
    key: "p13",
    prokey: "prokey13",
    prikey: "prikey13",
    labelName: "Body contouring"
  },
  {
    key: "p14",
    prokey: "prokey14",
    prikey: "prikey14",
    labelName: "Upper blepharoplasty"
  },
  {
    key: "p15",
    prokey: "prokey15",
    prikey: "prikey15",
    labelName: "Lower blepharoplasty"
  },
  {
    key: "p16",
    prokey: "prokey16",
    prikey: "prikey16",
    labelName: "Brow lift"
  },
  {
    key: "p17",
    prokey: "prokey17",
    prikey: "prikey17",
    labelName: "Face lift"
  },
  {
    key: "p18",
    prokey: "prokey18",
    prikey: "prikey18",
    labelName: "Rhinoplasty"
  },
  {
    key: "p19",
    prokey: "prokey19",
    prikey: "prikey19",
    labelName: "Mammoplasty augmentation"
  },
  {
    key: "p20",
    prokey: "prokey20",
    prikey: "prikey20",
    labelName: "Mammoplasty Reduction"
  },
  {
    key: "p21",
    prokey: "prokey21",
    prikey: "prikey21",
    labelName: "mammoplasty Liposuction"
  },
  {
    key: "p22",
    prokey: "prokey22",
    prikey: "prikey22",
    labelName: "Abdominoplasty"
  },
  {
    key: "p23",
    prokey: "prokey23",
    prikey: "prikey23",
    labelName: "Liposuction"
  },
  {
    key: "p24",
    prokey: "prokey24",
    prikey: "prikey24",
    labelName: "Otoplasty"
  }
];

class AddPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientObj: {
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        price: "",
        gender: "",
        date: "",
        note: ""
      },
      procedures: new Map()
    };

    this.handleChange = this.handleChange.bind(this);
    this.createPatient = this.createPatient.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleProCheckbox = this.handleProCheckbox.bind(this);

    this.handleUploadingPictures = this.handleUploadingPictures.bind(this);
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
    const patientObj = this.state.patientObj;
    var name = this.handleGender(event.target);
    patientObj[name] = event.target.value;
    this.setState({
      patientObj: patientObj
    });
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

  handleUploadingPictures() {
    debugger;
    var files = $("#procedureImages")[0].files;
    for (var i = 0; i < files.length; i++) {
      fs.copy(files[i].path, `${documentPath}${files[i].name}`)
        .then(() => console.log("success!"))
        .catch(err => console.error(err));
      console.log(files[i].name);
    }
  }

  createPatient(e) {
    e.preventDefault();

    for (const item of this.state.procedures) {
      var key = item[0];
      var number = key[key.length - 1];

      var prokey = `prokey${number}`;
      var prikey = `prikey${number}`;

      var proValue = $(`#${prokey}`).val();
      var priValue = $(`#${prikey}`).val();

      this.state.procedures.get(key)["note"] = proValue;
      this.state.procedures.get(key)["price"] = priValue;
    }
    
    var files = $("#procedureImages")[0].files;

    //create a patient dir by date
    var patient = new Patient(this.state.patientObj, this.state.procedures, files);
    patient.getNewID();
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
                              <input
                                type="text"
                                className="form-control"
                                id="feDate"
                                name="date"
                                placeholder="Date"
                                onChange={this.handleChange}
                                value={new Date().toDateString()}
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
                              />
                            </div>
                          </div>

                          <hr />

                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="feDate">Date</label>
                              <input
                                type="text"
                                className="form-control"
                                id="feDate"
                                name="date"
                                placeholder="Date"
                                onChange={this.handleChange}
                                value={new Date().toDateString()}
                              />
                            </div>
                          </div>

                          <div className="form-row">
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
                            <input type="file" id="procedureImages" multiple />
                          </div>

                          <button type="submit" className="btn btn-accent">
                            Create
                          </button>
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

module.exports = AddPatient;
