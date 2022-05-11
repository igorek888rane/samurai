import * as axios from "axios";
import React from "react";
import style from "./Users.module.css";
import avatar from "./../../assets/images/avatarDefault.png";

class Users extends React.Component {
  componentDidMount() {
    if(this.props.users.length === 0){
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.setUsers(response.data.items);
    });
    }
  }
  render() {
    return (
      <div className={style.users}>
        {this.props.users.map((user) => {
          return (
            <div className={style.user} key={user.id}>
              <div className={style.user_avatar}>
                <img src={user.photos.small ? user.photos.small : avatar} alt="" />
                <div className={style.button}>
                  {user.followed ? (
                    <button className={style.btn} onClick={() => this.props.unfollow(user.id)}>
                      Unfollow
                    </button>
                  ) : (
                    <button className={`${style.btn} ${style.followed_}`} onClick={() => this.props.follow(user.id)}>
                      Follow
                    </button>
                  )}
                </div>
              </div>
              <div className={style.user_info}>
                <div className={style.fullname}>
                  <span>{user.name}</span>
                </div>
                <div className={style.status}>
                  <span>{user.status ? user.status : "Hello "}</span>
                </div>
                <div className={style.location}>
                  <span>Russia</span>
                  <span>Moskow</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
