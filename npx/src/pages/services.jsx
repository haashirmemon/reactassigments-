import React from 'react';
import { Themecontext } from '../context/themecontext';
import { useContext } from 'react';

const Services = () => {
  const {theme,settheme}= useContext(Themecontext)

  return (
    <div   className={`${theme === 'light' ? "bg-white text-black" : "bg-zinc-400 text-white"}`}>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Our Services</h1>
      <p>We offer a variety of services to meet your needs. Below are some of the key services we provide:</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: '1 1 300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Web Development</h2>
          <p>
            Our team of expert developers can create stunning and efficient websites tailored to your needs. Whether you need a personal blog, a corporate website, or an e-commerce platform, we've got you covered.
          </p>
        </div>
        
        <div style={{ flex: '1 1 300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Mobile App Development</h2>
          <p>
            We specialize in creating high-quality mobile applications for both Android and iOS platforms. Our apps are designed to offer seamless user experiences and robust functionality.
          </p>
        </div>
        
        <div style={{ flex: '1 1 300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Digital Marketing</h2>
          <p>
            Our digital marketing services will help you reach a larger audience and increase your online presence. We offer SEO, social media marketing, and email marketing services to boost your business.
          </p>
        </div>
        
        <div style={{ flex: '1 1 300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Graphic Design</h2>
          <p>
            Our creative team can design eye-catching graphics for your brand, including logos, brochures, business cards, and more. Let us help you create a visual identity that stands out.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
