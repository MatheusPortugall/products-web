import logo from '../../assets/img/logo-meli.png'
import InputSearch from '../InputSearch'

function Header() {
    return (
      <div className="header">
        <img src={logo} />
        <InputSearch />
      </div>
    )
  }
  
  export default Header
  