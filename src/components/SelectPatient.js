import React, { Component } from 'react'

export class SelectPatient extends Component {
  render() {
    return (
      <div>

          {/* NAVBAR */}
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">SkyHealth</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Select Patient</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">New Prescription</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Drug Database</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reports</a>
                            </li>
                        </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>

            <div className="input-group mb-3" style={{marginLeft:'25%', width:'50%'}}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Patient id</span>
                </div>
                <input type="text" className="form-control" placeholder="Patient id" aria-label="Patientid" aria-describedby="basic-addon1"></input>
                <div className="input-group-append">
                    <button className="input-group-text btn btn-primary" id="basic-addon2"> Search </button>
                </div>               
            </div>
            <div className="input-group mb-3" style={{marginLeft:'25%', width:'50%'}}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Patient Name</span>
                </div>
                <input type="text" class="form-control" placeholder="Patient firstname or lastname" aria-label="Patientid" aria-describedby="basic-addon1"></input>
                <div className="input-group-append">
                    <button class="input-group-text btn btn-primary" id="basic-addon2"> Search </button>
                </div>               
            </div>
            <div className='absoluteCenter'>
                <button 
                onClick={()=>this.props.history.push('/PrescriptionPage')}
                className='btn btn-primary'><i class="fas fa-bed"></i> New Patient </button>
            </div>
        
      </div>
    )
  }
}

export default SelectPatient
