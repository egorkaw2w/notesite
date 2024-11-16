import React, { useEffect, useState } from "react";
import Jsoner from "./Jsoner"; // Убедитесь, что путь к файлу правильный
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import "../css/note.css";
import { event } from "jquery";

const Notes = ({ notes }) => {
  const dragButton = (event) => {
    event.preventDefault();
  };
const editButton = (event) => {
  event.preventDefault();

}
  const buttonJumping = (event) => {
    const button = event.target;

    button.classList.add("btn-up");

      setTimeout(() => {
        button.classList.remove("btn-up");
      }, 230);
    
  };

  return (
    <div className="container   ">
      <div className="row row-cols-2 gap-5">
        {notes.map((note, index) => (
          <div className="col-5 m-0">
            <Link to={`/notePage/${note.id}`}>
              <div
                className="col-12 tip-card p-4   d-flex  flex-column justify-content-between"
                key={index}
              >
                <div className="tip-header row justify-content-between">
                  <div className="col-6 tip-info">
                    <div className="col-12 tip-title"> {note.title} </div>
                    <div className="col-12 tip-description">
                      {note.description}
                    </div>
                  </div>
                  <div className="col-4 text-end p-0">
                    <img
                      src="/img/draggble.svg"
                      id="dragButton"
                      onClick={dragButton}
                      width="34px"
                      height="48px"
                    ></img>
                  </div>
                </div>
                <div className="tip-content row row-cols-2 justify-content-between">
                  <p className="tip-text col-9 mb-0">{note.content}</p>
                  <img
                    className="edit-btn ml-auto align-self-end col-3"
                    onMouseEnter={buttonJumping}
                    onClick={editButton}
                    src="/img/edit-btn.svg"
                  ></img>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
