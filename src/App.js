import React, { useState } from 'react';
import {
  Home, FileText, Users, Wrench,
  DollarSign, File, UserCheck, BarChart, Search,
  Calendar, ChevronDown, Plus, Trash, Settings, Bell
} from 'lucide-react';
import { FaUser as User } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-600 to-blue-700 shadow-lg transform transition-transform duration-300 ease-in-out">
        <nav className="p-6">
          <h1 className="text-2xl font-bold text-white mb-8">RentalPro</h1>
          <ul className="space-y-3">
            {[
              { icon: <Home className="w-6 h-6" />, label: 'Dashboard', active: true },
              { icon: <FileText className="w-6 h-6" />, label: 'Property Management' },
              { icon: <Users className="w-6 h-6" />, label: 'Occupants Management' },
              { icon: <Wrench className="w-6 h-6" />, label: 'Maintenance & Repairs' },
              { icon: <DollarSign className="w-6 h-6" />, label: 'Financial Management' },
              { icon: <File className="w-6 h-6" />, label: 'Compliance & Legal' },
              { icon: <UserCheck className="w-6 h-6" />, label: 'User Administration' },
              { icon: <BarChart className="w-6 h-6" />, label: 'Reporting & Analytics' }
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 ${
                    item.active
                      ? 'bg-blue-800 text-white shadow-md'
                      : 'text-blue-100 hover:bg-blue-800 hover:text-white hover:shadow-md'
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <button className="text-gray-600 hover:text-gray-800">
              <Bell className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Settings className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Occupancy Rate', value: '85%', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { label: 'Lease Expirations', value: '12', color: 'text-red-500', bg: 'bg-red-50' },
            { label: 'Overdue Rent', value: '$5,000', color: 'text-orange-500', bg: 'bg-orange-50' },
            { label: 'Maintenance Requests', value: '5', color: 'text-blue-500', bg: 'bg-blue-50' }
          ].map((stat, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-sm ${stat.bg}`}>
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className={`text-2xl font-bold ${stat.color} mt-2`}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* To-Do List */}
        {showToDoList && (
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">To-Do List</h2>
              <button
                onClick={() => setShowToDoList(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Trash className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {toDoItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    item.type === 'warning'
                      ? 'bg-yellow-50 text-yellow-700'
                      : item.type === 'error'
                      ? 'bg-red-50 text-red-700'
                      : item.type === 'info'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-green-50 text-green-700'
                  }`}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Property List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Properties</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Add Property
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Filter
              </button>
            </div>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="p-3">Name</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Villa A', location: 'Dubai', type: 'Residential', status: 'Occupied' },
                  { name: 'Apartment B', location: 'Abu Dhabi', type: 'Commercial', status: 'Vacant' }
                ].map((property, index) => (
                  <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="p-3">{property.name}</td>
                    <td className="p-3">{property.location}</td>
                    <td className="p-3">{property.type}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          property.status === 'Occupied'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {property.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                          View
                        </button>
                        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                          Edit
                        </button>
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
  );
};

export default RentalManagementSystem;