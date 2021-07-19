import React, { Component } from 'react'
import {auth} from './firebase'
import { Redirect} from 'react-router-dom'
class Signup extends Component {
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
        
        try{
            auth.createUserWithEmailAndPassword(email,password);
            <Redirect to="/login" />
            console.log("Account created successfully");
        }
        catch(err){
            console.log(err);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="outer">
                <div className="inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>SignUp Here</h3>
                        <div className="form-group" style={{marginBottom:10}}>
                            <label>Email</label>
                            <input type="email" value={this.state.email} onChange={this.handleEmail} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group" style={{marginBottom:10}}>
                            <label>Password</label>
                            <input type="password" value={this.state.password} onChange={this.handlePassword} className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-dark btn-block" style={{marginTop:24,width:340}}>SignUp</button>
                        
                    </form>
                </div>
            </div>
        )
    }
}


export default Signup