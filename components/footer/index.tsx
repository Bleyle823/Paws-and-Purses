//import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><a>    <img src="/images/logos/logo2.png" alt="Paws & Purses🐾" style={{ width: "230px", height: "auto" }} />
            </a></h6>
            <p>Curating timeless elegance through our collection of premium ladies' handbags. 
              Where sophistication meets style, and every purse tells a story.</p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/share/1EjuEz5YU1/"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              {/* <li><a href="https://www.tiktok.com/@pawsandpurses7?_t=ZM-8uF7TBQ4tkc&_r=1"><i className="icon-linkedin"></i></a></li> */}
              <li><a href="https://www.instagram.com/pawsandpurses6?igsh=MzR5eDk3dW1lMHYw"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
              <li><a href="https://www.tiktok.com/@pawsandpurses7?_t=ZM-8uF7TBQ4tkc&_r=1">    <img src="/images/logos/tiktok.png" alt="tiktok" style={{ width: "25px", height: "auto" }} />
              </a></li>
            </ul>
          </div>
          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">info@pawsandpurse.co.ke</a></li>
              <li><a href="#">Hotline: +254 700 000 000</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          {/* <p>Design By Bleyle</p> */}
        </div>
      </div>
    </footer>
  )
};

export default Footer