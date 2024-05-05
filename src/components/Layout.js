import React from 'react'
import Sidebar from './Sidebar.js'
const Layout = ({children}) => {
  return (
    <div>
      <React.Fragment>
        <div class="columns">
            <div class="column is-2">
                <Sidebar/>
            </div>
            <div class="column has-background-light">
                <main class="mt-5">{children}</main>
            </div>
        </div>
      </React.Fragment>
    </div>
  )
}
export default Layout;