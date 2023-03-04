import React from 'react';
// Importing component
import Posting from './Posting';
// Component
const Gallery = (props) => {
    return (
        <div className='gallery'>
            {
                // Looping through data passed as props
                props.data.map((posting, i) => {
                    return (
                        // Returning posting component with data
                        <Posting data={posting} index={i} />
                    )
                })
            }
        </div>
    )
};
export default Gallery;