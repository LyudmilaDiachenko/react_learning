// ReactDOM.render(React.createElement('input', {
//     placeholder: "Help text",
//     onClick: () => console.log('Click'),
// }), document.getElementById("app"))


const titleH1 = "Title H1"
const placeholderTxt = "Help text!"
const inputClick = () => console.log('Click')
const mouseOver = () => console.log("Mouse over")

const elements = (<div className="boxName">
        <h1>{titleH1}</h1>
        <input placeholder={placeholderTxt} onClick={inputClick} onMouseOver={mouseOver}/>
        <p>{placeholderTxt == "Help text" ? "Yes" : "No"}</p>
</div>) 
const app = document.getElementById("app")

ReactDOM.render(elements, app)