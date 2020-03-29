import React from 'react'

class Email extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            view: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            view: 'submitted'
        })
    }
    render() {
        return (
            <div className="email-parent-div">
                <div className="email-center-wrapper">
                    <div className="form-wrapper">
                        <form onSubmit={this.handleSubmit} className="email-form">
                            <div className="email-title">
                                Get the latest deals and more.
                            </div>
                            {
                                this.state.view === 'submitted'
                                    ?
                                    <div className="success-message-wrap"><span className="success-message">
                                        <img className="footer-email-field-check-icon" src="https://www.bestbuy.com/~assets/bby/_com//shop/footer/dist/client/images/4b6960d3dfba2ea59ca90c1dc68df5ac.svg" alt="check icon" />Thanks!</span>
                                    </div>
                                    :
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
                            }
                        </form>
                    </div>
                    <div className="email-divider-parent">
                        <div className="email-divider"></div>
                    </div>
                    <div className="bby-logo-div">
                        <div className="bby-logo-wrapper">
                            <img className="bby-logo" alt="bby-logo" src="./images/app-logo.png" />
                            <a className="app-entry" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                <span className="app-entry-label">Best Buy app</span>
                                <span className="app-entry-action">Learn more ›</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Email
