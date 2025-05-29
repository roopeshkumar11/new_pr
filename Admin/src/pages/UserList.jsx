import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/user/get')
      .then(response => {
        setUsers(response.data.ans); // Make sure this is correct shape
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Failed to fetch users');
        console.log(err.message);
        setLoading(false);
      });
  }, []);


  const userdelete=async(id)=>{
    try {
      const reponse=axios.delete(`http://localhost:8080/api/admin/delete/${id}`)
       .then(response => {
        alert("User deleted successfully",response.data.message)
       
      })
       UserList()
     
    } catch (error) {
      alert("Error deleting user:",response.message)

      
    }

  }

  if (loading) return <p className="text-center mt-10">Loading users...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="text-black max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Password</th>
             <th className="border border-gray-300 px-4 py-2 text-left">Delete user</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4">No users found.</td>
            </tr>
          ) : (
            users.map((user, index) => (
             
              <tr key={`${user.phone}-${user.username}-${index}`}>
              
                <td className=" border border-gray-300 px-4 py-2">{user.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                <td className="border border-gray-300 px-4 py-2">{user.password}</td>
                <td><button  onClick={()=>userdelete(user._id)}  className=" bg-blue border border-gray-300 px-4 py-2 ">Delete  user</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
