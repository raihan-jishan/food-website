import React from 'react'
import "../css/footer.css";
const Footer = () => {
  return (
    <div>
      <section class="footer">

<div class="box-container">

    <div class="box">
        <h3>locations</h3>
        <a href="https://goo.gl/maps/P5cg14hqAbvbfqtT6">india</a>
        <a href="https://goo.gl/maps/YSd5qgRHMmshqwK26">bangladesh</a>
        <a href="/">japan</a>
        <a href="/">russia</a>
        <a href="/">USA</a>
        <a href="/">france</a>
    </div>

    <div class="box">
        <h3>quick links</h3>
        <a href="/">home</a>
        <a href="/#dishes">dishes</a>
        <a href="/#about">about</a>
        <a href="/#menu">menu</a>
        <a href="/#reivew">reivew</a>
        <a href="#order">order</a>
    </div>

    <div class="box">
        <h3>contact info</h3>
        <a href="/">+123-456-7890</a>
        <a href="/">+111-222-3333</a>
        <a href="/"> example@gmail.com</a>
        <a href="/"> example@gmail.com </a>
        <a href="/"> New York - 400104</a>
    </div>

    <div class="box">
        <h3>follow us</h3>
        <a href="/">facebook</a>
        <a href="/">twitter</a>
        <a href="/">instagram</a>
        <a href="/">linkedin</a>
    </div>

</div>

<div class="credit"> copyright {new Date().getFullYear()} by <span> <i className="fas fa-utensils"></i> Resto.</span> </div>

</section>
    </div>
  )
}

export default Footer
