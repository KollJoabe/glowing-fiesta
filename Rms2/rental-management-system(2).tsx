import React, { useState } from 'react';
import {
  Home, FileText, Users,
  DollarSign, File, UserCheck, BarChart, Search,
  Calendar, ChevronDown, Plus, Trash
} from 'lucide-react';
import { FaCog as Settings, FaBell as Bell, FaUser as User } from 'react-icons/fa';

const RentalManagementSystem = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [showToDoList, setShowToDoList] = useState(true);

  const toDoItems = [
    { type: 'warning', text: '6 lease agreements expiring this month', count: 6 },
    { type: 'error', text: '3 overdue maintenance requests', count: 3 },
    { type: 'info', text: '2 new rental applications pending review', count: 2 },
    { type: 'success', text: '4 properties due for inspection', count: 4 }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Rental Management System</h1>
          <div className="flex space-x-4">
            <Settings size="1.5rem" color="gray" style={{ cursor: 'pointer' }} />
            <Bell size="1.5rem" color="gray" style={{ cursor: 'pointer' }} />
            <User style={{ width: '1.5rem', height: '1.5rem', color: 'gray', cursor: 'pointer' }} />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-600 text-white min-h-screen">
          <nav className="p-4 space-y-2">
            {[
              { icon: <Home className="w-5 h-5" />, label: 'Dashboard', active: true },
              { icon: <FileText className="w-5 h-5" />, label: 'Property Management' },
              { icon: <Users className="w-5 h-5" />, label: 'Occupants Management' },
              { icon: <Tool className="w-5 h-5" />, label: 'Maintenance & Repairs' },
              { icon: <DollarSign className="w-5 h-5" />, label: 'Financial Management' },
              { icon: <File className="w-5 h-5" />, label: 'Compliance & Legal' },
              { icon: <UserCheck className="w-5 h-5" />, label: 'User Administration' },
              { icon: <BarChart className="w-5 h-5" />, label: 'Reporting & Analytics' }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                  item.active ? 'bg-blue-700' : 'hover:bg-blue-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Search and Filter */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search properties, occupants, or maintenance requests" 
                  className="w-full p-2 pl-10 border border-gray-300 rounded"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
            <div className="w-48">
              <select 
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Select City</option>
                <option value="dubai">Dubai</option>
                <option value="abu-dhabi">Abu Dhabi</option>
              </select>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Add Property
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Occupancy Rate', value: '85%', color: 'text-emerald-500' },
              { label: 'Lease Expirations', value: '12', color: 'text-red-500' },
              { label: 'Overdue Rent', value: '$5,000', color: 'text-orange-500' },
              { label: 'Maintenance Requests', value: '5', color: 'text-blue-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className={`text-2xl font-bold ${stat.color} mt-2`}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* To-Do List */}
          {showToDoList && (
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold">To-Do List</h2>
                <button 
                  onClick={() => setShowToDoList(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-2">
                {toDoItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg ${
                      item.type === 'warning' ? 'bg-yellow-50 text-yellow-700' :
                      item.type === 'error' ? 'bg-red-50 text-red-700' :
                      item.type === 'info' ? 'bg-blue-50 text-blue-700' :
                      'bg-green-50 text-green-700'
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Property List */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Properties</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
                  <Calendar className="w-5 h-5" />
                </button>
                <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
                  Filter
                </button>
              </div>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="p-2">Name</th>
                    <th className="p-2">Location</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Villa A', location: 'Dubai', type: 'Residential', status: 'Occupied' },
                    { name: 'Apartment B', location: 'Abu Dhabi', type: 'Commercial', status: 'Vacant' }
                  ].map((property, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="p-2">{property.name}</td>
                      <td className="p-2">{property.location}</td>
                      <td className="p-2">{property.type}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          property.status === 'Occupied' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {property.status}
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">View</button>
                          <button className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RentalManagementSystem;

