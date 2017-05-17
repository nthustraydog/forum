import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import ForumItem from 'components/ForumItem.jsx';
import {connect} from 'react-redux';
import {
    listForum
} from 'states/forum-actions.js';

import './ForumList.css';

class ForumList extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(listForum(0));
    }

    render() {
        const {forum} = this.props;
        let children;
        if(forum.length >0) {
            children = forum.map(f => (
                <ListGroupItem key={f.id} action>
                    <ForumItem {...f}/>
                </ListGroupItem>
            ))
        } else {
            children = (
                <ListGroupItem>都沒人理我...</ListGroupItem>
            );
        }

        return (
            <Alert color="warning" className="forum-list">
                <ListGroup>{children}</ListGroup>
            </Alert>
        );
    }
}

export default connect(state => ({
    ...state.forumList
}))(ForumList);
