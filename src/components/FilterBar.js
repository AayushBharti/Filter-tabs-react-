import React from 'react';

const FilterBar = ({filterData}) => {
  return (
    <div>
        {
            filterData.map( (data) => {
                return (
                    <button>
                        {data.title}
                    </button>
                )
            })
        }
    </div>
  )
}

export default FilterBar;