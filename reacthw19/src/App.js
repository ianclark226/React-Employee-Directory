import React from 'react';
import Header from './components/Header/header';
import Table from './components/Table/table';
import SearchInput from './components/Searchinput/searchinput';
import { AppContext } from './AppContext';
import { EventContext } from './components/Table/tableContext';


export default function App() {
  const [searchText, setSearchText] = React.useState('');

  const handleSearchInputChange = (event) => {
    

    setSearchText(event.currentTarget.value);
  }

  const AppContext = {
    searchText,
  }

  const eventContext = {
    onSearchInputChange: handleSearchInputChange,
  }

  return (
    <AppContext.Provider value = {appContext}>
      <EventContext.Provider value = {eventContext}>
    <div>
      <Header />
      <SearchInput />
      <Table />
    </div>
    </EventContext.Provider>
    </AppContext.Provider>
    

  );
}
 
