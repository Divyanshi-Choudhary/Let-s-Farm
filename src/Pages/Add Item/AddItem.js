import React from 'react'
import './additem.css'

const AddItem = () => {
  
  return (
<>
<div className="registration">
  <div className="main_heading">
    <span>add item</span>
  </div>
  <form action="">
    <div className="media_section">
      <div className="img_upload">
        <div className="large_img_box">
          Upload Image
        </div>
      </div>
      
    </div>
    <div className="detail_section">
      <div className="name_group">
        <div className="title">
         Item Name
        </div>
        <div className="name_input">
          <input type="text" placeholder="Item Name" />        
        </div>
      </div>
      <div className="address_group">
        <div className="title">
          Description
        </div>
        <div className="name_input">
          <input type="text" placeholder="Item Name" />        
        </div>
      </div>
      
      <div className="contact_group">
        <div className="title">
          Price
        </div>
        <div className="contact_input">
        <input type="text" placeholder="Selling Price"/>
        <input type="text" placeholder="Cost Price"/>
        </div>
      </div>
      <div className="contact_group">
        <div className="title">
          Product Details
        </div>
        <div className="contact_input">
        <input type="text" placeholder="Minimum Quantity"/>
        <select type="" placeholder="Email">
            <option value="default">Choose Category</option>
            <option value="vegetable">Vegetables</option>
            <option value="fruits">Fruits</option>
            </select>
        </div>
      </div>
      <div className="register_button">
        <div className="cancel_btn">Cancel</div>
       <div className="submit_btn">Add Item</div>
      </div>
    </div>
  </form>

</div>
</> 
  )
}

export default AddItem