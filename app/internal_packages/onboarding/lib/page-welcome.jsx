import React from 'react';
import { RetinaImg } from 'mailspring-component-kit';
import OnboardingActions from './onboarding-actions';

export default class WelcomePage extends React.Component {
  static displayName = 'WelcomePage';

  _onContinue = () => {
    // We don't have a NylasId yet and therefore can't track the "Welcome
    // Page Finished" event.
    //
    // If a user already has a Nylas ID and gets to this page (which
    // happens if they sign out of all of their accounts), then it would
    // properly fire. This is a rare case though and we don't want
    // analytics users thinking it's part of the full funnel.
    //
    // Actions.recordUserEvent('Welcome Page Finished');
    OnboardingActions.moveToPage('tutorial');
  };

  render() {
    return (
      <div className="page welcome">
        <div className="steps-container">
          <div>
            <p className="hero-text" style={{ fontSize: 46, marginTop: 257 }}>
              Welcome to Mailspring
            </p>
            <RetinaImg
              className="icons"
              url="mailspring://onboarding/assets/icons-bg@2x.png"
              mode={RetinaImg.Mode.ContentPreserve}
            />
          </div>
        </div>
        <div className="footer">
          <button key="next" className="btn btn-large btn-continue" onClick={this._onContinue}>
            Get Started
          </button>
        </div>
      </div>
    );
  }
}