import React from 'react';

const SettingsMain = () => {
    return (
        <main className="settings-main box">
            <h2 className="settings-main__title">Settings</h2>
            <p className="settings-main__text">
                Two factor authentification is enabled via MFA app. You can't disable 2FA now. If you are having problem with Custody service, contact us
                <a href="#" className="mail-link">support@bankexcustody.com</a>
            </p>
            
        </main>
    )
}

export default SettingsMain;