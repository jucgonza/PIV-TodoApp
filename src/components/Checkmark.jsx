import StopIcon from '@heroicons/react/24/outline/StopIcon'
import CheckIcon from '@heroicons/react/24/outline/CheckIcon'

const Checkmark = ({checked}) => {
  return (
    <div className="w-[26px] h-[26px] relative flex-none">
        <StopIcon className="w-full group-hover:text-gray-500" />
        {checked && 
            <CheckIcon className="size-3 stroke-4 group-hover:text-gray-500 absolute top-1/2 left-1/2 -translate-1/2" />
        }
    </div>
  )
}

export default Checkmark
