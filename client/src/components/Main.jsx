import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button
} from 'reactstrap';
import Forum from 'components/Forum.jsx';
import {connect} from 'react-redux';
import {toggleNavbar} from 'states/main-actions.js';

import './Main.css';

class Main extends React.Component {
    static propTypes = {
        navbarToggle: PropTypes.bool,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
    }

    render() {
        return (
            <Router>
                <div className='main'>
                        <Navbar color='faded' light toggleable>
                            <NavbarToggler right onClick={this.handleNavbarToggle}/>
                            <NavbarBrand className='text-info' href="/">Let's 狗</NavbarBrand>
                            <Collapse isOpen={this.props.navbarToggle} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to='/'>留言板</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>

                    <Route exact path="/" render={() => (
                        <Forum/>
                    )}/>
                </div>
            </Router>
        );
    }

    handleNavbarToggle() {
        this.props.dispatch(toggleNavbar());
    }
}

export default connect(state => ({
    ...state.main,
}))(Main);
