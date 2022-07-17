import axios from 'axios';
import {useState} from 'react';


const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const customerLogin = (e) =>{
        e.preventDefault();
        const data ={
            email : email,
            password : password,
        }
        axios.post('http://localhost:8080/customer/login',data)
        .then(response =>{
            console.log(response.data.token);
            if(response.data.token){
                ////login success
                localStorage.setItem('token', response.data.token);
            }
            else{
                /////login failed
                setMessage("Invalid Login Credentials")
            }
        })
        .catch()

    }
        
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
        
            <h2>!! Login !!</h2>

            <p>{message}</p>
            
            
            <form>          

                <div className="form-group">
                    <label>Email</label>
                    <input type= "text" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type= "text" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <br>
                </br>

                <div className="form-group">
                    
                    <input type= "submit" className="btn btn-dark" onClick={customerLogin}/>
                </div>

                            
            </form>
            </div>
            </div>
        </div> 

    )
}
export default Login;