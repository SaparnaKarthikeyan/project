import '../Login/Login.css'
import axios from 'axios';
function Register()
{
    
    const Check=()=>{
        const pass=document.getElementById("pass").value;
        const con=document.getElementById("con").value;
        const user=document.getElementById("user").value;
        axios.get('http://localhost:3000/User')
       .then((res)=>
        {
            const data=res.data;
            const userData=data.find(obj => obj.email === user)
            if(!userData&&pass.length>5)
            {
                
                if(pass===con)
                {
                    axios.post('http://localhost:3000/User',{
                        email:user,
                        password:pass
                    })
                    .then(()=>{
                      window.location.href='/';
                    })
                    .catch(err=> console.log(err))
               }
               else{
                alert("Password Mismatch");
               }
            }
            else
            {
                if(pass.length<=5)
                {
                alert("Password must be at least 6");
                }
                else
                {
                    alert("User already exists");
                }
            }
        })
       .catch((err)=>console.log(err))

    }
    return(
        <div className='login-container'>
    <div class="square">
    <i style={{color:"#00ff0a;"}}></i>
    <i style={{color:"#ff0057;"}}></i>
    <i style={{color:"#fffd44;"}}></i>
    <div class="login">
        <h2>Register</h2>
        <div class="inputBx">
            <input type="text" id="user"placeholder="Username"/>
        </div>
        <div class="inputBx">
            <input type="password" id="pass" placeholder="Set Password"/>
        </div>
        <div className='inputBx'>
            <input type='text' id="con" placeholder='Confirm Password'/>
        </div>
        
        <div class="inputBx">
            <input type="submit" onClick={Check} value="Sign in"/>
        </div>
        <div class="links">
            <p>Have an account?
            <a href="/">Login</a>
            </p>
        </div>
    </div>
</div>
</div>
    )
}

export default Register;