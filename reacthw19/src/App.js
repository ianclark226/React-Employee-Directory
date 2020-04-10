import React from 'react';
import Header from './components/Header/header';
import Table from './components/Table/table';
import SearchInput from './components/Searchinput/searchinput';
import { AppContext, EventContext } from './AppContext';




export default function App() {
  const [searchText, setSearchText] = React.useState('');

  const handleSearchInputChange = (event) => {
    

    setSearchText(event.currentTarget.value);
  }

  const appContext = {
    searchText,
  }

  const eventContext = {
    onSearchInputChange: handleSearchInputChange,
  }

  return (
    <div className="navbar">
    <AppContext.Provider value = {appContext}>
      <EventContext.Provider value = {eventContext}>
    <div>
      <Header />
      <SearchInput />
      <Table />
    </div>
    </EventContext.Provider>
    </AppContext.Provider>
    </div>
    

  );
}
 
