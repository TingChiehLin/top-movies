import React, { FC } from 'react';

interface SocialGroupTypeProp {title: string, href: string,children: React.ReactElement}

const SocialGroup:FC<SocialGroupTypeProp> = ({title, href, children}) => {
    return (
      <div className='flex justify-between align-center'>
        <span className="text-lg text-slate-950">{title}</span>
        <a href={href} target="_blank" rel={"noopener noreferrer"}>
          {children}
        </a>
      </div>
    )
  }

  export default SocialGroup;