import "./header.css"
const Header = () => {
  return (
    <div className="content">
        <div className="logo">
            <h1> &lt;Ivan Reis/ &gt;</h1>
        </div>
        <div> 
            <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="Sobre">Sobre</a></li>
                <li><a href="Contato">Contato</a></li>
                <li><a href="Projetos">Projetos</a></li>
                <li><a href="Login">Login</a></li>
            </ul>

        </div>
    </div>
  )
}

export default Header