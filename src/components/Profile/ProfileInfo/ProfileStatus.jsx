import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: !this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
        this.props.updateStatus();
    }

    deactivateEditMode = () => {

        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);

    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        let a = this.state;
        let b = this.props;


    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span
                        onDoubleClick={this.activateEditMode}>
                        {this.props.status || "Set status here"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        placeholder={"Update your status"}
                    />
                </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;