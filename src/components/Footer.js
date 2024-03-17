import { Link } from "react-router-dom";


const Footer = () => {
    return(<>
    <div className="container-fluid footer-part  mt-5 pb-5 pt-5 ">
    <div className=" d-flex footer-main">
        <div className="footer-part1">
            <h4><Link to="/about" style={{ color: 'white', textDecoration:'none' }}>Company</Link></h4>
            <ol>
                <li className="text-secondary">About</li>
                <li className="text-secondary">Careers</li>
                <li className="text-secondary">Team</li>
            </ol>
        </div>

        <div className="footer-part2">
        <h4><Link to="/support" style={{ color: 'white', textDecoration:'none' }}>Contact us</Link></h4>
            <ol>
                <li className="text-secondary">Help & Support</li>
                <li  className="text-secondary">Partner with us</li>
                <li className="text-secondary">Ride with us</li>
            </ol>
</div>
<div>
            <h4>Terms and Conditions</h4>
            <ol>
                <li className="text-secondary">Cookie Policy</li>
                <li className="text-secondary">Privacy Policy</li>
            </ol>

        </div>

        <div className="footer-part3">

        <h4>We deliver to:</h4>
        <ol>
            <li className="text-secondary">Bangalore</li>
            <li className="text-secondary">Gurgaon</li>
            <li className="text-secondary">Hyderabad</li>
            <li className="text-secondary">Delhi</li>
            <li className="text-secondary">Mumbai</li> </ol>
            </div>
    </div>
 </div>
    
    </>);
}
export default Footer ;