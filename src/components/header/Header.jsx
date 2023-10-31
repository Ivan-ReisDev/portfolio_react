import Nav from "../nav/Nav"
import "./header.css"

const Header = () => {
  return (
    <div className="content">
        <div className="logo">
            <h1> &lt;Ivan Reis/ &gt;</h1>
        </div>
        <Nav/>
    </div>
  )
}

export default Header