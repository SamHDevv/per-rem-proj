import React from "react"

function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2021 | Artago Secure</h3>
                            <h4>Administrative International Trade</h4>
                            <ul>
                                <li>Maintenance and management of the product portfolio through
                                Amazon Vendor platform from 8 countries.</li>
                                <li>Amazon Ads Campaigns</li>
                                <li>Order management and logistics shipping.</li>
                            </ul>
                        </div>
                </div>    
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2017-2020 | Inmeval</h3>
                            <h4>Administrative Sales Management</h4>
                            <ul>
                                <li>Commercial representative to dental clinics and laboratories.</li>
                                <li>Preparation of budgets and sending of invoices.</li>
                                <li>Reception and entry of merchandise.</li>
                                <li>Work with the accounting and administration team to establish budgets, monitor expenses.</li>
                                <li>Collect, organize and store information using computer systems.</li>
                                <li>Stock control</li>
                                <li>Customer Support</li>
                                <li>Development and maintenance of Prestashop E-commerce</li>
                            </ul>
                        </div>
                </div>   
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2016-2017 | Cash Converters</h3>
                            <h4>Procurement Professional</h4>
                            <ul>
                                <li>Manage offers and negotiate prices guaranteeing an optimal benefit for the company.</li>
                                <li>Examine and verify existing contracts.</li>
                                <li>Track and report KPI's to reduce expenses and improve effectiveness.</li>
                                <li>Anticipate alterations in the negotiating capacity of suppliers and clients.</li>
                                <li>Perform risk management for contracts and agreements.</li>
                                <li>Control spending by ensuring long-term savings in acquisition costs.</li>                           
                            </ul>
                        </div>
                </div>   
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2011-2014 | Unilever</h3>
                            <h4>Sales Representative</h4>
                            <ul>
                                <li>Responsible for local account sales in all commercial channels (hypermarkets, supermarkets and wholesalers) developed by Unilever in consumer goods brands.</li>
                                <li>Attracting new clients, assigning and planning objectives as well as monitoring them.</li>
                                <li>During the development of the position I was the direct contact of the company with the authorized distributors acting as an advisor.</li>
                            </ul>
                        </div>
                </div>   
            </div>  
        </div>
    )
}

export default Experience
