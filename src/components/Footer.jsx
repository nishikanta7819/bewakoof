import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="bewakoof-footer">
        <div className="footer-img">
          <img
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-tribe-trademark-logo.svg"
            alt=""
          />
        </div>
        <div className="footer-links">
          <div className="footer-links-cards">
            <p className="footer-links-heading">customer service</p>
            <p>Contact Us</p>
            <p>Track Order</p>
            <p>Return Order</p>
            <p>Cancel Order</p>
          </div>
          <div className="footer-links-cards">
            <p className="footer-links-heading">company</p>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>We are Hiring</p>
          </div>
          <div className="footer-links-cards">
            <p className="footer-links-heading">connect with us</p>
            <p>4.7m People like this</p>
            <p>1m People like this</p>
          </div>
          <div className="uptodate">
            <p className="footer-links-heading">keep up to date</p>
            <input type="search" placeholder="Enter Email Id:" />
            <button>subscribe</button>
          </div>
        </div>
        <div className="footer-links2">
          <div className="footer-links-cards2">
            <div className="cod">
              <img
                src="https://cdn-icons-png.flaticon.com/128/14355/14355999.png"
                alt=""
              />
              <p>15 Days Return Policy</p>
            </div>
            <div className="cod">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4305/4305512.png"
                alt=""
              />
              <p>Cash On Delivery</p>
            </div>
          </div>
          <div className="footer-links-cards2">
            <p className="footer-links-heading2">Download the App</p>
            <img
              src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_android_v1.png&w=256&q=75"
              alt=""
            />
            <img
              src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_ios_v1.png&w=256&q=75"
              alt=""
            />
          </div>
          <div className="footer-links-cards2">
            <p className="footer-links-heading2">100% secure payment</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
