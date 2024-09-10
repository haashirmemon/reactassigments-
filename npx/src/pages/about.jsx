import { Themecontext } from '../context/themecontext';
import { useContext } from 'react';


function About () {
  const {theme,settheme}= useContext(Themecontext)

    return(

      <div className={`${theme === 'light' ? "bg-white text-black" : "bg-zinc-400 text-white"}`}>
          <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>About Us</h1>

        <p>
          Welcome to our website! We are a team of passionate individuals dedicated to delivering the best
          services and products to our customers. Our mission is to provide innovative solutions that make
          life easier and more enjoyable.
        </p>
        <p>
          Our company was founded on the principles of integrity, excellence, and customer satisfaction. We
          strive to exceed expectations in everything we do and are committed to continuous improvement and
          innovation.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Integrity: We conduct our business with the highest ethical standards.</li>
          <li>Excellence: We pursue excellence in every aspect of our work.</li>
          <li>Customer Satisfaction: Our customers are at the heart of everything we do.</li>
        </ul>
        <p>
          Thank you for visiting our website. We look forward to serving you and meeting your needs. If you
          have any questions or feedback, please feel free to contact us.
        </p>
      </div>
      </div>
    )
        };
        
        export default About;

    
