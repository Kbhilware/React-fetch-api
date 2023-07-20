import { NavLink, Outlet } from "react-router-dom";     
export default function Navbar(props) {
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
               <a className="navbar-brand text-light" href="/">{props.siteName}</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/entertainment">entertainment</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/general">general</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/health">health
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/science">science
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/sports">sports
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/technology">technology</NavLink>
                     </li>
                  </ul>
                  {/* 
         <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button className="btn btn-outline-success" type="submit">Search</button>
         </form>
         */}
               </div>
            </div>
         </nav>
         <Outlet />
      </>
   )
}


