import React from 'react';
import TopShowcase from './TopShowcase/TopShowcase';
import BottomShowcase from './BottomShowcase/BottomShowcase';
const Section = (props) => {
    return (
        <div className="flex flex-col items-start w-full min-h-screen col-span-4 lg:col-span-6 xl:col-span-8 bg-gray-800">
            <TopShowcase bgImg={props.bgUrl} heading={props.text}  />
            <BottomShowcase ukey={props.dkey} />
        </div>
    )
}

export default Section;
