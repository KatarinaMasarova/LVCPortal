import React from 'react';
 
class Registration extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="form-wrapper col-12 col-sm-9 col-md-8 col-lg-5">
              <h3 className="text-center mb-3">Registration Form</h3>
              <form>
                  <div className="mb-3">
                    <label for="reg_name" className="form-label">Name *</label>
                    <input type="text" className="form-control" id="reg_name" required/>
                  </div>
                  <div className="mb-3">
                    <label for="reg_email" className="form-label">Email *</label>
                    <input type="email" className="form-control" id="reg_email" required />
                  </div>
                  <div className="mb-3">
                    <label for="reg_phone" className="form-label">Mobile number *</label>
                    <input type="text" className="form-control" id="reg_phone" required/>
                  </div>
                  <div className="mb-3">
                    <label for="reg_designation" className="form-label">Designation</label>
                    <input type="text" className="form-control" id="reg_designation" />
                  </div>
                  <div className="mb-3">
                    <label for="reg_location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="reg_location" />
                  </div>
                  <div className="mb-3">
                    <label for="reg_course" className="form-label">Course *</label>
                    <select className="form-select" id="reg_course" required>
                      <option value=''>Select a course</option>
                      <option value="1">MEAN</option>
                      <option value="2">MERN</option>
                      <option value="3">Java</option>
                      <option value="4">DevOps</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="reg_remarks" className="form-label">Remarks</label>
                    <textarea className="form-control" id="reg_remarks" />
                  </div>
                  {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div> */}
                  {/* <label for="inputPassword5" className="form-label">Password</label>
                  <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" /> */}
                  <div className="ta-center">
                  <button type="submit" className="btn btn-success">Submit</button></div>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default Registration;