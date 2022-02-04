import React, { useEffect } from "react";
import {Link} from 'react-router-dom';

const Hobby = props => {  
  
  return (
    <>
      <div className="row">
          <div className="col-md-12">
              <div className="offset-md-2 col-md-8">
                  <img src="/img4.jpg" className="header-logo w-100" alt="sparkale" /><br /><br />
                  <h5 >{props.title}</h5>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
              </div>
          </div>
    </div>    
    </>
  );
};

export default Hobby;
