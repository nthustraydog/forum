import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import ForumNavbarItem from 'components/ForumNavbarItem.jsx';
import {connect} from 'react-redux';
import {getDogs} from 'utilities/dogs.js'
import {} from 'states/forum-actions.js';

import './ForumNavbarList.css';

class ForumNavbarList extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        const dogs = getDogs();
        let children = dogs.map(dog => (
            <ListGroupItem key={dog.id} action>
                <ForumNavbarItem {...dog}/>
            </ListGroupItem>
        ));

        return (
            <Alert color="info" className="forum-navbar-list">
                <ListGroup>{children}</ListGroup>
            </Alert>
        );
    }

}

export default connect(state => ({
}))(ForumNavbarList);
