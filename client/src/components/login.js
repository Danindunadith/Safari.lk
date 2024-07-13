import "./loginStyles.css"
import { Link } from "react-router-dom";
function Login (){
    return(

        <>
        <div class="containerlogin">
        <div class="login-boxlogin">
            <h1>Admin Login</h1>
            <form action="#" method="POST">

            <div class="textbox">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your username" />
                </div>

                <div class="textbox">
                    <label for="password">User Name</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                

                <div className="logi">
                <Link to={"/order"} className='addButton'>Login</Link>
                </div>
            </form>
        </div>
    </div>
        
        </>
    )
}

export default Login;