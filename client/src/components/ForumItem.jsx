import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {openPost} from 'states/forum-actions.js';

import 'utilities/Dog.css';
import './ForumItem.css';

class ForumItem extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
        this.handleSelectPost = this.handleSelectPost.bind(this);
    }

    render() {
        const {barkerId, responses, title} = this.props;
        return (
            <div className='forum-item' onClick={this.handleSelectPost}>
                <div className='d-flex flex-row'>
                    <div className="sticker mr-5">
                        <div className={`dog dog-${barkerId}`}></div>
                        <div className="num-res">{responses.length}</div>
                    </div>
                    <div className="ml-5 title align-self-center">{title}</div>
                </div>
            </div>
        );
    }

    handleSelectPost() {
        this.props.dispatch(openPost(this.props.id));
    }
}

export default connect(state => ({
}))(ForumItem);
