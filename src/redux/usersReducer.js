const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photos: {
    //     small: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvR2EmeDnAttbXXbBr_HtCX1qjGmUoSlP1_Q&usqp=CAU",
    //     large: null,
    //   },
    //   followed: true,
    //   name: "Dmitry K.",
    //   status: "I teach React JS",
    // },
    // {
    //   id: 2,
    //   photos: {
    //     small: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU",
    //     large: null,
    //   },
    //   followed: false,
    //   name: "Igor T.",
    //   status: "I study React JS",
    // },
    // {
    //   id: 3,
    //   photos: "",
    //   photos: {
    //     small: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU",
    //     large: null,
    //   },
    //   followed: true,
    //   name: "Maria Y.",
    //   status: "i work as a veterinarian",
    // },
  ],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};
export const followAc = (userId) => ({ type: FOLLOW, userId });
export const unfollowAc = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAc = (users) => ({ type: SET_USERS, users });
export default usersReducer;
