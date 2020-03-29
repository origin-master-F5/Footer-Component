import React from 'react';
import Email from './Email.jsx';
import PrimaryNav from './PrimaryNav.jsx';
import SecondaryNav from './SecondaryNav.jsx';
import SocialBar from './SocialBar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <footer className="footer-parent-div">
                <Email />
                <PrimaryNav />
                <SecondaryNav />
                <SocialBar />
                <div className="disclaimer">
                    Prices and offers are subject to change. © 2020 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, MY BEST BUY, and BESTBUY.COM are trademarks of Best Buy and its affiliated companies.
                </div>
            </footer>
        );
    }
}


export default App
