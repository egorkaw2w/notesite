import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Jsoner from "./components/Jsoner"; // Убедитесь, что путь к файлу правильный
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

const MainPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const json = new Jsoner({ jsonData: "/notes.json" });
    json.jsonReader().then((data) => {
      setNotes(data);
    });
  }, []);

  return (
    <div>
      <Header title="Заметошная" />
      <Notes notes={notes} />
    </div>
  );
};

export default MainPage;
