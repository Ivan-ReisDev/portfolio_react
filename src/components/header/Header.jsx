import Nav from "../nav/Nav"
import "./header.css"

const Header = () => {
  return (
    <div className="content">
        <div className="logo">
            <h1> <a href="/">Ivan<span>.dev</span></a></h1>
        </div>
        <Nav/>
    </div>
  )
}

export default Header