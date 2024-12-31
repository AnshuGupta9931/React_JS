import React from 'react';

function Photo({ url }) {
    return (
        <div className="flex items-center justify-center w-full">
            <img src={url} alt="Currency-related visual" className="rounded-lg object-cover" />
        </div>
    );
}

export default Photo;
