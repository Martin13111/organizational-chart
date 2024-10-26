// import React from "react";
// import { connection } from "next/server";
// import { fetchUsers } from "@/lib/fetchUsers";

// export default async function Users() {
//   await connection();
//   const data = await fetchUsers();
  
//   return (
//     <div className="w-full mt-8">
//       <h2 className="text-xl font-semibold mb-4">User List</h2>
//       {data.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((user) => (
//             <div
//               key={user.id}
//               className="bg-white shadow-lg rounded-lg p-4 text-center"
//             >
//               <div className="font-bold text-lg">{user.name}</div>
//               <div className="text-gray-600">{user.position}</div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-gray-500">No users found.</div>
//       )}
//     </div>
//   );
// }
