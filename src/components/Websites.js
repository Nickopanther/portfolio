import React from 'react';
import { Helmet } from 'react-helmet';
import Agape from '../images/agape.png';
import AngstadtFamilyDental from '../images/angstadt-family-dental.png';
import BBIntegrations from '../images/bb-integrations.png';
import BGGlass from '../images/bg-glass.png';
import HoffmannPublishing from '../images/hoffmann-publishing.png';
import Rubright from '../images/rubright.png';
import ContactCTA from './ContactCTA';

const Websites = () => {
    return (
        <div>
        <div className="container content">
            <Helmet>
                <title>Websites - Nick Azzarello</title>
                <meta name="description" content="Websites Nick Azzarello has done for clients for a small digital marketing agency he's worked for." />
                <meta name="keywords" content="nick azzarello, websites, wordpress" />
            </Helmet>

            <h1 className="center title">Websites</h1>
            <p className="center">Websites that I have helped build and maintain
            at <a href="https://dabrianmarketing.com" target="_blank">DaBrian Marketing Group, LLC</a>.
            <br /> Click on an image, or title, to explore a site.</p>

            <div className="row one">

                <div className="website col s12 m4 l4">
                    <div className="website-image">
                        <a href="https://agapefhc.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Agape}
                                 height="200"
                                 width="300"
                                 alt="Agape Institute"
                                 title="Agape Institute" />
                        </a>
                    </div>
                    <div className="website-title">
                        <a href="https://agapefhc.com/" target="_blank" rel="noopener noreferrer">
                            <h3 className="center title indigo-text text-darken-4">Agape Institute</h3>
                        </a>
                    </div>
                </div>

                <div className="website col s12 m4 l4">
                    <div className="website-image">
                       <a href="https://angstadtfamilydental.com/" target="_blank" rel="noopener noreferrer">
                            <img src={AngstadtFamilyDental}
                                 height="200"
                                 width="300"
                                 alt="Angstadt Family Dental"
                                 title="Angstadt Family Dental" />
                       </a>
                    </div>
                    <div className="website-title">
                        <a href="https://angstadtfamilydental.com/" target="_blank" rel="noopener noreferrer">
                            <h3 className="center title indigo-text text-darken-4">Angstadt Family Dental</h3>
                        </a>
                    </div>
                </div>

                <div className="website col s12 m4 l4">
                    <div className="website-image">
                        <a href="https://www.bbintegrations.com/" target="_blank" rel="noopener noreferrer">
                            <img src={BBIntegrations}
                                 height="200"
                                 width="300"
                                 alt="B&amp;B Integrations"
                                 title="B&amp;B Integrations" />
                        </a>
                    </div>
                    <div className="website-title">
                        <a href="https://www.bbintegrations.com/" target="_blank" rel="noopener noreferrer">
                            <h3 className="center title indigo-text text-darken-4">B&amp;B Integrations</h3>
                        </a>
                    </div>
                </div>

            </div>

            <div className="row two">

                <div className="website col s12 m4 l4">
                    <div className="website-image">
                        <a href="https://www.bgglass.com/" target="_blank" rel="noopener noreferrer">
                            <img src={BGGlass}
                                 height="200"
                                 width="300"
                                 alt="B&amp;G Glass"
                                 title="B&amp;G Glass" />
                        </a>
                    </div>
                    <div className="website-title">
                        <a href="https://www.bgglass.com/" target="_blank" rel="noopener noreferrer">
                            <h3 className="center title indigo-text text-darken-4">B&amp;G Glass</h3>
                        </a>
                    </div>
                </div>

                <div className="website col s12 m4 l4">
                    <div className="website-image">
                        <a href="https://www.hoffmannpublishing.com/" target="_blank" rel="noopener noreferrer">
                            <img src={HoffmannPublishing}
                                 height="200"
                                 width="300"
                                 alt="Hoffmann Publishing"
                                 title="Hoffmann Publishing" />
                        </a>
                    </div>
                    <div className="website-title">
                        <a href="https://www.hoffmannpublishing.com/" target="_blank" rel="noopener noreferrer">
                            <h3 className="center title indigo-text text-darken-4">Hoffmann Publishing</h3>
                        </a>
                    </div>
                </div>

                <div className="website col s12 m4 l4">
                    <div className="website-image">
                        <a href="https://therubrightgroup.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Rubright}
                                 height="200"
                                 width="300"
                                 alt="The Rubright Group"
                                 title="The Rubright Group" />
                        </a>
                    </div>
                    <div className="website-title">
                        <a href="https://therubrightgroup.com/" target="_blank" rel="noopener noreferrer">
                            <h3 className="center title indigo-text text-darken-4">The Rubright Group</h3>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            <ContactCTA />
        </div>
    )
}

export default Websites;
