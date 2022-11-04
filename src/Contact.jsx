import React from 'react'
import "./Style/Contact.css"

const Contact = () => {
  return (
    <>
    <form action = "https://formspree.io/f/mvoyvyvy" method = "POST" className = "contact-inputs">
    <div class="mb-3">
  <label for="Input1" class="form-label">First Name</label>
  <input type="text" class="form-control" id="Input1"name= "first Name" placeholder="First Name"/>
  <label for="Input12" class="form-label">Last Name</label>
  <input type="Lname" class="form-control" id="Input2" placeholder="Last Name" name = "Last Name"/>
  <label for="Input12" class="form-label">Mobile Number</label>
  <input type="number" class="form-control" id="Input3" placeholder="Enter The Mobile No" name = "Phone Number"/>
  <label for="Input3" class="form-label">Email address</label>
  <input type="email" class="form-control" id="Input4" placeholder="Enetr the Email" name = "Email"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name = "textarea" rows="3"></textarea>
  <button type="submit" value="send" class="btn btn-info">Submit</button>
</div>

    </form>
    </>
  )
}

export default Contact