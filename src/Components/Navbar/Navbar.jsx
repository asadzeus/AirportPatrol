import './Navbar.css'
import logo from "../../Assets/vatandaşlıkbelgesi.png"


const Navbar = ({money}) => {

  return (
    <div className='navbar'>
        <div className="navbar-contanier">
            <div className="left">
                <div><img className="logo-img" src={logo} alt="" /></div>
                <div className="logo-txt">Airport Patrol</div>
            </div>
            <div className="right">
                <div className="money">{money} $</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar