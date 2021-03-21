import React from 'react';
import Modal from '../Modal/Modal';


class NewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: '', open: false };
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    handleChangeBody(event) {
        this.setState({ body: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.body.length === 0) {
            event.preventDefault();
        }
        else {
            this.setState({ open: !this.state.open })
        }
    }

    showModal(e) {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div>
                <div className="newComment">
                    <i className="bi bi-person-circle uicon" />
                    <form>
                        <input className="input-field" type="text" placeholder="Write a comment" onInput={this.handleChangeBody} required />
                        <i className="bi bi-arrow-right-circle icon" onClick={this.handleSubmit} />
                    </form>
                </div>

                {this.state.open ? (
                    <Modal body="Commented Successfully" />
                ) : null}

            </div>
        );
    }
}
export default NewComment;