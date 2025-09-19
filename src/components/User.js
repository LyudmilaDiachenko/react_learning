import React from "react"
import { CgCloseO } from "react-icons/cg";
import { IoBuildSharp } from "react-icons/io5";

class  User extends React.Component {
    render(){
        return(
            <div className="users">
                <CgCloseO className="delete-icon" />
                <IoBuildSharp className="edit-icon" />
                <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.age} років</p>
                <b>{this.props.user.isHappy ?  "Щасливий:)" : "Недуже щасливий:("}</b>
            </div>
        )
    }
}

export default User