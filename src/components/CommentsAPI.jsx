import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentsAPI = () => {
  let [commentsAPI, setCommentsAPI] = useState([]);
  let [commentsModal, setCommentsModal] = useState([]);

  useEffect(() => {
    let resp = axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((data) => {
        setCommentsAPI(data.data);
      });
  }, []);
  return (
    <div className="text-center p-5">
      <h1 className="text-center text-white">CommentsAPI</h1>
      <div
        className="modal"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{commentsModal.name}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <p className="text-center fw-bold">{commentsModal.email}</p>
              <p>{commentsModal.body}</p>
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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Body</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {commentsAPI.map((data) => {
            const { id, name, email, body } = data;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{body}</td>
                <td>
                  <button
                    onClick={() => {
                      setCommentsModal(data);
                    }}
                    type="button"
                    className="btn btn-outline-info rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
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

export default CommentsAPI;
