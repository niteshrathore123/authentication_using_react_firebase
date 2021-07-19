import React, { Component } from 'react'
import { Link, Redirect} from 'react-router-dom'
import {auth} from './firebase'
import '../style.css'
class Login extends Component {
   
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleEmail=(event)=>{
       
        this.setState({
            email: event.target.value,
           
        })
    }

    handlePassword=(event)=>{
        this.setState({
            password: event.target.value,
           
        })
    }
    
    handleSubmit=async(event)=>{
        const {email,password}=this.state
        event.preventDefault();
        console.log(email)
        
        try{
            await auth.signInWithEmailAndPassword(email,password);
            <Redirect to="/home" />
            console.log('Welcome user');
        }
        catch(err){
            console.log(err);
        }
       
    }

    render() {
        return (
            <div className="outer">
                <div className="inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Login Here</h3>
                        <div className="form-group" style={{marginBottom:10}}>
                            <label>Email</label>
                            <input type="email" value={this.state.email} onChange={this.handleEmail} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group"  style={{marginBottom:10}}>
                            <label>Password</label>
                            <input type="password" value={this.state.password} onChange={this.handlePassword} className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit"  className="btn btn-dark btn-lg btn-block" style={{marginTop:24,width:340}}>Login</button>
                        <p className="forgot-password text-right" style={{flex:"left"}}>
                            Don't Have Account <Link to="/signup">SignUp?</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login