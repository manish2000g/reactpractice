import axios from 'axios';
import {useState} from 'react';


const Register = () =>{
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [gender, setGender] = useState('');
    // const [comment, setComment] = useState('');
    const[message, setMessage] = useState('');

    const registerCustomer=(e)=>{
        e.preventDefault();
        const data = {
            fn : firstname,
            ln : lastname,
            age : age,
            email : email,
            password : password,
        }
        axios.post('http://localhost:8080/customer/register', data)
        .then(response=>{
            console.log(response);
            setMessage(response.data.message)
            console.log(response.data.message)
        })
        .catch(e=>{
            console.log(e)
        })
    }

    
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
        
            <h2>!! Register Bitch !!</h2>
            <p>{message}</p>
            {/* <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{age}</p>
            <p>{email}</p>
            <p>{password}</p> */}
            {/* <p>{gender}</p> */}
            <form>
                <div className="form-group">
                    <label>Firstname</label>
                    <input type= "text" className="form-control" onChange={(e)=>setFirstname(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Lastname</label>
                    <input type= "text" className="form-control" onChange={(e)=>setLastname(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type= "text" className="form-control" onChange={(e)=>setAge(e.target.value)} />
                </div>

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
                    
                    <input type= "submit" className="btn btn-dark" onClick={registerCustomer} />
                </div>

               
                {/* <button type="button" class="btn btn-success">Submit</button>  */}

                <div>
                    <label>Comment</label>
                    <textarea onChange={(e)=>setComment(e.target.value)}> </textarea>
                </div> */}
            </form>
            </div>
            </div>
        </div> 

    )
}
export default Register;