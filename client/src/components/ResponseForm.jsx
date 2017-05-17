import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Input,
    Button
} from 'reactstrap';
import {connect} from 'react-redux';
import {
    inputText,
    setTextDanger,
    woof
} from 'states/forum-actions.js';
import './ResponseForm.css';

class ReponseForm extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
        this.inputEl = null;
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleWoof = this.handleWoof.bind(this);
    }

    render() {
        const {text} = this.props;
        const textDanger = (this.props.textDanger)? 'has-danger': '';

        return (
            <div className="response-form">
                <Alert color="warning" className={`d-flex ${textDanger}`}>
                    <Input type="textarea" getRef={el => {this.inputEl = el}} value={text} onChange={this.handleTextChange} placeholder=""/>
                    <Button color="info" onClick={this.handleWoof} className="ml-3 button">
                        <i className="fa fa-commenting-o" aria-hidden="true"></i>
                        &nbsp;&nbsp;Woof
                    </Button>
                </Alert>
            </div>
        );
    }

    handleTextChange(e) {
        const text = e.target.value
        this.props.dispatch(inputText(text));
        if (text && this.props.textDanger) {
            this.props.dispatch(setTextDanger(false));
        }
    }

    handleWoof() {
        const {barkerId, postId, text, dispatch} = this.props;
        console.log("barkerId: " + barkerId + " text: " + text);
        if (!text) {
            dispatch(setTextDanger(true));
            return;
        }

        dispatch(woof(barkerId, postId, text));
        dispatch(inputText(''));
    }

}

export default connect(state => ({
    ...state.responseForm
}))(ReponseForm);
