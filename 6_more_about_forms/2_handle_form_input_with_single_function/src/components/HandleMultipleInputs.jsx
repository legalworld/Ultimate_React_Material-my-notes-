import { useState } from "react";

const initialFormData = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  address: "",
};

function HandleMultipleInputs() {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ ...initialFormData });
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    address,
  } = formData;

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <div className="formGroup">
        <label htmlFor="firstname">firstName</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          // value={formData.firstName}
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="lastname">lastName</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="username">userName</label>
        <br />
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">password</label>
        <br />
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <input
          type="text"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="phoneNumber">Phone Number</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="address">address</label>
        <br />
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Sign Up" style={{ marginTop: "1rem" }} />
    </form>
  );
}

export default HandleMultipleInputs;

/*

in this video, we going to discuss about how to 
handle multiple inputs in one function...

till now, what we were doing is, for multiple inputs, we have to make multiple states & multiple function handlers.


at first, in this video, we going to use the previous way we learnt, then 
we will discuss that what are all the remaining things we could do,
and both the ways are good.

the new method we gonna learn in this video, we basically use it on input fields where we have to type...
e.g.---> username, email, password, form etc...

but we don't use this new method in radio buttons and checkboxes ...


till now we know that number of state going to be equal to number of input. 
but we not gonna do this. -->
---
  const [firstname, setFirstname] = useState("");
  <input type="text" name="firstname" id="firstname" value={firstname} />
---

what we gonna do is-->

ei method take use korar jonoo state er naam ar input field er id & name er naam same hote hobe.

amra useState er vitor akta object banacchi, tar moddhe
key-value pair use korchi... (destructure kore aro short kore nilam)

onChange er jonoo, onek gula function banacchi na. akta tei kaj hoye jacche...



*/
