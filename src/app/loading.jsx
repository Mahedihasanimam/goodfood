import Image from 'next/image';
import React from 'react';

const loading = () => {
    return (
        <div className='flex items-center justify-center'>
            <Image className='' height={200} width={200} src={"/asets/loading.gif"}/>
        </div>
    );
};

export default loading;