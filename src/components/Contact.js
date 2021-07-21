import React from 'react';
 
class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  inputHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // if (name === "name") {
    //   if (!value) {
    //     alert("Name should not be empty");
    //   }
    // }
    this.setState({[name]: value});
  }

  // submitHandler = e => {                    // toto nefunguje tak ako by malo
  //   if(this.state.name === '') {
  //     alert('Name should not be empty.');
  //     return false;
  //   }
  // }

  render() {
    return (
      <div className="main">
        <div className="container-fluid">

          <div className="row justify-content-center">
            <div className="form-wrapper col-12 col-sm-9 col-md-7 col-lg-4">
              <h3 className="text-center mb-3">Contact Us</h3>
              <form onSubmit={this.submitHandler}>
                  <div className="mb-3">
                    <label for="contact_name" className="form-label">Name *</label>
                    <input type="text" className="form-control" id="contact_name" required name="name" onChange={this.inputHandler}/>
                  </div>
                  <div className="mb-3">
                    <label for="contact_email" className="form-label">Email *</label>
                    <input type="email" className="form-control" id="contact_email" name="email" required onChange={this.inputHandler}/>
                  </div>
                  <div className="mb-3">
                    <label for="contact_phone" className="form-label">Mobile number *</label>
                    <input type="text" className="form-control" id="contact_phone" name="phone" required onChange={this.inputHandler}/>
                  </div>
                  <div className="mb-3">
                    <label for="contact_designation" className="form-label">Designation</label>
                    <input type="text" className="form-control" id="contact_designation" name="designation" />
                  </div>
                  <div className="mb-3">
                    <label for="contact_location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="contact_location" name="location" />
                  </div>
                  <div className="mb-3">
                    <label for="contact_remarks" className="form-label">Remarks</label>
                    <textarea className="form-control" id="contact_remarks" name="remarks" />
                  </div>
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
 
export default Contact;