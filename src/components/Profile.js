import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'rea'

const Profile = ()=>{
    const [image, setImage] = useState("");
    const [userdata, setUserdata] = useState({});

    const config = {
        headers:{
            Authorization: "Bearer "+ localStorage.getItem("token")
        }
    }

    const updateProfile = (e)=>{
        e.preventDefault();
        const config = {
            headers:{
                Authorization: "Bearer "+ localStorage.getItem("token")
            }
        }

        const profilePic = new FormData();
        profilePic.append("pic", image);

        axios.put('http://localhost:90/customer/picture/update', profilePic, config)
        .then(result=>{
            console.log(result)
        })
        .catch(e=>{
            console.log(e)
        })
    }

    useEffect(()=>{
        axios.get("http://localhost:90/customer/dashboard",config)
        .then(result=>{
            console.log(result.data.data);
            setUserdata(result.data.data);
        })
        .catch(e=>{
            console.log(e)
        })
    })

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input type="file" className="form-control-file" onChange={(e)=>setImage(e.target.files[0])} />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-dark" onClick={updateProfile}/>
                        </div>
                    </form>
                </div>
                <div col-md-6>
                    <p><img src={'http://localhost:90'+ userdata.picture} className="img-thumbnail" /> </p>
                    <p>Name: {userdata.fn} {userdata.ln}</p>
                    <p>Email: {userdata.email}</p>
                    <p>Age: {userdata.age}</p>

                    <p><Link to="/updateProfile">Update Profile</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Profile;