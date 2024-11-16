import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Jsoner from "./Jsoner"; // Убедитесь, что путь к файлу правильный
import Header from "./Header";
import { Link } from "react-router-dom";


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

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Header title = {note.title} />
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <p>{note.content}</p>
<Link to = {"/"}>
        <button>назад</button>
  
</Link>    </div>
  );
};

export default NotePage;