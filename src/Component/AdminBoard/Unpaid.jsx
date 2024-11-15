import React from 'react'

const Unpaid = () => {
  return (
    <form class="row g-3 paddinglogin">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Payment Name</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Payment Name"/>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Payment Name</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="Ex: January 2024"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Find</button>
  </div>
</form>
  )
}

export default Unpaid