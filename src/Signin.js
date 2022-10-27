import React from 'react';

const Signin = () => {
  return (
    <div>
    <center>
        <div id="headersection">
            <h1>Online Voting System</h1>
        </div>
        <hr/>

        <div id="body section">
            <form action="api/login.php" method="POST">
                <h1>Login</h1>
                <input type="text" name="mobile" placeholder="Enter Registration Number"/><br/><br/>
                <input type="password" name="password" placeholder="Enter Password"/><br/><br/><br/>
                <p class="text">Select Your Role:&nbsp; &nbsp;</p><select id="dropbox" name="role">
                    <option value="1">Voter</option>
                    <option value="2">Group</option>
                </select><br/><br/>
                <button id="loginbtn">Login</button><br/>
                <p class="text">New user? &nbsp; </p><a href="routes/register.html"> Register here</a>
            </form>
        </div>
    </center>
    </div>
  )
}

export default Signin;