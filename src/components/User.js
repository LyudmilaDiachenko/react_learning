import React from "react"
import { CgCloseO } from "react-icons/cg";
import { IoBuildSharp } from "react-icons/io5";
import AddUser from "./AddUser";

class  User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
}
    render(){
        return(
            <div className="user">
                <CgCloseO onClick={() => this.props.onDelete(this.props.user.id)} 
                    className="delete-icon" />
                <IoBuildSharp onClick={() => this.setState({editForm: true})} 
                    className="edit-icon" />
                <h3>{this.props.user.firstname} {this.props.user.lastname} {this.props.user.id}</h3>
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.age} років</p>
                <b>{this.props.user.isHappy ?  "Щасливий:)" : "Недуже щасливий:("}</b>

                {
                    this.state.editForm ? 
                    <AddUser 
                        user={this.props.user} 
                        onAdd={
                            el => {
                               this.props.onEdit(el)
                               this.setState({editForm: false})
                            }
                        } 
                    /> : null
                }

            </div>
        )
    }
}

export default User