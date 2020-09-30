import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPlace from "./components/AboutPlace/AboutPlace";
import Classes from "./components/Classes/Classes";
import PriceList from "./components/PriceList/PriceList";
import Teachers from "./components/Teachers/Teachers";
import TimeTable from "./components/TimeTable/TimeTable";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Nav/>
                <main>
                    <div className="container container--main">
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route path="/AboutPlace" component={AboutPlace} />
                            <Route path="/Classes" component={Classes} />
                            <Route path="/PriceList" component={PriceList} />
                            <Route path="/Teachers" component={Teachers} />
                            <Route path="/TimeTable" component={TimeTable} />
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </Router>
        );
    }
}

export default App;