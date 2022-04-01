import React from "react";

export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        debugger
        this.setState({
            editMode: false
        })
        console.log(this.state.status)
        console.log( this.props.updateStatus)
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                </div>}
                {this.state.editMode && <div>
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>}
            </div>
        )
    }
}