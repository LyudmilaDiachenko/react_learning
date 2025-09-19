import React from "react"

class AddUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false 
        }
    }
    render(){
        return(
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Ім'я" onChange={(e) => this.setState({firstname: e.target.value})} />
                <input placeholder="Прізвище" onChange={(e) => this.setState({lastname: e.target.value})} />
                <textarea placeholder="Біографія" onChange={(e) => this.setState({bio: e.target.value})} />
                <input placeholder="Вік" onChange={(e) => this.setState({age: e.target.value})} />
                <label htmlFor="isHappy">"Ви щасливі?"</label>
                <input type="checkbox" id="isHappy" className="checkbox_css" onChange={(e) => this.setState({isHappy: e.target.checked})} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.props.onAdd({
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                })}
                }>Додати</button>
            </form>
        )
    }
}

export default AddUser