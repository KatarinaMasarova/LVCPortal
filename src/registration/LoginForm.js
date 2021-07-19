import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    username: '',
    email: '',
    pass: '',
    confPass: '',
    roll_no: null,
    errormessageNam: '',
    errPass: ''
    };
    }

    myChangeHandler = (evt) => {
        // let nam = event.target.name;
        // let val = event.target.value;
        // let err = '';

        // if (val == "" || val.length < 10) {
        //     err = <strong>Name should be at least 10 chars long.</strong>;
        // }

        // let pass = event.target.pass;
        // let confPass = event.target.conf-pass;


        // if (pass !== confPass) {
        //     this.setState({errPass: 'Passwords dont match.'});
        // }

        // this.setState({errormessage: err});
        // this.setState({[nam]: val});

            this.setState({ [evt.target.name]: evt.target.value });

            let errNam;
            let errPass;

            if (this.state.username == "" || this.state.username.length < 10) {
                errNam = <strong>Name should be at least 10 chars long.</strong>;
            }
            
            // if (this.state.pass !== this.state.confPass) {
            //     console.log(this.state.pass);
            //     errPass = <strong>Passwords dont match.</strong>;
            // }
            
            this.setState({errormessagePass: errPass, errPass: errPass});
    }

    submitHandler = event => {
        
        if (this.state.username === '') {
            alert('Please, fill your name');
        }
        else {
            alert('Your details: Name: ' + this.state.username + ' email: ' + this.state.email);
        }
    }

        render() {
            return (
            // <form name="form" onSubmit={this.submitHandler}>
            //     <div className='card' style={{BackgroundColor:'green',color:'gray'}}>  
            //         <h1>Hello {this.state.username} </h1>
            //         <p>Your name:</p>
            //         <input type='text' name='username' onChange={this.myChangeHandler}  className="form-control"/>
            //         {this.state.errormessage}<br/>
            //         <p>Email:</p>
            //         <input type='email' name='email' required onChange={this.myChangeHandler} className="form-control"/>
      
            //         <p>Password:</p>
            //         <input type='password' name='pass' required onChange={this.myChangeHandler} className="form-control"/>
            //         <p>Password again:</p>
            //         <input type='password' name='confPass' required onChange={this.myChangeHandler} className="form-control"/>
            //         {this.state.errPass}<br/>
            //         <input type = "submit" value = "Submit" className="btn btn-primary"/>
            //     </div>
            // </form>
            <div className="card form-wrapper">
                <form name="form" onSubmit={this.submitHandler}>
                    <div className='form-group' style={{BackgroundColor:'green',color:'gray'}}>  
                        <h1>Hello {this.state.username} </h1>
                        <p>Your name:</p>
                        <input type='text' name='username' onChange={this.myChangeHandler}  className="form-control"/>
                        {this.state.errormessageNam}<br/>
                        <p>Email:</p>
                        <input type='email' name='email' required onChange={this.myChangeHandler} className="form-control"/>
        
                        <p>Password:</p>
                        <input type='password' name='pass' required onChange={this.myChangeHandler} className="form-control"/>
                        <p>Password again:</p>
                        <input type='password' name='confPass' required onChange={this.myChangeHandler} className="form-control"/>
                        {this.state.errPass}<br/>
                        <input type = "submit" value = "Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
            );
            }
            }

            export default LoginForm;