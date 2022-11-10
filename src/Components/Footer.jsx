import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="box1">
        <div className="left">
          <img src="./images/pic1.jpg" alt="pic" />
        </div>
        <div className="rigth">
          <div className="scanleft">
            <h1>Rewards are waiting for you in the Orbitz app</h1>
            <div>
              {" "}
              <ul>
                <li>
                  {" "}
                  Earn 4% back when you book your hotel in app, vs. 3% on site
                </li>
                <li>Get flight status and gate number notifications</li>
                <li>
                  Have questions about your stay? Message your hotel right in
                  the app
                </li>
              </ul>
            </div>
            <div className="scanbottom">
              <h2>Text yourself a download link</h2>
              <div>
                <input placeholder="Country Code " />
                <input placeholder="Phone number" />
                <input type="submit" value="Get the app" />
              </div>
              <p>
                By providing your number, you agree to receive a one-time
                automated text message with a link to get the app. Standard text
                message rates may apply.
              </p>
            </div>
          </div>
          <div className="scanrigth">
            <div>
              <img src="./images/scan.jpg" />
              <h2>Scan the QR code</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="box2">
        <h1>More destinations</h1>
        <div>
          <div className=" box2flex">
            <select value="Destination deals">
              <option value="Option 1">Destination deals</option>
              <option value="Option 2">Travels Deals</option>
              <option value="Option 3">Hostel under 1000</option>
              <option value="Option 4">Deep travel coupon</option>
              <option value="Option 5">Car rental Deals</option>
              <option value="Option 6">Fligt under 2000</option>
            </select>
            <select placeholder="Top Hotel beach destinations">
              <option value="option1">Top Hotel beach destinations</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option1">Option 4</option>
            </select>
            <select placeholder="Top Hotel city destinations">
              <option value="option1">Top Hotel city destinations</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 1</option>
            </select>
          </div>
          <div className=" box2flex2">
            <select value="Top vacation Destination">
              <option value="Option 1">Top vacation Destination</option>
              <option value="Option 2">Maldives Vacations</option>
              <option value="Option 3">Autralia Vacations</option>
              <option value="Option 4">Goa Vacations</option>
            </select>
            <select placeholder="Top Fligth Destination">
              <option value="option1">Top Fligth Destination</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 1</option>
            </select>
            <select placeholder="Top car rental Destination in India">
              <option value="option1">
                Top car rental Destination in India
              </option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option1">Option 4</option>
            </select>
          </div>
        </div>
      </div>
      <div className="box3">
        <div style={{ color: "blue" }}>Exepedia Group</div>
        <div>
          <h2>Company</h2>
          <p>About</p>
          <p>Jobs</p>
          <p>List your Property</p>
          <p>Partnerships</p>
          <p>Newsroom</p>
          <p>Investor Relations</p>
          <p>Site Map</p>
          <p>Deep travel rewards</p>
          <p>Advertising</p>
        </div>
        <div>
          <h2>Hotels in India</h2>
          <p>Vacations Rentals In united States</p>
          <p>car rental</p>
          <p>Domestics flights</p>
          <p>Vacation packages</p>
          <p>Deep travels Reviews</p>
          <p>Deep travel Coupons</p>
          <p>LGBTQ Travel</p>
          <p>Unique Accomodations</p>
          <p>Travel Blog</p>
        </div>
        <div>
          <h2>Policies</h2>

          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Vrbo Terms and acons=ditions</p>
          <p>Deep travel Rewards Terms</p>
          <p>Do not sell my personal information</p>
        </div>
        <div>
          <h2>Help</h2>
          <p>Supprt</p>
          <p>Cancel your Hotel or vacation rental booking </p>
          <p>Cancel your Ticket</p>
          <p>Refund timelines, policies and processes</p>
          <p>Use Deep travel Coupon</p>
        </div>
      </div>
      <div className="box4">
        <p></p>
      </div>
    </div>
  );
};
export default Footer;
