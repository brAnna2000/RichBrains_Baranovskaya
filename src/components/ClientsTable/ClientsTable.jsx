import ClientCard from '../ClientCard/ClientCard';

import { SET_CLIENTS_LIST } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import axios from 'axios';
import './ClientsTable.css';

function ClientsTable() {
  const dispatch = useDispatch();
  const clientsData = useSelector(state => state.clientsList);
  const searchResult = useSelector(state => state.searchResult);

  useEffect(() => {
    axios.get('http://localhost:3333/clients')
      .then((response) =>  dispatch({type: SET_CLIENTS_LIST, clientsListData: response.data.clients}))
      .catch((error) => console.log(error));
  },[]);
  const cardsList = [];
  const dataSource = searchResult.length ? searchResult : clientsData;

  for (let i = 0; i < dataSource.length; i++) {
    if(dataSource[i]){
      cardsList.push(
        <ClientCard
          key={dataSource[i].id} 
          data={dataSource[i]}
        />
      ); 
    }
  }
    
  return (
    <div className="clientsTable">
        {clientsData.length && cardsList}
    </div>
  );
}

export default ClientsTable;