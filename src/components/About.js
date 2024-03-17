import { Tab, Tabs } from "react-bootstrap";

const About = () => {
    return (
        <div className="container full-about mt-3">
        <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"> 
        <Tab eventKey="home" title="Home" >
        <div className="container mt-5 home-about  ">
        <h4><b>Welcome to our website!</b></h4>
            <div>
            We are a family-owned and operated business that has been serving the community for over 2 years. 
                We are passionate about food and we love to share our passion with others. We offer a wide variety of food options, from classic American dishes to international cuisine. We also have a full bar with a variety of beer, wine, and cocktails.
                We are committed to using fresh, high-quality ingredients in all of our dishes. We also offer a variety of gluten-free and vegan options. We want everyone to be able to enjoy our food, regardless of their dietary restrictions.
                We believe that food is more than just something to eat. It is a way to bring people together and to create memories. We hope that you will enjoy our food and that you will come back to visit us again soon.
            </div>
            </div>
        </Tab>
        <Tab eventKey="contact" title="Contact">
            < div className="contact-about mt-5"> 
        We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@FoodParadise.in
Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Food Paradise representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.
</div>
        </Tab>
      </Tabs>        
</div>

    );
}
export default About;