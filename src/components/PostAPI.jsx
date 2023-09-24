import axios from "axios";
import React, { useEffect, useState } from "react";

const PostAPI = () => {
  let [postAPI, setPostAPI] = useState([]);
  let [modalData, setModalData] = useState([]);

  useEffect(() => {
    let resp = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setPostAPI(data.data));
  }, []);

  return (
    <div className="text-center p-5">
      <h1 className="text-white">PostAPI</h1>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalData.title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{modalData.body}</p>
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
            <th scope="col">Body</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {postAPI.map((data) => {
            const { id, title, body } = data;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{body}</td>
                <td>
                  <button
                    onClick={() => {
                      setModalData(data);
                    }}
                    type="button"
                    className="btn btn-outline-info rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
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

export default PostAPI;
