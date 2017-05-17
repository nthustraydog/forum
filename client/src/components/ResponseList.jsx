import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import ResponseItem from 'components/ResponseItem.jsx';
import {connect} from 'react-redux';
import {setResponses} from 'states/forum-actions.js';

import './ResponseList.css';

class ResponseList extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {responses} = this.props;

        let children;
        if(responses.length > 0) {
             children= responses.map(r => (
                <ListGroupItem key={r.id}>
                    <ResponseItem {...r}/>
                </ListGroupItem>
            ));
        } else {
            children = (
                <ListGroupItem>沙發區好冷清...</ListGroupItem>
            );
        }
        return (
            <div className="response-list">
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}

export default connect(state => ({
    ...state.responseList
}))(ResponseList);
