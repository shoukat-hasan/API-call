import axios from "axios";
import React, { useEffect, useState } from "react";

const UserAPI = () => {
  let [userAPI, setUserAPI] = useState([]);
  let [userModal, setUserModal] = useState([]);

  useEffect(() => {
    let resp = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUserAPI(data.data);
      });
  }, []);
  return (
    <div className="text-center p-5">
      <h1 className="text-center text-white">UserAPI</h1>
      <div
        className="modal"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{userModal.name}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p className="text-center fw-bold">{userModal.email}</p>
              <p>{userModal.phone}</p>
              <p className="border">
                name: {userModal.company?.name}
                <br />
                catchPhrase: {userModal.company?.catchPhrase}
                <br />
                bs: {userModal.company?.bs}
              </p>
              <p className="fw-bold">{userModal.website}</p>
              <p className="border">
                Street: {userModal.address?.street}
                <br />
                Suite: {userModal.address?.suite}
                <br />
                City: {userModal.address?.city}
                <br />
                Zipcode: {userModal.address?.zipcode}
              </p>
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
            <th scope="col">Phone</th>
            <th scope="col">Company</th>
            <th scope="col">Website</th>
            <th scope="col">Address</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {userAPI.map((data) => {
            const { id, name, email, phone, website, address, company } = data;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  name: {company?.name}
                  <br />
                  catchPhrase: {company?.catchPhrase}
                  <br />
                  bs: {company?.bs}
                </td>
                <td>{website}</td>
                <td>
                  Street: {address?.street}
                  <br />
                  Suite: {address?.suite}
                  <br />
                  City: {address?.city}
                  <br />
                  Zipcode: {address?.zipcode}
                </td>
                <td>
                  <button
                    onClick={() => {
                      setUserModal(data);
                    }}
                    type="button"
                    className="btn btn-outline-info rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
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

export default UserAPI;
