import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export const Navbar = () => {
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem('user')
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={ '/'}>
            <img src={require('../Assets/logo.png')} height='40px' width='80px' alt="Loading" />
        </Link>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex float-right">
            {!localStorage.getItem("token") ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item m-1 p-2">
                  <Link  className="nav-link" to={"/login"}>
                    {" "}
                    Login
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item m-1 p-2">
                  <Link className="nav-link" aria-current="page" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item m-1 p-2">
                  <Link className="nav-link" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item m-1 p-2">
                  <button className="nav-link" onClick={logoutHandler}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};
