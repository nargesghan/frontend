import React from 'react';
import style from './Animation.module.css'

interface Props {
  name:string;
}

const Animation: React.FC<Props> = ({name}) => {
  return (
    <div >
 <p className={style.lineUp}>{name}</p>
  </div>
  );
}

export default Animation;