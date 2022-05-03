import React from 'react';
import { NavLink,useLocation} from "react-router-dom";
import "./PrivacyPolicy.css";
import PrivacyPolicyDetails from '../components/PrivacyPolicyDetails/PrivacyPolicyDetails';
import Faq from '../components/Faq/Faq';
import License from '../components/License/License';
import TermsConditions from '../components/TermsConditions/TermsConditions';


export default function PrivacyPolicy() {
    const location = useLocation();
    const {pathname }  = location;
    const splitLocation = pathname.split("/") ;
  return (
    <>
        <div className='pt_menu pp_sec'>
            <div className='row pp_main_row'>
                <div className='col-lg-3 pp_menu_col'>
                <NavLink className="navbar-brand" to="/">
                     <img src="./assets/black_logo.png"/>
                </NavLink>
                    <ul className="nav flex-column left_menu_list" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${splitLocation[1] === "privacy-policy" ? "active" :"" }`} 
                                id="pp-tab" data-bs-toggle="tab" data-bs-target="#pp" 
                                type="button" role="tab" aria-controls="pp" 
                                aria-selected={`${splitLocation[1] === "privacy-policy" ? "true" :"false" }`}>
                                    Privacy Policy
                                </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${splitLocation[1] === "faq" ? "active" :"" }`} 
                                id="faq-tab" 
                                data-bs-toggle="tab" data-bs-target="#faq" type="button" 
                                role="tab" aria-controls="faq" 
                                aria-selected={`${splitLocation[1] === "faq" ? "true" :"false" }`}>
                                    FAQ’s
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${splitLocation[1] === "terms-and-conditions" ? "active" :"" }`} 
                                id="tc-tab" data-bs-toggle="tab" 
                                data-bs-target="#tc" type="button" 
                                role="tab" aria-controls="tc" 
                                aria-selected={`${splitLocation[1] === "terms-and-conditions" ? "true" :"false" }`}>
                                    Terms and conditions
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${splitLocation[1] === "license" ? "active" :"" }`} 
                                id="license-tab" data-bs-toggle="tab" 
                                data-bs-target="#license" type="button" 
                                role="tab" aria-controls="license" 
                                aria-selected={`${splitLocation[1] === "license" ? "true" :"false" }`}>
                                    License
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-9 pp_cont_col'>
                    <div className="tab-content" id="myTabContent">
                        <div className={`tab-pane fade  ${splitLocation[1] === "privacy-policy" ? "show active" :"" }`}
                            id="pp" role="tabpanel" aria-labelledby="home-tab">
                                <PrivacyPolicyDetails />
                        </div>
                        <div className={`tab-pane fade  ${splitLocation[1] === "faq" ? "show active" :"" }`}
                            id="faq" role="tabpanel" aria-labelledby="profile-tab">
                                <Faq />
                        </div>
                        <div className={`tab-pane fade  ${splitLocation[1] === "terms-and-conditions" ? "show active" :"" }`}
                            id="tc" role="tabpanel" aria-labelledby="contact-tab">
                                <TermsConditions />
                        </div>

                        <div className={`tab-pane fade  ${splitLocation[1] === "license" ? "show active" :"" }`}
                            id="license" role="tabpanel" aria-labelledby="contact-tab">
                                <License />
                        </div>

                    </div>
                </div>
            </div>

        
           

        </div>
    
    </>
  )
}
