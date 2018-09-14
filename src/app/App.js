import React, { Component } from 'react';
import '../scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import SettingsMain from './components/SettingsMain';

class App extends Component {
   
    render() {
        return (
            <div className="Auth-window">
                <Header />
                <SettingsMain />
                <Footer />
            </div>   
        )
    }
}

export default App;