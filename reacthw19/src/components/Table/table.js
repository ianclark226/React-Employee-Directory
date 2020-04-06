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

  let sortedData = [...data];
  if(sortBy) {
      switch (sortBy) {
          case "Name":
            sortedData = sortedData.sort((a, b) => {
                const aName = `${a.name.first} ${a.name.last}`;
                const bName = `${b.name.first} ${b.name.last}`;
                return aName.localeCompare(bName);
            })
          break;
          case "Email":
              sortedData = sortedData.sort((a, b) => a.email.localeCompare(b.email));

            break;
            case "Phone":
                sortedData = sortedData.sort((a, b) => a.phone.localeCompare(b.phone));

                break;
                case "Nationality":
                    sortedData = sortedData.sort((a, b) => a.nat.localeCompare(b.nat));

                    break;


          default:
              break;
      }
  }

  return (
      <TableContext.Provider value= {tableContext} >
        <EventContext.Provider value= {eventContext} >
    <table border={1}>
      <thread>
        <tr>
            <TableHeader 
            text="Name"
            
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
        {sortedData.map((person) => (
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
