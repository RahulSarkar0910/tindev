import React from "react";
import "./css/Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
             <div className="container1">
                <div className="grid-1">
                    <div className="grid-1-1">
                        <p>t i n D E V</p>
                        <sup>Already registered?Login <Link to="/Signin">here</Link></sup>
                    </div>
                        <div className="grid-1-2">
                            <h1><i>REGISTER</i></h1>
                            <sup>Create an account to continue</sup><br></br><br></br>
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                    <label class="form-check-label" for="exampleCheck1">I agree to the terms and conditions </label>
                                </div>
                                <button type="submit" class="btn btn-primary">SIGN UP</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Signup;