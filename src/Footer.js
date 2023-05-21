import React from 'react';

const Footer = (props) => {
  return (
    <ooter className={`bg-${props.mode} text-center text-lg-start`}>
      <div className="container p-4" style={{color: props.mode==='dark'?'white':'#1f2327'}}>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Me</h5>

            <p>
              <i className="fa fa-envelope me-3"></i>
              tahrim124@gmail.com
            </p>
            <p>
              <i className="fa fa-phone me-3"></i>
              01941210470
            </p>
            <p>
              <i className="fa fa-home me-3"></i>
              Khilgoan, Dhaka, Bangladesh
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social Media</h5>

            <ul className="list-unstyled mb-0 ">
              <li className="mb-2 mx-5">
                <a href="https://www.facebook.com/majharulislam.tahrim.9/">
                <i class="fa-brands fa-facebook-f fa-xl"></i>
                </a>
              </li>
              <li className='mx-5 mb-2 my 2'>
                <a href="https://github.com/tahrimm">
                <i class="fa-brands fa-github fa-xl"></i>
                </a>
              </li>
              <li className='mx-5 mb-2 my 2'>
                <a href="https://www.linkedin.com/in/majharul-islam-698964262/">
                <i class="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Me</h5>

            <p>
            I am a passionate React developer with a knack for creating stunning web applications.Also I thrive in competitive programming, solving complex problems using efficient data structures and algorithms.</p>
          </div>
        </div>
      </div>
      
    </ooter>
  );
};

export default Footer;
