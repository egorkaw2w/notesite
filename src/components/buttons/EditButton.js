import React from "react";

class EditButton extends React.Component {
  render() {
    const saveButt = () => {
console.log("прикол");
    }

    const editButton = (e) => {
    const data = e.target.data
    console.log(data)
    const editButton = e.target
    const buttonArea = document.getElementById('buttonArea')
    console.log(buttonArea);
    const parent = document.getElementById("noteCard");
    // console.log(parent);
    const title = document.getElementById("title");
    const titleText = title.textContent;
    // console.log(titleText);
    let headerCard = document.getElementById("cardInfo");
    // console.log(headerCard);
    headerCard.removeChild(title);
    const input = document.createElement("input");
    input.value = titleText;
    input.classList.add("changerInput");
    headerCard.prepend(input);
    const saveButton = document.createElement("button");
    saveButton.textContent = "Сохранить";
    saveButton.classList.add("save-btn");
    saveButton.addEventListener("onclick", saveButt())
    buttonArea.prepend(saveButton);
    editButton.remove();
      //   e.trueGangster.removeChild(title);
    };

    return (
      <img
        src=" /img/edit-btn.svg"
        onClick={editButton}
        alt=" #"
        className="edit-btn"
        data ={this.props.data}
      ></img>
    );
  }
}

export default EditButton;
