import axios from "axios";
import React, { useEffect, useState } from "react";

const TodosAPI = () => {
  let [todosAPI, setTodosAPI] = useState([]);
  let [todosModal, setTodosModal] = useState([])

  useEffect(() => {
    let resp = axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((data) => setTodosAPI(data.data));
  }, []);

  return (
    <div className="text-center p-5">
      <h1 className="text-center text-white">TodosAPI</h1>
      <div
        className="modal"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{todosModal.id}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{todosModal.title}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {todosAPI.map((data) => {
            const { id, title, body } = data;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>
                  <button
                    onClick={() => {
                      setTodosModal(data);
                    }}
                    type="button"
                    className="btn btn-outline-info rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodosAPI;
