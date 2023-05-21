import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode ==='dark'?'white':'##1f2327',
        backgroundColor: props.mode ==='dark'?'#1f2327':'white', 
    }
  return (
    <div>
      <div className="container" style={myStyle}>
      <div className="row">
        <div className="col-md-6">
          <img src={require('./images/1.png')} alt="Profile" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="lead">Welcome to my website! I am a passionate React developer with a knack for creating stunning web applications. With a deep understanding of Bootstrap CSS and React JS, I bring a seamless blend of aesthetics and functionality to my projects.This tool empowers users to manipulate text efficiently, including tasks like extracting emails, converting case, and removing spaces and new lines.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>Beyond my expertise in frontend development, I thrive in competitive programming, solving complex problems using efficient data structures and algorithms. This enables me to craft robust and optimized solutions.I am also well-versed in SQL, empowering me to seamlessly integrate and manipulate data in databases. My goal is to create exceptional user experiences through clean code and innovative designs. Whether it's building a responsive website or optimizing performance, I am dedicated to delivering high-quality solutions that exceed expectations.</p>
        </div>
        <div className="col-md-6">
          <img src={require('./images/2.png')} alt="Additional Image" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>
  )
}
