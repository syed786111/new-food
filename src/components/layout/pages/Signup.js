import React, { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import axios from "axios";
import styles from "../pages/Signup.module.css";
export const Signup = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [user, setUser] = useState({
    name: null,
    file: null,
    data: [],
    name1: "",
    email: null,
    password: null,
  });
  const [subject, setSubject] = useState("welcome email");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessages] = useState("");
  console.log(data);
  const [email1, setEmail1] = useState("sishfaqhussain1974@gmail.com");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setTimeout(() => {
      setUser({ ...user, name: "", email: "", password: "" });
    }, 1000);
  }, []);
  useEffect(() => {}, []);
  const onChangeImg = (event) => {
    setUser({
      ...user,
      name: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  };
  const HandleCancel = () => {
    navigate("/");
  };
  const FetchData = async () => {
    const aa = await axios.get(
      `http://localhost/ReactApps/food-web/UserList.php`
    );
    setData(aa.data);
  };
  useEffect(() => {
    FetchData();
  }, []);
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("sign up submitted");
    const userAlready = data.find((item) => item.email === user.email);

    //FetchData()

    console.log(userAlready);
    if (userAlready) {
      console.log("ishfaq email is duplicated");
      setError(true);
      //setErrorMessages("email addrses is duplicated")
    } else {
      // console.log("firts time email")

      console.log(user.file.name);

      const formData = new FormData();
      formData.append("id", user.id);
      formData.append("name", user.name);
      formData.append("image", user.file);
      formData.append("name1", user.name1);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("data", user.data);
      // let url = "http://localhost/Server.php"
      let url = "http://localhost/ReactApps/food-web/AddUser.php";
      axios.post(url, formData, {}).then((res) => {
        console.log(res.data);
      });

     // window.location.reload(false);

      //emailjs.sendForm('service_45un1qa', 'template_wdhkugw', form.current, 'dkkdslkjhin_wG7bh')
      emailjs
        .sendForm(
          "service_df28ush",
          "template_wdhkugw",
          form.current,
          "dkkdslkjhin_wG7bh"
        )

        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setUser({ ...user, email: "ishfaq", password: "" });
      // navigate("/welcome", { state: { name: user.name1, email: user.email } });
    }
  };

  return (
    <div>
      <div className={styles.signupBox}>
        <div
          className="d-flex flex-column
      text-center
      flex-md-row justify-content-between align-item-center"
        >
          
          <div className={styles.item}>
            <div>{error ? "email address already exists" : ""}</div>
            <form ref={form} onSubmit={HandleSubmit}>
              <table>
                <br />

                <tr>
                  <td>
                    <label htmlFor="name1" className={styles.label}>
                      Name:
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className={styles.input}
                      value={user.name1}
                      id="name1"
                      placeholder="Please enter Your Name"
                      required="true"
                      name="name1"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <br />
                <tr>
                  <td>
                    <label htmlFor="email" className={styles.label}>
                      Email
                    </label>
                  </td>
                  <td>
                    <input
                      type="email"
                      value={user.email}
                      style={{background:"#fff !important"}}
                      className={styles.input}
                      required="true"
                      id="email"
                      placeholder="Please enter Your Email"
                      name="email"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <br />
                <tr>
                  <td>
                    <label htmlFor="password" className={styles.label}>
                      Password
                    </label>
                  </td>
                  <td>
                    <input
                      type="password"
                      value={user.password}
                      className={styles.input}
                      required="true"
                      id="password"
                      placeholder="Please enter Your Password"
                      name="password"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div style={{ marginTop: "20px" }}>
                      {/* <div onClick={SendEmail}>  */}
                      <button type="submit" className={styles.btnSignup}
                      
                      >
                        Save
                        <i class="fa fa-plus"></i>
                      </button>
                      {/* </div>  */}

                      <button
                        onClick={HandleCancel}
                        className={styles.btnCancel}
                      >
                        Cancel
                        <i class="fa-regular fa-circle-xmark"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </table>
            </form>
          </div>

          <div className={styles.item}>
            <label className={styles.label}>Add Your picture</label>
            <input type="file" name="image" onChange={onChangeImg} />

            <img
              src={user.name}
              alt="File preview"
              // width="200px"
              // height="200px"
              className={styles.img}
              style={{height:"100px",width:"100px",borderRadius:"50%"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
