import React from "react"
import Button from "./Button"

class Header extends React.Component {
  render(){
    return(<div>
      <header className="header">{this.props.title}</header>
      <p>{this.props.suname}</p>
      <li>{this.props.size}</li>
    <Button />
    <Button text = "Кошик"/>

    </div>
    )
    }
}

export default Header