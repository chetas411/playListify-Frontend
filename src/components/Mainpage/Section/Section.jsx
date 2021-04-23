import React from 'react';
import TopShowcase from './TopShowcase/TopShowcase';

const Section = () => {
    return (
        <div className="h-screen col-span-4 lg:col-span-6 xl:col-span-8 bg-gray-800">
            <TopShowcase />
            {/* BottomShowcase */}
        </div>
    )
}

export default Section;
