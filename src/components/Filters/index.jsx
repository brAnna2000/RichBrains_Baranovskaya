import SortClients from '../ui/SortClients';
import SearchClients from '../ui/SearchClients';

import './index.css';

function Filters(){
  return (
    <div className="filters">
        <SearchClients/>
        <SortClients/>
    </div>
  );
}

export default Filters;