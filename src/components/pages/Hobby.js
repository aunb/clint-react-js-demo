import React, { useEffect } from "react";
import {Link} from 'react-router-dom';

const Hobby = props => {  
  
  return (
    <>
      <div className="row">
          <div className="col-md-12">
              <div className="offset-md-2 col-md-8">
                  <h5 >{props.title}</h5><br />
                  <img src="/img4.jpg" className="header-logo w-100" alt="sparkale" />
              </div>
          </div>
    </div>    
    </>
  );
};

export default Hobby;
