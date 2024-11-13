import './Login.css'
import axios from 'axios';
function Login()
{
    const Check=()=>{
        const user=document.getElementById('user').value;
        const pass=document.getElementById('pass').value;
        if(user&&pass.length>5)
            {
                
                axios.get("http://localhost:3000/User")
                .then((res)=>
                    {
                           const data=res.data;
                           console.log(data);
                           if(data.find(obj => obj.email === user))
                           {
                              let index=data.findIndex(obj => obj.email === user);
                              
                              if(data[index].password === pass)
                              {
                                window.location.href='/home';
                              }
                              else{
                                alert("Invalid password");
                              }
                           }
                           else
                           {
                            alert("User not found");
                            
                           }
                        
                    })
                    .catch((error)=>
                    {
                        console.log(error);
                    })
                
            }
    }
    return(
    <div className='login-container'>
    <div class="square">
    <i style={{color:"#00ff0a;"}}></i>
    <i style={{color:"#ff0057;"}}></i>
    <i style={{color:"#fffd44;"}}></i>
    <div class="login">
        <h2>Login</h2>
        <div class="inputBx">
            <input type="email" id="user" placeholder="Enter Email" required/>
        </div>
        <div class="inputBx">
            <input type="password" id="pass" placeholder="Enter Password" required/>
        </div>
        <div class="inputBx">
            <input type="submit" onClick={Check} value="Sign in"/>
        </div>
        <div class="links">
            <a href="/forgotPassword">Forget Password</a>
            <a href="/register">Signup</a>
        </div>
    </div>
</div>
</div>
    )
}

export default Login;