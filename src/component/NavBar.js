import './NavBar.css'

import { Link } from 'react-router-dom'

function NavBar(){
     return (
        <nav>
            <li><Link to ="/">Principal</Link></li>
            <li><Link to ="/about">Quem Somos</Link></li>

        </nav>
     )

}
export default NavBar;