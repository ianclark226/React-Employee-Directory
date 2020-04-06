import React from "react";

import data from "../../data.json";
import TableRow from "./components/TableRow/tableRow";

export default function Table() {
  console.log(data);
  return (
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
        {data.map((person) => (
        <TableRow
        key={person.phone}
        person={person}
        />
        ))
        }
      </tbody>
    </table>
  )
}
