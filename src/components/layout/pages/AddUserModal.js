import { red } from "@mui/material/colors";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
//import './FlexBox.css'
import styles from "../pages/AddUserModal.module.css";
import { useRef } from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    borderRadius: "20px",
    background: "skyblue",
    // width:'100%',
    right: "auto",
    width: "60%",
    bottom: "auto",
    // marginRight: '-50%',
    marginLeft: "30px",
    textAlign: "center",

    transform: "translate(-50%, -50%)",
  },
};

export const AddUserModal = (props) => {
  const navigate = useNavigate();
  const form1 = useRef();
  const [user, setUser] = useState({
    name: null,
    file: null,
    data: [],
    name1: "",
    email: "",
    password: "",
  });

  function afterOpenModal(e) {
    props.onAfterOpen(e, "After Modal Opened");
  }

  function onModalClose(event) {
    navigate("/");
   
  }
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setUser({ ...user, name: null, email: null });
  }, []);
  const onChangeImg = (event) => {
    setUser({
      ...user,
      name: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  };
  return (
    <div>
      <div>
        <Modal
          isOpen={props.IsModalOpened}
          onAfterOpen={(e) => afterOpenModal(e)}
          className={styles.modal}
        >
          <div className={styles.wrapper}>
            <div className={styles.item}>
              {props.emailDuplicateError ? (
                <div style={{ border: "2px solid red" }}>
                  {props.emailDuplicateMsg}
                </div>
              ) : (
                ""
              )}
              {/* <div className="col-sm-6 col-md-5"   > */}
              <form
                onSubmit={(event) => props.handleClick(event, user, form1)}
                ref={form1}
              >
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
                        value={user.name1}
                        className={styles.addinput}
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
                      {" "}
                      <input
                        type="email"
                        value={user.email}
                        required="true"
                        className={styles.addinput}
                        style={{ background: "#fff !important" }}
                        id="email"
                        placeholder="Please enetr Your Email"
                        name="email"
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td style={{ textAlign: "left" }}>
                      <label htmlFor="password" className={styles.label}>
                        Password
                      </label>
                    </td>
                    <td>
                      <input
                        type="password"
                        value={user.password}
                        required="true"
                        className={styles.addinput}
                        id="password"
                        name="password"
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button type="submit" className={styles.btnadd}>
                        Save
                        <i class="fa fa-plus"></i>
                      </button>
                      <button
                        onClick={(e) => onModalClose(e)}
                        className={styles.btnaddCancel}
                      >
                        Cancel
                        <i class="fa-regular fa-circle-xmark"></i>
                      </button>
                    </td>
                  </tr>
                </table>
              </form>
            </div>
            {/* <div className= {`col-sm-6 ${styles.col2}`} style={{border:"2px solid blue",borderRadius:"20px"}}> */}

            <div className={`mt-4 mt-md-0 pb-3 ${styles.item}`}>
              <label className={styles.label}>Add Your picture</label>
              <input type="file" name="image" onChange={onChangeImg} />
              <div className="text-center rounded">
                <img
                  src={user.name}
                  alt="File preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
