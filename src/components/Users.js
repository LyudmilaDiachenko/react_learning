import React from "react"

class Users extends React.Component {
    users = [
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
    render(){
        if(this.users.length > 0)
            return (<div>
                    {this.users.map((us) => (<div className="users" key={us.id}>
                        <h3>{us.firstname} {us.lastname}</h3>
                        <p>{us.bio}</p>
                        <b>{us.isHappy ?  "Щасливий:)" : "Недуже щасливий:("}</b>
                    </div>))}
                </div>)
        else
            return (<div className="users">
                    <h3>Користувачів немає</h3>
                </div>)
        
    }
}

export default Users