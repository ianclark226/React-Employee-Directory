import React from 'react';

import data from '../../data.json';
import TableRow from './components/TableRow/tableRow';
import TableHeader from './components/TableHeader/tableHeader';
import { EventContext, TableContext } from './tableContext';

export default function Table() {
    const [sortBy, setSortBy] = React.useState();
  const handleTableHeaderClick = (event) => {
      const target = event.currentTarget;
      const id = target.getAttribute('id');

      setSortBy(id);
      

  }

  const tableContext = {
      sortBy,
  }

  const EventContext = {
      onTableHeaderClick: handleTableHeaderClick
  };

  return (
      <TableContext.Provider value= {tableContext} >
        <EventContext.Provider value= {eventContext} >
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
    </TableContext.Provider>
  )
}
