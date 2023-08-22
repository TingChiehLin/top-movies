import React, { FC } from 'react';

interface SocialGroupTypeProp {title: string,children: React.ReactElement}

const SocialGroup:FC<SocialGroupTypeProp> = ({title, children}) => {
    return (
      <div className='flex justify-between align-center'>
        <span className={`text-lg ${"mb-4"}`}>{title}</span>
        {children}
      </div>
    )
  }

  export default SocialGroup;