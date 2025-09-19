import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            users: [
        {
            id: 1,
            firstname: "Kate",
            lastname: "Bloom",
            bio: "LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstname: "Lola",
            lastname: "Black",
            bio: "LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            age: 28,
            isHappy: false
        }
    ]
        }
        this.addUser = this.addUser.bind(this)
    }
    render(){
        return (
            <div>
                <Header title="Список користувачів"/>
                <main>
                    <Users users={this.state.users}/>
                </main>
                <aside>
                    <AddUser onAdd={this.addUser}/>
                </aside>        
            </div>
        )
    }

    addUser(user){
        const id = this.state.users.length + 1
        this.setState({users: [...this.state.users, {id, ...user}]})
    }

}

export default App