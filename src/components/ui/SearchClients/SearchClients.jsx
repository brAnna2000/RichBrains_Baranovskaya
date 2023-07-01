import { search } from '../../../assets/img';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { setSearchResultAction } from '../../../reducers/searchResultReducer';

function SearchClients() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const clientsList = useSelector(state => state.clientsList.clientsList);

  useEffect(() => {
    const searchData = searchValue.toLowerCase().trim();
    if(searchData){
        const filter = clientsList.filter(client => {
          return client.name.toLowerCase().includes(searchData) || client.surname.toLowerCase().includes(searchData) && client;
        });
        dispatch(setSearchResultAction(filter));
        
    }else{
        dispatch(setSearchResultAction([]));
    }
  }, [searchValue]);

  return (
    <label>
        <img src={search} alt="search" />
        <input type="search" placeholder='Type to search...' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
    </label>
  );
}

export default SearchClients;