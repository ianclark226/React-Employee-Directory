import React from 'react';

import data from '../../data.json';
import TableRow from './components/TableRow/tableRow';
import TableHeader from './components/TableHeader/tableHeader';
import { EventContext } from './tableContext';

export default function Table() {
  const handleTableHeaderClick = (event) => {
      console.log(event.current);

  }

  const EventContext = {
      onTableHeaderClick: handleTableHeaderClick
  };

  return (
      <EventContext.Provider value= {} >
    <table border={1}>
      <thread>
        <tr>
            <TableHeader 
            text="Name"
            sort={}
            />
             <TableHeader 
            text="Email"
            />
             <TableHeader 
            text="Phone"
            />
             <TableHeader 
            text="Nationality"
            />
        
        </tr>
      </thread>
      <tbody>
        {data.map((person) => (
        <TableRow
        key={person.phone}
        person={person}
        />
        ))
        }
      </tbody>
    </table>
    </EventContext.Provider>
  )
}
