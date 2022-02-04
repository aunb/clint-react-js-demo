import React,{useEffect} from "react";
import {Link} from 'react-router-dom';
import $ from 'jquery';
const Header = props => {


  useEffect(() => {
    $('.active_link').on('click',function(){
      $('.active_link').removeClass('border-bottom');
       $(this).addClass('border-bottom');
    })
  }, []);

  return (
    <div className="content-wrap">
        <header id="header" className="header has-sticky sticky-jump">
		      <div className="container">
             <nav class="navbar sticky-top navbar-light col-md-10 col-12 p-3">
                <div className="container pr-0" >
                    <div className="col-md-5 col-2 text-center pt-3">
                      <div className="menu-icon"></div>
                      <div className="menu-icon"></div>
                      <div className="menu-icon"></div>
                    </div>
                    <div className="col-md-2 col-3 text-center pt-3 pl--60">
                        <img src="https://web-fixer.com/sparkle/wp-content/uploads/2022/01/logo2.png" className="header_logo header-logo w-40" alt="sparkale" />
                    </div>
                    <div className="col-md-5 col-5 text-right pt-3">
                      <div className="rounded" role="group" aria-label="Basic example">
                        <Link to="/" className="btn-link p-1"><img src="https://img.icons8.com/ios-glyphs/25/000000/search--v1.png" /></Link>
                        <Link to="/" className="btn-link p-1"><img src="https://img.icons8.com/ios/25/000000/shopping-bag--v1.png" /></Link>
                        <Link to="/" className="btn-link p-1"><img src="https://img.icons8.com/ios/25/000000/like--v1.png" /></Link>
                      </div> 
                    </div>
                </div> 
                <div className="col-md-6 offset-md-4 pl-5 pt-3">
                    <div className="rounded" role="group" aria-label="Basic example">
                        <Link className={`active_link ${window.location.pathname=='/clothing'? "border-bottom" :''}`} to="/clothing">Clothing</Link>
                        <Link className={`active_link ${window.location.pathname=='/shoes'? "border-bottom" :''}`} to="/shoes">SHOES</Link>
                        <Link className={`active_link ${window.location.pathname=='/wedding'? "border-bottom" :''}`} to="/wedding">Wedding</Link>
                        <Link className={`active_link ${window.location.pathname=='/hobby'? "border-bottom" :''}`} to="/hobby">Hobbies</Link>
                  </div>
                </div>  
              </nav>           
          </div>
      </header>
    </div>
  );
};

export default Header;
