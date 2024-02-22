import './App.css'
import myImage from './Image/img1.jpg'

function Header() {
    return (
      <div className="header">
        <img src={myImage} alt="" />
        <h2 className='name'>Shivendra Thakur</h2>
        <h5 className='role'>React Developer</h5>
        <div className="btns">
            <button className='email'><a href="">Email</a></button>
            <button className='linkedin'><a href="">LinkedIn</a></button>
        </div>
      </div>
    )
  }
  
  export default Header