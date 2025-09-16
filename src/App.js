import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from "./img/Kanao.jpg"

class App extends React.Component {

  titleH1 = "Title H1"
  placeholderTxt = "Help text!"

  render(){
    return (<div className="boxName">
      <Header title="Шапка сайту"/>
      <Header suname="Початок сайту"/>
      <Header size="25px"/>
          <h1>{this.titleH1}</h1>
          <input placeholder={this.placeholderTxt} onClick={this.inputClick} onMouseOver={this.mouseOver}/>
          <p>{this.placeholderTxt === "Help text" ? "Yes" : "No"}</p>
          <Image image={logo} /> 
    </div>)
    }

  inputClick() {console.log('Click')}
  mouseOver() {console.log("Mouse over")}
}

export default App