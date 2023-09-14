
import {GrNavigate} from 'react-icons/gr'
import './Nav.css' 
import { Link } from 'react-router-dom'
import * as React from 'react';
import { useState } from 'react';

const Navigation = () => {
  const manage = () => {
    console.log("click");
    setViw(!viw);
  }
  const [viw, setViw] = useState(false);
  
  return (
    <div>
      
<GrNavigate className="item"
onClick={manage}
/>
{viw && (
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
  
    </div>
   
  )
}

export default Navigation