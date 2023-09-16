import "./footer.css"

export default function Footer() {
  return (
    <div className='bottom'>
    <div className="topLeft">
    <i className="footerIcon fa-brands fa-square-facebook"></i>
    <i className="footerIcon fa-brands fa-square-twitter"></i>
    <i className="footerIcon fa-brands fa-square-pinterest"></i>
    <i className="footerIcon fa-brands fa-square-instagram"></i>
    </div>
    <div className="topCenter">
      <ul className="topList">
        <li className=' topListItem'>Conditions of Use</li>
        <li className=' topListItem'>Privacy & Policy</li>
        <li className=' topListItem'>Press Room</li>
      </ul>
    </div>
    <div className="topRight">
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  </div>
  )
}
