import React from "react"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            firstname: props.user?.firstname || '',
            lastname: props.user?.lastname || '',
            bio: props.user?.bio || '',
            age: props.user?.age || '',
            isHappy: props.user?.isHappy || false,
        }
    }
    render(){
        return(
            <form>
                <input value={this.state.firstname} placeholder="Ім'я" onChange={(e) => this.setState({firstname: e.target.value})} />
                <input value={this.state.lastname} placeholder="Прізвище" onChange={(e) => this.setState({lastname: e.target.value})} />
                <textarea value={this.state.bio} placeholder="Біографія" onChange={(e) => this.setState({bio: e.target.value})} />
                <input value={this.state.age} placeholder="Вік" onChange={(e) => this.setState({age: e.target.value})} />
                <label htmlFor="isHappy">"Ви щасливі?"</label>
                <input checked={this.state.isHappy} type="checkbox" id="isHappy" className="checkbox_css" onChange={(e) => this.setState({isHappy: e.target.checked})} />
                <button type="button" onClick={this.validate.bind(this)}>
                    Додати
                </button>
            </form>
        )
    }
    validate() {
        this.userAdd = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            bio: this.state.bio,
            age: this.state.age,
            isHappy: this.state.isHappy,
        }
        if(this.props.user)
            this.userAdd.id = this.props.user.id                    
        this.props.onAdd(this.userAdd)
        
        this.setState({firstname: ''})
        this.setState({lastname: ''})
        this.setState({bio: ''})
        this.setState({age: ''})
        this.setState({isHappy: false})
    }
}

export default AddUser