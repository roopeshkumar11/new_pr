// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch users from backend API
//     axios.get('http://localhost:8080/api/user/get')
//       .then(response => {
//         setUsers(response.data.ans);  // Set users data
//         console.log(response.data); // Optional: for debugging
//         setLoading(false);        // Stop loading
//       })
//       .catch(err => {
//         setError(err.message || 'Failed to fetch users'); // Handle errors
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading users...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
//       <h2 className="text-2xl font-bold mb-4">User List</h2>
//       <table className="min-w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
//             <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
//             <th className="border border-gray-300 px-4 py-2 text-left">Password</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length === 0 ? (
//             <tr>
//               <td colSpan="3" className="text-center py-4">
//                 No users found.
//               </td>
//             </tr>
//           ) : (
//             users.map(user => (
//               <tr key={user.id || user.phone}>
//                 <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
//                 <td className="border border-gray-300 px-4 py-2">{user.username}</td>
//                 <td className="border border-gray-300 px-4 py-2">{user.password}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:8080/api/user/get', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setUsers(response.data.ans);  // Adjust if your response shape differs
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading users...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center py-4">No users found.</td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id || user.phone}>
                <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                <td className="border border-gray-300 px-4 py-2">{user.password}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
