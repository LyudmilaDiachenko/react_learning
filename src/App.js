import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from "./img/Kanao.jpg"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            helpText: "Help text",
            userData: "",
        }
    
        this.inputClick = this.inputClick.bind(this)
    }

  helpText = "Help text!"

  render(){
    return (<div className="boxName">
      <Header title="Шапка сайту"/>
      <Header suname="Початок сайту"/>
      <Header size="25px"/>
          <h1>{this.state.helpText}</h1>
          <h2>{this.state.userData}</h2>
          <input placeholder={this.state.helpText} 
            onClick={this.inputClick} 
            onMouseOver={this.mouseOver}
            onChange={event => this.setState({userData: event.target.value})}
          />
          <p>{this.state.helpText === "Help text" ? "Yes" : "No"}</p>
          <Image image={logo} /> 
    </div>)
    }

  inputClick() {
    console.log('Click')
    this.setState({helpText: "Changed"})
}
  mouseOver() {console.log("Mouse over")}
}

export default App