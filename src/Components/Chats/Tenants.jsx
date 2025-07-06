import React, { useState } from 'react';
import './Tenants.css';
import { tenants_list } from '../../../tenants_list';

const Tenants = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTenants = tenants_list.filter((tenant) =>
    tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tenant.apartment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='agents'>
      <div className="agent-container">
        <h3>Tenant Chats</h3>
        <input
          type="text"
          placeholder="Search by name or apartment..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        /><br /><br />
        <ul>
          {filteredTenants.map((tenant) => (
            <li key={tenant.id}>
              <img src={tenant.image} alt={tenant.name} className='agent-img' />
              <div className="agent-info">
                <h3>{tenant.name}</h3>
                <p>{tenant.location}</p>
                <small>{tenant.rentDuration}</small><br />
                <span className={`status ${tenant.status.toLowerCase().replace(" ", "-")}`}>
                  {tenant.status}
                </span>
              </div>
            </li>
          ))}
          {filteredTenants.length === 0 && <p className="no-results">No tenants found.</p>}
        </ul>
      </div>
    </div>
  );
};

export default Tenants;
