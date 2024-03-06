import React from 'react';


// always use any key while using maps 
const FilterBar = ({filterData}) => {
  return (
    <div>
        {
            filterData.map( (data) => {
                return (
                    
                    <button key={data.id}>
                        {data.title}
                    </button>
                )
            })
        }
    </div>
  )
}

export default FilterBar;