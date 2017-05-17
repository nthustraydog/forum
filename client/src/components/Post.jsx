import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    ListGroup,
    ListGroupItem
} from 'reactstrap'
import ResponseForm from 'components/ResponseForm.jsx';
import ResponseList from 'components/ResponseList.jsx';
import {connect} from 'react-redux';
import moment from 'moment';
import {
    setPostToggle,
    closePost
} from 'states/forum-actions.js';
import 'utilities/Dog.css';
import './Post.css';

class Post extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
        this.handleClosePost = this.handleClosePost.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(setPostToggle(true));
    }

    render() {
        const {postToggle, barkerId, id, ts, title, body} = this.props;
        return (
            <div className="post">
                <Alert color="danger" isOpen={postToggle} toggle={this.handleClosePost} className="mt-5 d-flex flex-column justify-content-center">
                    <ListGroup className="content">
                        <ListGroupItem className="header d-flex flex-column">
                            <div className="d-flex flex-row">
                                <div className={`dog dog-${barkerId}`}></div>&nbsp;&nbsp;
                                <div className="timestamp align-self-end">{moment(ts * 1000).calendar()}</div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex flex-column">
                            <Alert color="warning" className="align-self-start">標題</Alert>
                            <div className="ml-3 align-self-start title">{title}</div>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex flex-column">
                            <Alert color="warning" className="align-self-start">內容</Alert>&nbsp;&nbsp;
                            <div className="ml-3 align-self-start body">{body}</div>
                        </ListGroupItem>
                        <ResponseForm barkerId={barkerId} postId={id}/>
                        <ResponseList/>
                    </ListGroup>
                </Alert>
            </div>
        );
    }

    handleClosePost() {
        this.props.dispatch(closePost());
    }
}

export default connect(state => ({
    ...state.post
}))(Post);
