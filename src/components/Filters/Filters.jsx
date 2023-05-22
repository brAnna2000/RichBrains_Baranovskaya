import SortClients from '../ui/SortClients/SortClients';
import SearchClients from '../ui/SearchClients/SearchClients';

import './Filters.css';

function Filters(){
  return (
    <div className="filters">
        <SearchClients/>
        <SortClients/>
    </div>
  );
}

export default Filters;