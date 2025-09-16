import React from "react"

class Header extends React.Component {
  render(){
    return(<div>
      <header className="header">{this.props.title}</header>
      <p>{this.props.suname}</p>
      <li>{this.props.size}</li>
    </div>
    )
    }
}

export default Header