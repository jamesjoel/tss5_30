import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthService, ClearToken } from '../../../../services/AuthService';

const Header = () => {
    

  return (
    <>
     <div className="hero_area">
            <div className="bg-box">
            <img src="/assets/images/hero-bg.jpg" alt="" />
        </div>
    
        <header className="header_section">
        <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
                <span>
                Feane
                </span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mx-auto ">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                {
                    AuthService() ? <AfterLogin /> : <BeforeLogin />
                }
                

                
                </ul>
                <div className="user_option">
                <a href="" className="user_link">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </a>
                <a className="cart_link" href="#">
                    
                </a>
                <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
                <a href="" className="order_online">
                    Order Online
                </a>
                </div>
            </div>
            </nav>
        </div>
        </header>
  
        <section className="slider_section ">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container ">
                <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                        <h1>
                        Fast Food Restaurant
                        </h1>
                        <p>
                        Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                        </p>
                        <div className="btn-box">
                        <a href="" className="btn1">
                            Order Now
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="carousel-item ">
                <div className="container ">
                <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                        <h1>
                        Fast Food Restaurant
                        </h1>
                        <p>
                        Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                        </p>
                        <div className="btn-box">
                        <a href="" className="btn1">
                            Order Now
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container ">
                <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                        <h1>
                        Fast Food Restaurant
                        </h1>
                        <p>
                        Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                        </p>
                        <div className="btn-box">
                        <a href="" className="btn1">
                            Order Now
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="container">
            <ol className="carousel-indicators">
                <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
            </div>
        </div>

        </section>

        </div>
    </>
  )
}



let BeforeLogin = ()=>{
    return(
        <>
            <li className="nav-item active">
                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
        </>
    )
}
let AfterLogin = ()=>{
    let navigate = useNavigate();

    let Logout = ()=>{
        console.log("*****************");
        ClearToken();
        navigate("/login");
    }
    return(
        <>
            <li className="nav-item active">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/profile/changepassword">Change Password</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" onClick={Logout}>Logout</NavLink>
                </li>
        </>
    )
}

export default Header