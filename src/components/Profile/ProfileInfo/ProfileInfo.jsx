import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={style.content}>
      <div className={style.image}>
        <img src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg" />
      </div>
      <div className={style.descriptionBlock}> ava +description</div>
    
    </div>
  );
};
export default ProfileInfo;
