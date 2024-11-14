import React, { useState, useEffect } from "react";
import axios from "axios";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;

  useEffect(() => {
    const skip = (currentPage - 1) * usersPerPage; // Calculate the `skip` value
    axios
      .get(`http://127.0.0.1:8000/users?skip=${skip}&limit=${usersPerPage}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("There was an error fetching users!", error));
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 ">User List</h1>
      <table className="table table-striped table-hover table-sm">
        <thead className="table-dark">
          <tr>
            <th className="small">Name</th>
            <th className="small">Mobile</th>
            <th className="small">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="small">{user.name}</td>
              <td className="small">{user.mobile}</td>
              <td className="small">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="align-self-center small">Page {currentPage}</span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={users.length < usersPerPage} // Disable if fewer than 15 users are fetched
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserTable;
