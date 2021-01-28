import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive news and updates
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            {/* <Link to='/rentals' className="btn--outline">Subscribe </Link> */}
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          
        <p className='footer-subscription-text'>
          You can unsubscribe and miss out the deals at any time.
        </p>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
          
            <Link to='/'>Brian Sahota</Link>
            <Link to='/'>Alfred Wang</Link>
         
          </div>
          <div class='footer-link-items'>
            <h2>Hours</h2>
            <Link to='/'>Weekends & Holidays</Link>
            <Link to='/'>8am-4pm</Link>
            <Link to='/'>Mon - Fri</Link>
            <Link to='/'>9am - 4pm</Link>
   
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Partners</h2>
          
            <Link to='/'>Flatiron School</Link>
            <Link to='/'>Bank of Flatiron</Link>
            <Link to='/'>Flat-flix</Link>
            <Link to='/'>Flat-tify</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Sponsors</h2>
            <Link to='/'>Jiggly</Link>
            <Link to='/'>Kaelyn</Link>
            <Link to='/'>Pauchou</Link>
            <Link to='/'>Ian</Link>
            <Link to='/'>Ethan</Link>
            <Link to='/'>Annie</Link>
   
            
          </div>
      
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Flat Mountain
              <i class="fas fa-mountain" />
            </Link>
          </div>
          <small class='website-rights'>Flat Mountain © 2021  All rights reserved.
          </small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;