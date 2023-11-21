import React from 'react'
import './App.css'
import img from './login/image/img.jpg'
const App = () => {
  return (
    <>
    <h1 className='text'>SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
    <h2 className='text'>&nbsp;&nbsp;&nbsp;&nbsp;CSE(CYBERSECURITY)</h2>
    <img `src={img} alt="no" height="500" width="1000"></img>
    <p><h3>--------------information------------   <a href="https://www.skcet.ac.in/" tagert="blank">skcet webpage.com</a></h3></p>
    <h2>DEPARTMENT:</h2>
   <ol type="a">
    <li>CYS</li>
    <li>CSD</li>
    <li>CSE</li>
    <li>IT</li>
    <li>EEE</li>
   </ol>
   <h2>OTHERS</h2>
   <ul type="i">
    <li>CSBS</li>
    <li>AIDS</li>
    <li>CIVIL</li>
    <li>MECH</li>
    <li>ECE</li>
   </ul>
   <dl>
    <dt><h3>About CYS:-</h3></dt>
    <dd>-Cybersecurity refers to any technology, measure or practice for preventing </dd><dd>cyberattacks or mitigating their impact.</dd>
    <dd>-Cyber security is the practice of defending computers, servers,</dd> <dd>mobile devices,electronic systems, networks, and data from malicious attacks.</dd>
   </dl>
    <h2>CAMPUS TOUR:</h2>
   <div><iframe width="560" height="315" src="https://www.youtube.com/embed/1jkszm02PbY?si=U5M9myQ9aJcym1on" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

    </>
  )
}

export default App