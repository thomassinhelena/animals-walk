import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

axios.get('http://localhost:3000/Peoples') 
  .then(( response ) => { 
    console.log(response.data);
    console.info(response.data[0].pseudo);
  });
axios.get('http://localhost:3000/Pets') 
  .then(( response ) => { 
    console.log(response.data);
    console.info(response.data[0].name);
  });

function Forms() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data)
    axios.post('http://localhost:3000/Peoples', {
      pseudo: data.pseudo,
      email: data.email,
    })

    axios.post('http://localhost:3000/Pets', {
      birth: data.birth,
      name: data.name,
      sex: data.sex,
    })
  };
  
  return(
<Fragment>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-row">
      <div className="col-md-6 mb-3">
        <label htlmfor="validationServer01">Pseudo</label>
        <input
          name="pseudo"
          type="text" 
          className="form-control is-valid" 
          id="validationServer01"
          onChange={e => {setPseudo(e.target.value);}}
          ref={register({ required: true, maxLength: 30 })}
        />        
      </div>
    </div>
    <div className="col-md-6 mb-3">
        <label htlmfor="validationServer02">Email</label>
        <input
          name="email"
          type="email" 
          className="form-control is-valid" 
          id="validationServer02"
          onChange={e => {setEmail(e.target.value);}}
          ref={register}
        />        
      </div>
    <div className="col-md-6 mb-3">
      <label for="validationServer03">Name</label>
      <input
        name="name"
        type="text" 
        className="form-control is-valid" 
        id="validationServer03"
        onChange={e => {setName(e.target.value);}}
        ref={register} 
      />
      <div className="col-md-6 mb-3">
        <label for="validationServer04">Sex</label>
        <input
          name="sex"
          type="text" 
          className="form-control is-valid" 
          id="validationServer04"
          onChange={e => {setSex(e.target.value);}}
          ref={register}
        />
      </div>
      <div className="col-md-6 mb-3">
        <label for="validationServer05">Birth</label>
        <input
          name="birth"
          type="date" 
          className="form-control is-valid" 
          id="validationServer05"
          onChange={e => {setBirth(e.target.value);}}
          ref={register}
        />
      </div>
        {errors.name && errors.name.type === "required" && <span>This is required</span>}
        {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
      <input 
        type="submit"
      />
    </div>
    </form>
  </Fragment>
)};

export default Forms;