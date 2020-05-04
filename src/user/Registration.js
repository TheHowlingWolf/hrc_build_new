import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signup } from "./helper/userapicalls";

const Registration = () => {
  const [values, setValues] = useState({
    name: "",
    roll: "",
    state: "",
    pro_photo: "",
    about_p: "",
    about: "",
    h1_photo: "",
    hob1: "",
    h2_photo: "",
    hob2: "",
    h3_photo: "",
    hob3: "",
    fun_mem: "Not Needed To Fill Here",
    emb_mem: "Not Needed To Fill Here",
    error: "",
    success: false,
    formData: "",
  });

  const preload = () => {
    //console.log(data);
    setValues({ ...values, formData: new FormData() });
  };

  //We have to call these preload in useEffect() by react Hooks
  useEffect(() => {
    preload();
  }, []);

  //To access above use values.name values.email or destructure it
  const {
    name,
    roll,
    state,
    about,
    hob1,
    hob2,
    hob3,
    fun_mem,
    emb_mem,
    error,
    success,
    formData,
  } = values;

  const handleChange = (name) => (event) => {
    const value =
      name === "pro_photo"
        ? event.target.files[0]
        : name === "about_p"
        ? event.target.files[0]
        : name === "h1_photo"
        ? event.target.files[0]
        : name === "h2_photo"
        ? event.target.files[0]
        : name === "h3_photo"
        ? event.target.files[0]
        : event.target.value;
    var files = event.target.files;
    console.log(files);
    console.log(name);
    //it means we will have a value which is equal to acc to the equality of key condition and if is photo then we will get
    //the name of the file by target.files else we will find the value and save it
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".regSub").disabled = true;
    setValues({ ...values, error: "" });
    signup(formData) //calling signup backend call from auth helper
      .then((data) => {
        console.log("hi");
        if (data.error) {
          // if there is as error show it
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            // if not reset the form to empty fields
            ...values,
            name: "",
            roll: "",
            state: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => {
        console.log("Error in Signup");
      });
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New Account was successfully. Please{" "}
        <Link to="/signin">Login here</Link>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          {successMessage()}
          {errorMessage()}
          <h6 className="text-light font-weight-bold">
            I know this form looks bad but it's saving your IP address ::{" "}
            <span id="ip"></span>
          </h6>
          <p className="lead text-white">
            Please keep yourself away from trouble. Thank you
          </p>
          <form action="">
            <div className="form-group">
              <span className="text-white">ProPic:</span>
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("pro_photo")}
                  type="file"
                  name="pro_photo"
                  accept="image"
                  placeholder="choose a file"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id=""
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Roll</label>
              <input
                className="form-control"
                type="number"
                name="roll"
                id=""
                onChange={handleChange("roll")}
                value={roll}
              />
            </div>
            <div className="form-group">
              <label className="text-light">state</label>
              <input
                className="form-control"
                type="text"
                name="state"
                id=""
                onChange={handleChange("state")}
                value={state}
              />
            </div>
            <div className="form-group">
              <span className="text-white">AboutPic:</span>
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("about_p")}
                  type="file"
                  name="about_p"
                  accept="image"
                  placeholder="choose a file"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="text-light">About You:</label>
              <input
                className="form-control"
                type="text"
                name="about"
                id=""
                onChange={handleChange("about")}
                value={about}
              />
            </div>
            <div className="form-group">
              <span className="text-white">Hobby Pic:</span>
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("h1_photo")}
                  type="file"
                  name="h1_photo"
                  accept="image"
                  placeholder="Hobby 1"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="text-light">Hobby :</label>
              <input
                className="form-control"
                type="text"
                name="hob1"
                id=""
                onChange={handleChange("hob1")}
                value={hob1}
              />
            </div>
            <div className="form-group">
              <span className="text-white">Fun/Emb Pic:</span>
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("h2_photo")}
                  type="file"
                  name="h2_photo"
                  accept="image"
                  placeholder="Hobby 2:"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="text-light">Fun/Emb Text:</label>
              <input
                className="form-control"
                type="text"
                name="hob2"
                id=""
                onChange={handleChange("hob2")}
                value={hob2}
              />
            </div>
            <div className="form-group">
              <span className="text-white">Quarantine Pic:</span>
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("h3_photo")}
                  type="file"
                  name="h3_photo"
                  accept="image"
                  placeholder="Hobby 3:"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="text-light">Quarantine Moment:</label>
              <input
                className="form-control"
                type="text"
                name="hob3"
                id=""
                onChange={handleChange("hob3")}
                value={hob3}
              />
            </div>
            <div className="form-group d-none">
              <label className="text-light">Emb Moment</label>
              <input
                className="form-control"
                type="text"
                name="emb_mem"
                id=""
                onChange={handleChange("emb_mem")}
                disabled
              />
            </div>
            <div className="form-group d-none">
              <label className="text-light">Fun Moment</label>
              <input
                className="form-control"
                type="text"
                name="fun_mem"
                id=""
                onChange={handleChange("fun_mem")}
                disabled
              />
            </div>
            <button
              className="regSub btn btn-success btn-block"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="signup">
      {signUpForm()}

      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </div>
  );
};

export default Registration;
