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
            </footer>
        );
    }
}


export default App
