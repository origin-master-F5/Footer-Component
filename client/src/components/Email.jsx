import React from 'react'

class Email extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="email-parent-div">
                <div className="email-center-wrapper">
                    <div className="form-wrapper">
                        <form className="email-form">
                            <div className="email-title">
                                Get the latest deals and more.
                            </div>
                            <div className="input-wrapper">
                                <span className="input-overlay-wrapper">
                                    <span className="input-overlayTrigger">
                                        <div className="input-parent">
                                            <input type="text" className="email-input" placeholder="Enter email address" defaultValue="" />
                                            <button type="submit" className="submit-email-btn" >
                                                Sign Up
                                            </button>
                                        </div>
                                    </span>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="email-divider-parent">
                        <div className="email-divider"></div>
                    </div>
                    <div className="bby-logo-div">
                        <div className="bby-logo-wrapper">
                            <img className="bby-logo" alt="bby-logo" src="./images/app-logo.png" />
                            <a className="app-entry" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                <span class="app-entry-label">Best Buy app</span>
                                <span class="app-entry-action">Learn more ›</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Email
