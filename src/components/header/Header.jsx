import Nav from "../nav/Nav"
import "./header.css"

const Header = () => {
  return (
    <div className="content">
        <div className="logo">
            <h1>Ivan<span>.dev</span></h1>
        </div>
        <Nav/>
    </div>
  )
}

export default Header