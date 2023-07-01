import ClientCard from '../ClientCard/ClientCard';

import { setClientsListAction } from '../../reducers/clientsListReducer';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import axios from 'axios';
import './ClientsTable.css';

function ClientsTable() {
  const dispatch = useDispatch();
  const clientsData = useSelector(state => state.clientsList.clientsList);
  const searchResult = useSelector(state => state.searchResult.searchResult);

  useEffect(() => {
    axios.get('http://localhost:3333/clients')
      .then((response) =>  dispatch(setClientsListAction(response.data.clients)))
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
        {!!clientsData.length && cardsList}
    </div>
  );
}

export default ClientsTable;