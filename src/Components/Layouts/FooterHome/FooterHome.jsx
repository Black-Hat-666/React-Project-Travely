import React from 'react'

export const FooterHome = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className='footer-content-container'>
                <h3  className='website-logo'>Travely</h3>
                <span className='footer-info'>998 041 151</span>
                <span className='footer-info'>travely@outlook.com</span>
            </div>
            <div className="footer-menus">
                <div className="footer-content-container">
                    <span className="menu-title">Our company</span>
                    <a href="#" className="menu-item-footer">About us</a>
                    <a href="#" className="menu-item-footer">Employment</a>
                    <a href="#" className="menu-item-footer">Blog</a>
                    <a href="#" className="menu-item-footer">How our services work</a>
                </div>
                <div className="footer-content-container">
                    <span className="menu-title">Contact</span>
                    <a href="#" className="menu-item-footer">Help/FAQs</a>
                    <a href="#" className="menu-item-footer">Press</a>
                    <a href="#" className="menu-item-footer">Affiliated companies</a>
                    <a href="#" className="menu-item-footer">Partners</a>
                </div>
            </div>

            <div className="footer-content-container">
                <span className='menu-title'>Follow us</span>
                <div className="social-container">
                    <a href="#" className="social-link"></a>
                    <a href="#" className="social-link"></a>
                    <a href="#" className="social-link"></a>
                </div>
            </div>
        </div>
        <div className="copyright-container">
            <span className="copyright">&copy;2022, Travely.com.</span>
        </div>
    </footer>
    
  )
}
