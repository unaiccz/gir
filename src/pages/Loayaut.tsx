import React from 'react'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router'

function Loayaut() {
  return (
    <div>
        <Navigation />
<Outlet/>
<p>foot</p>
    </div>
  )
}

export default Loayaut