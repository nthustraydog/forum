import React from 'react';
import PropTypes from 'prop-types';
import {} from 'reactstrap';
import {connect} from 'react-redux';
import moment from 'moment';
// import {} from 'states/forum-actions.js';
import 'utilities/Dog.css';
import './ResponseItem.css';

class ResponseItem extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {wooferId, id, ts, text} = this.props;
        return (
            <div className="response-item d-flex flex-column">
                <div className="d-flex flex-row">
                    <div className={`dog dog-${wooferId}`}></div>
                    <div className="ml-2 align-self-end">{moment(ts * 1000).calendar()}</div>
                </div>
                <div className="mt-3 text">{text}</div>
            </div>
        );
    }
}

export default connect(state => ({
}))(ResponseItem);
