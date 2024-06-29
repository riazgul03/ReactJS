import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <div>
        <h1>This Is My Products Page</h1>
    </div>
    <nav>
        <Link to='shirts'>Shirts</Link>
        <Link to='jeans'>Jeans</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products