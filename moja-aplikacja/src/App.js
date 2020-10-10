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
import Lessons from "./components/Lessons/Lessons";
import PriceList from "./components/PriceList/PriceList";
import Teachers from "./components/Teachers/Teachers";
import TimeTable from "./components/TimeTable/TimeTable";
import TeacherDeteiledInfo from "./components/TeacherDeteiledInfo/TeacherDeteiledInfo";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Nav/>
                <main>
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route path="/AboutPlace" component={AboutPlace} />
                            <Route path="/Lessons" component={Lessons} />
                            <Route path="/PriceList" component={PriceList} />
                            <Route path="/Teachers" component={Teachers} />
                            <Route path="/TimeTable" component={TimeTable} />
                            <Route path="/teacher/:id" component={TeacherDeteiledInfo} />
                        </Switch>
                </main>
                <Footer/>
            </Router>
        );
    }
}

export default App;