import React from "react";
import "./Register.css";

const Register = () => {
    return (
        <div>
            <center>
                <div id="headersection">
                    <h1 style={{ color: "#371B58" }}>Online Voting System</h1>
                </div>
                <hr />
                <form id="form_id" method="POST">
                    <h1 style={{ color: "#371B58" }}>Registration</h1>
                    <input type="text" name="name" placeholder="Enter Name" />
                    <br />
                    <br />
                    <input
                        type="text"
                        name="mobile"
                        id="reg_no"
                        placeholder="Enter Registration Number"
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="pass"
                        placeholder="Enter Password"
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        name="cpassword"
                        placeholder="Confirm Password"
                    />
                    <br />
                    <br />
                    <input
                        id="address"
                        type="text"
                        name="address"
                        placeholder="Enter branch"
                    />
                    <br />
                    <br />
                    <p class="text">Select Your Role:</p>
                    <select id="dropbox" name="role">
                        <option value="1">Voter</option>
                        <option value="2">Group</option>
                    </select>
                    <br />
                    <br />
                    <button id="loginbtn">Register</button>
                    <br />
                    <br />
                    <p class="text">Already User?</p>
                    <a href="../index.html">login here</a>
                </form>
            </center>
        </div>
    );
};

export default Register;
