import Nav from "../nav/Nav"
import { useEffect, useState } from "react"
import "./header.css"

const Header = () => {
  const [scroled, setScroled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if(scrollTop > 100) {
        setScroled(true);
      } else {
        setScroled(false);
      }
    }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
  }, [])

  return (
    <div className={scroled ? "content activeScroll" : "content" }>
        <div className="logo">
            <h1> <a href="/">Ivan<span>.dev</span></a></h1>
        </div>
        <Nav/>
    </div>
  )
}

export default Header