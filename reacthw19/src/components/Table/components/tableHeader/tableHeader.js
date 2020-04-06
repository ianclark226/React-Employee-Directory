import React from 'react';
import { EventContext, TableContext } from '../../tableContext';

export default function TableHeader(props) {
    const tableContext = React.useContext(TableContext);
    const EventContext = React.useContext(EventContext);

    console.log(context);

     const {
         text
     } = props;

     const {
        sortBy,
     }= tableContext;

     return (
         <th
         data-id={text}
         onClick ={ context.onTableHeaderClick }
         >
             {text}
             { sortBy === text && 'sorted'}
             </th>
     )
}