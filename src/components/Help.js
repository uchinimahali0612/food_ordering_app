import React from 'react';
import { Accordion } from 'react-bootstrap';

const Help = () => {
    return (
        <>
            <div className='accordian-part container mt-5'>
                <h2><b>Help & Support</b></h2>
                <h6><b>Let's take a step ahead and help you better</b></h6>
            </div>
            <div className='mt-5 container accordian-sub'>
                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>What is Food Paradise Customer Care Number?</b></Accordion.Header>
                        <Accordion.Body>
                            We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick
                            and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page
                            and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@FoodParadise.in
                            <div>Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Food Paradise representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b>Will Food Paradise be accountable for quality/quantity?</b></Accordion.Header>
                        <Accordion.Body>
                            Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b>I want to cancel my order</b></Accordion.Header>
                        <Accordion.Body>
                            We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header><b>Do you charge for delivery?</b></Accordion.Header>
                        <Accordion.Body>
                            Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header><b>How long do you take to deliver?</b></Accordion.Header>
                        <Accordion.Body>
                            Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.</Accordion.Body>      </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header><b>Can I order in advance?</b></Accordion.Header>
                        <Accordion.Body>
                            We currently do not support this functionality. All our orders are placed and executed on-demand.
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="6">
                        <Accordion.Header><b>Deactivate my account</b></Accordion.Header>
                        <Accordion.Body>
                            Please write to us at support@FoodParadise.in in the event that you want to deactivate your account                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </>
    )
}

export default Help