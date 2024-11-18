import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Jsoner from "./Jsoner"; // Убедитесь, что путь к файлу правильный
import Header from "./Header";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/notePage.css"


const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const jsoner = new Jsoner({ jsonData: "/notes.json" });
    jsoner.jsonReader().then((data) => {
      const foundNote = data.find(note => note.id === parseInt(id));
      setNote(foundNote);
    });
  }, [id]);

  
  const editButton = (event) => {
    console.log("вы начинаете редактирование данной статьи")
  const card = document.getElementById("noteCard")
  const title = card.getElementsByTagName("title")
  // const description = card.getElementById("description")
  // const content = card.getElementById("content")
  // console.log(title, description, content)
  console.log(title.content)

  }

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div className="  " id="noteCard">
      <Header title={note.title} />
      <div className="container note-card-info d-flex flex-column  p-5 mt-4">
        <h1 className="text-center title" id="title">{note.title}</h1>
        <p className="description text-center" id="description">{note.description}</p>
        <p className="" id="content">{note.content}</p>

<div className="row row-cols-2 justify-content-between">
          <img src=" /img/edit-btn.svg" onClick={editButton} alt=" " className="edit-btn"></img>
          <Link className="text-end" to={"/"}>
            <button className="back-btn p-2 ">назад</button>
  
          </Link>
</div>
      </div>
    </div>
  );
};

export default NotePage;