import React, { Fragment } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Forms = () => {
  return(
<Fragment>
  <form>
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="validationServer01">Pseudo</label>
        <input type="text" class="form-control is-valid" id="validationServer01" required />        
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" class="form-control is-valid" id="validationServer02" required />
    </div>
    </form>
    <button class="btn btn-primary" type="submit">Submit form</button>
    </Fragment>
  )};

export default Forms;