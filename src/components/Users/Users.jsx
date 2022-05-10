import React from "react";
import style from "./Users.module.css";

let Users = (props) => {
    if(props.users.length===0){
      props.setUsers([
        {
          id: 1,
          avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvR2EmeDnAttbXXbBr_HtCX1qjGmUoSlP1_Q&usqp=CAU",
          followed: true,
          fullname: "Dmitry K.",
          status: "I teach React JS",
          location: { city: 'Minsk', country: 'Belarus' },
        },
        {
          id: 2,
          avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU",
          followed: false,
          fullname: "Igor T.",
          status: "I study React JS",
          location: { city: 'Pyatigorsk', country: 'Russia' },
        },
        {
          id: 3,
          avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU",
          followed: true,
          fullname: "Maria Y.",
          status: "i work as a veterinarian",
          location: { city: 'Pyatigorsk', country: 'Russia' },
        },
      ])
    }
  return (
    <div className={style.users}>
      {props.users.map((user) => {
        return (
          <div className={style.user} key={user.id}>
            <div className={style.user_avatar}>
              <img src={user.avatarImg} alt="" />
              <div className={style.button}>
                {user.followed 
                ? <button className={style.btn} onClick ={()=>props.unfollow(user.id)}>Unfollow</button>
                : <button className={`${style.btn} ${style.followed_}`} onClick ={()=>props.follow(user.id)}>Follow</button>
                }
              </div>
            </div>
            <div className={style.user_info}>
              <div className={style.fullname}>
                <span>{user.fullname}</span>
              </div>
              <div className={style.status}>
                <span>{user.status}</span>
              </div>
              <div className={style.location}>
                <span>{user.location.country}, </span>
                <span>{user.location.city} </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Users;
