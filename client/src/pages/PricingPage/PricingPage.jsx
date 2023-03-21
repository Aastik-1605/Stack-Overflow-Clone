import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import './PricingPage.css'

function PricingPage() {
    // Paste the stripe-pricing-table snippet in your React component

  
    return (           
        <div className='home-container-1'>
                  <LeftSidebar />
                  <div className="home-container-2">
                     <h1 className='price-h1'>Subscriptions</h1>
                     <div className="price-table">
                        <stripe-pricing-table 
                           pricing-table-id= "prctbl_1MgLvgSJamdo6OBjd71cZVqz"
                           publishable-key= "pk_test_51Mfd6kSJamdo6OBj9r7JDqJMQWmhrsMjAPztqo34fUsKAiI78v4O4dYOZ8B3yhZbzD1wWeXURfxxae9K1IMJFMYW00mobH8ADb">
                        </stripe-pricing-table> 
                     </div> 
                  </div>
              </div>      
        );
    }
    

export default PricingPage;
