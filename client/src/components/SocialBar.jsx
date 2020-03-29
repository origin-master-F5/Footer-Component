import React from 'react'

const SocialBar = (props) => (
    <div className="social-device-feedback-block">
        <div className="social-device">
            <span className="social-links">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img className="social-img" src="/images/fb.png" alt="Best Buy Facebook" />
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img className="social-img" src="/images/tweet.png" alt="Best Buy Twitter" />
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img className="social-img" src="/images/ig.png" alt="Best Buy Instagram" />
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img className="social-img" src="/images/pin.png" alt="Best Buy Pinterest" />
                </a >
            </span >
            <button type="button" className="btn-unstyled device-redirect-link">Mobile Site</button>
        </div >
        <div className="feedback">
            <button type="button" className="btn-unstyled feedback-link">
                <img className="feedback-icon" src="https://www.bestbuy.com/~assets/bby/_com/shop/footer/dist/client/images/6928c0f2d5f3d29fd778fef1b1cbcc6e.gif" alt="Give Feedback Icon" />
                    Give Feedback
                    </button>
        </div>
    </div>
);
export default SocialBar