import React from 'react';
import "./styles.css"

import { AppContext, EventContext} from '../../AppContext';

export default function SearchInput() {
    const appContext = React.useContext(AppContext);
    const eventContext = React.useContext(EventContext);
    return (
        <input className="input"
        value={appContext.searchText}
        onChange={eventContext.onSearchInputChange}
        />
    )
}