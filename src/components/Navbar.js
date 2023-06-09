import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../DishLogo.png';
import '../App.css';

function Navbar() {
    const result = useSelector(state=>state.wishlist) //array of Json objects with dup  [{},{}]
  
        const uniqueResult = new Set(result.map(JSON.stringify));  //unique result but in set of strings ( by json.stringify)  
        const uniqueResultArray = Array.from(uniqueResult); 
        const wishlist = uniqueResultArray.map(JSON.parse)
        const count = wishlist.length;

        // ref :  https://javascript.plainenglish.io/the-easy-way-to-create-a-unique-array-of-json-objects-in-javascript-5634254b17aa
    
  
  
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    
                    <img id="logo" src={logo} alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to="/">Home</Link>
                            </li>
                            <li>
                                <Link className='nav-link' to="/about" >About Us </Link>
                            </li>
                            <li>
                                <Link className='nav-link btn  position-relative' to="/wishlist" > Wishlist <i class="fa-solid fa-bookmark"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {count}
                                    </span>
                                </Link>
                                
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;



