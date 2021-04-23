import ActionButton from './ActionButton/ActionButton';
import {HeartIcon} from '@heroicons/react/outline';
import {StarIcon} from '@heroicons/react/outline';
import {ClockIcon} from '@heroicons/react/outline';

const Actions = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full space-y-4">
            <ActionButton action="Top Tracks">
                <HeartIcon className="h-10 w-12 text-gray-900 group-hover:text-green-400" />
            </ActionButton>
            <ActionButton action="Top Artists">
                <StarIcon className="h-10 w-12 text-gray-900 group-hover:text-green-400" />
            </ActionButton>
            <ActionButton action="History">
                <ClockIcon className="h-10 w-12 text-gray-900 group-hover:text-green-400" />
            </ActionButton>
        </div>
    )
}

export default Actions
