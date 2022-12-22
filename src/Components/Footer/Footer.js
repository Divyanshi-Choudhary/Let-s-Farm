import React from 'react'
import './footer.css'
const Footer = () => {
  return(
    <div className="footer">
<div className="footer_section">
<div className="row one">
        <div className="footer_head">General</div>
        <a href="#">about us</a>
        <a href="#">our shop</a>
        <a href="#">recipes</a>
        <a href="#">blog</a>
    </div>

    <div className="row two">
        <div className="footer_head">Web shop</div>
        <a href="#">delivery information</a>
        <a href="#">return & cancellation</a>
    </div>
    <div className="row three">
        <div className="footer_head">Legal</div>
        <a href="#">terms of use</a>
        <a href="#">terms of purchase</a>
        <a href="#">privacy policy</a>
        <a href="#">modern slavery policy</a>
    </div>
    <div className="row four">
        <div className="footer_head">Contact</div>
        <a href="#">facebook</a>
        <a href="#">instagram</a>
        <a href="#">twitter</a>
        <a href="#">youtube</a>
    </div>
</div>
    </div>
  )
}

export default Footer