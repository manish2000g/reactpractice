import { useEffect, useState } from "react";
import axios from "axios";

const Profileupdate = () =>{
  const [user, setUserdata] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");



    const config = {
        headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }

    const updPro = (e) => {
      e.preventDefault();
      const data = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        email: email,
      };
    };


    axios.put("http://localhost:90/customer/update", data, config)
      .then((result) => {
        console.log(result);
        window.location.replace("/profile");
      })
      .catch((e) => {
        console.log(e);
      });

    

    useEffect(()=>{
        axios.get("http://localhost:90/customer/dashboard",config)
        .then(result=>{
            console.log(result.data.data);
            setFirstname(result.data.data.fn);
            setLastname(result.data.data.ln);
            setAge(result.data.data.age);
            setEmail(result.data.data.email);

        })
        .catch(e=>{
            console.log(e)
        })
    })
    

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Update Profile</h3>
            <form>
              <div className="form-group">
                <label>Firstname</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-dark" value={updPro} />
              </div>

              <div className="form-group">
                <input type="submit" className="btn btn-dark" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Profileupdate;