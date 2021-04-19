import {DotsHorizontalIcon, HeartIcon, ReplyIcon, ShareIcon, SwitchHorizontalIcon} from "@heroicons/react/outline";
import {TweetAction} from "~/ui/TweetAction";

export function Card() {
    return (
        <div className='dark:hover:bg-gray-800 hover:bg-gray-200 px-3 py-2 space-x-4 cursor-pointer flex items-start'>
            <div>
                <div className='bg-blue-500 h-12 w-12 rounded-full'/>
            </div>
            <div className='flex-1 space-y-2'>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-2 text-sm '>
                        <a href="#" className='group flex space-x-2 items-center'>
                            <div className='font-semibold group-hover:underline'>name</div>
                            <div className='text-gray-500'>username</div>
                        </a>
                        <div className='text-gray-500'>date</div>
                    </div>
                    <div className='text-gray-500'>
                        <DotsHorizontalIcon className='w-4 h-4'/>
                    </div>
                </div>
                <div>tweet text</div>
                <div className='grid grid-cols-4'>
                        <TweetAction icon={ReplyIcon} count={5}/>
                        <TweetAction icon={SwitchHorizontalIcon} count={10} color='green'/>
                        <TweetAction icon={HeartIcon} color='red' count={15}/>
                        <TweetAction icon={ShareIcon} />
                </div>
            </div>
        </div>
    )
}