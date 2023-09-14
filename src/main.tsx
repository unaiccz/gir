import React from 'react'
import ReactDOM from 'react-dom/client'
 import { router } from './routers'
import { RouterProvider } from 'react-router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
