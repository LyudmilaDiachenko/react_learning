import React from "react"
import * as ReactDOMClient from "react-dom/client"


class Header extends React.Component {
  render(){
    return(
      <header>
        Шапка сауйту
      </header>
    )
    }
}

class App extends React.Component {

  titleH1 = "Title H1"
  placeholderTxt = "Help text!"

  render(){
    return (<div className="boxName">
      <Header />
      <Header />
      <Header />
          <h1>{this.titleH1}</h1>
          <input placeholder={this.placeholderTxt} onClick={this.inputClick} onMouseOver={this.mouseOver}/>
          <p>{this.placeholderTxt === "Help text" ? "Yes" : "No"}</p>
    </div>)
    }

  inputClick() {console.log('Click')}
  mouseOver() {console.log("Mouse over")}
}

const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(<App />)