import React from "react"

class AddUser extends React.Component {
    render(){
        return(
            <form>
                <input placeholder="Ім'я" />
                <input placeholder="Прізвище" />
                <textarea placeholder="Біографія" />
                <input placeholder="Вік" />
                <label htmlFor="isHappy">"Ви щасливі?"</label>
                <input type="checkbox" id="isHappy"/>
                <button type="button">Додати</button>
            </form>
        )
    }
}

export default AddUser