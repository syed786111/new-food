
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'
export const NavBar = ({logout}) => {
    const [changeNav, setChangeNav] = useState(false);
    let user = localStorage.getItem("admin");
    console.log("userFrom local storage", user);
  const navigate = useNavigate();
  const HandleLogout = () => {
        navigate("login");
  };
  const GoShopping = () => {};
  const Shopping1 = () => {
    navigate({
      pathname: "/shopping1",
      search: "?limit=5&&offset=0",
    });
  };
  const ShoppingReducer = () => {
    // navigate("/listproduct")  //genuine
    navigate("/listtransactions");

    
  };
  const OrderList = () => {
    navigate({
      pathname: "/orderlist1",
      search: "?limit=5&&offset=0",
    });
  };
  const ListTransactions = () => {
    navigate({
      pathname: "/listtransactions",
      search: "?limit=5&&offset=0",
    });
  };
  const ListTransactionsNew = () => {
    navigate({
      pathname: "/listtransactionsnew",
      search: "?limit=5&&offset=0",
    });
  };
  const AddProduct = () => {
    navigate("/addproduct");
  };
  
  return (
    <div>
      {user ? (
        <>
          
<nav className="navbar navbar-expand-lg navbar-light text-white pe-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src="/images/logo.png" alt="ff" height="50" width="50" />
    </a>
    <div>
    <button className="navbtn " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
      <i
                      className={changeNav ? "fa fa-times " : " fa fa-bars "}
                     
                      onClick={() => {
                        setChangeNav(!changeNav);
                      }}
                    ></i>
    </button>
    </div>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex  w-100 justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About1">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"
           href="/Contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"
           href="/Signup">Sign up</a>
        </li>
        
        <li className=" dropdown ">
          <a className="text-white dropdown-toggle" href="#" role="button"
           data-bs-toggle="dropdown" aria-expanded="false">
            Shop here
          </a>
          <ul className="dropdown-menu">
            <li onClick={AddProduct}><a className="dropdown-item" href="#">Add Product</a></li>
            <li onClick={Shopping1}><a className="dropdown-item" href="#">Shop Now</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li onClick={OrderList}><a className="dropdown-item" href="#">Order List</a></li>
          </ul>
        </li>
        <li className="nav-item"  onClick={HandleLogout}>
          <a className="nav-link" 
          onClick={logout}
          >SignIn</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" 
          onClick={ListTransactionsNew}
          >Shop Now</a>
        </li>
        <li className="nav-item" onClick={HandleLogout}>
          <a className="nav-link" 
          onClick={logout}
          >Sign Out</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
        </>):
        (
            <>
              
<nav className="navbar navbar-expand-lg  text-white pe-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src="/images/logo.png" alt="ff" height="50" width="50" />
    </a>
    <div>
    <button className="navbtn " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
      <i
                      className={changeNav ? "fa fa-times " : " fa fa-bars "}
                     
                      onClick={() => {
                        setChangeNav(!changeNav);
                      }}
                    ></i>
    </button>
    </div>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex  w-100 justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About1">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"
           href="/Contact">Contact</a>
        </li>
        
        <li className="nav-item dropdown ">
          <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop here
          </a>
          <ul className="dropdown-menu">
            {/* <li onClick={AddProduct}><a className="dropdown-item"
             href="#">Add Product</a></li> */}
            <li onClick={Shopping1}><a className="dropdown-item" href="#">Shop Now</a></li>
            {/* <li><hr className="dropdown-divider" /></li> */}
            {/* <li onClick={OrderList}><a className="dropdown-item" href="#">
                Order List</a></li> */}
          </ul>
        </li>
        <li className="nav-item"  onClick={HandleLogout}>
          <a className="nav-link" 
          onClick={logout}
          >SignIn</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" 
          onClick={ListTransactionsNew}
          >Shop Now</a>
        </li>
        <li className="nav-item" onClick={HandleLogout}>
          <a className="nav-link" 
          onClick={logout}
          >Sign Out</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
            </>
        )
    }
    </div>
)
}   
      
                


    
  



