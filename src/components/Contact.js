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

          <div className="row justify-content-evenly">
            <div className="col form-wrapper col-12 col-sm-9 col-md-7 col-lg-4">
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
            
            <div className="map col-12 col-sm-2 col-md-4 col-lg-7">
              <div className="contact-info">
                <h3>Contact information</h3>
                <p className="fw-bold">Address:</p>
                <p className="lh-sm mb-0">2880 Broadway</p>
                <p className="lh-sm mb-0">New York, NY 10025</p>
                <p className="lh-sm">USA</p>

                <p className="mb-0"><a href="mailto:email@email.com">email@email.com</a></p>
                <p className="mb-3"><a href="tel:01234567">01234567</a></p>
              </div>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
              </div>  
            </div>
          </div>


        </div>
      </div>
    )
  }
}
 
export default Contact;