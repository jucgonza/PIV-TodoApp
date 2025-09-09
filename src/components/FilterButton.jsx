import FunnelIcon from '@heroicons/react/24/solid/FunnelIcon'

const FilterButton = ({children, id, activeFilter, changeFilter}) => {
    return (
        <button 
            className={ id === activeFilter 
                ? "border rounded-md transition-all duration-300 cursor-pointer px-2 py-1 bg-gray-100 border-gray-300 shadow-sm"
                : "p-0 border border-transparent rounded-md transition-all duration-300 cursor-pointer hover:px-2 py-1 hover:bg-gray-100 hover:border-gray-300 hover:shadow-sm" 
            }
            onClick={() => changeFilter(id)}>
            {id === activeFilter && <FunnelIcon className="size-3 text-gray-500 inline-block me-1"/>}
            <span>{children}</span>
        </button>
    )
}

export default FilterButton
