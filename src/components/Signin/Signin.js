import React from "react";
import "./Signin.css";

class Signin extends React.Component {
    render() {
        return (
        <div>
            <center>
                <div id="headersection">
                    <h1>Online Voting System</h1>
                </div>
                <hr />

                <div id="body section">
                <form>
                        <h1>Login</h1>
                        <input
                            type="text"
                            name="mobile"
                            placeholder="Enter Registration Number"
                        />
                        <br />
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        <br />
                        <br />
                        <br />
                        <p class="text">Select Your Role:</p>
                        <select id="dropbox" name="role">
                            <option value="1">Voter</option>
                            <option value="2">Group</option>
                        </select>
                        <br />
                        <br />
                        <button  id="loginbtn">Login</button>
                        <br />
                        <button > Register here</button>
                        </form>
                </div>
            </center>
        </div>
    )
        }
};

export default Signin;
