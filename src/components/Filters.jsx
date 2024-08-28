import React, { useState, useEffect } from 'react';

const Filters = ({ users, setFilteredUsers, searchTerm, setSearchTerm }) => {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [nationalities, setNationalities] = useState([]);

  // Extract unique nationalities dynamically from user data
  useEffect(() => {
    const uniqueNationalities = [...new Set(users.map(user => user.nationality))];
    setNationalities(uniqueNationalities);
  }, [users]);

  // Handle filtering logic
  const handleFilter = () => {
    let filtered = users;

    if (selectedGender) {
      filtered = filtered.filter(user => user.gender === selectedGender);
    }

    if (selectedNationality) {
      filtered = filtered.filter(user => user.nationality === selectedNationality);
    }

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  };

  // Trigger filtering when filter options change
  useEffect(() => {
    handleFilter();
  }, [selectedGender, selectedNationality, searchTerm]);

  return (
    <div className="flex space-x-4 mb-4">
      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or email"
        className="p-2 border rounded"
      />

      {/* Gender Filter */}
      <select
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Filter by Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        {/* Add more gender options if needed */}
      </select>

      {/* Dynamic Nationality Filter */}
      <select
        value={selectedNationality}
        onChange={(e) => setSelectedNationality(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Filter by Nationality</option>
        {nationalities.map((nationality) => (
          <option key={nationality} value={nationality}>
            {nationality}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
