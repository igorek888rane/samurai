let initialState = {
  news: [
    {
      img: "https://sun2-9.userapi.com/impf/AbYGMKr-6Jw5Tz0GtUaQAwf2FD8A9l4ZFPAUZQ/ekAoLQm28BY.jpg?size=537x240&quality=96&sign=525cb5a00e89a7b4230581a1be58e048&type=share",
      text: "В Малайзии готовы рассмотреть вопрос поставок электроники в Россию",
      likesCount: 10,
    },
    {
      img: "https://sun2-4.userapi.com/impf/U-Xr5sv87oeHT_bmfKDlBmI8hdEt9aClQ-IGtQ/LZ4D1d_sHWA.jpg?size=537x240&quality=96&crop=0,0,968,433&sign=c33b1a49a90a3ef955bace207bcef94e&type=share",
      text: "Микрон» надеется подрасти",
      likesCount: 4,
    },
    {
      img: "https://sun9-62.userapi.com/impg/zHAakPA6CVPQYkx_tr9vf6mLPDHmlxNvnJBkjA/vK0N7IUa4DY.jpg?size=537x240&quality=96&sign=1baa2cb3ca2882442f3206b83463771c&type=share",
      text: "У главного разработчика российских ARM-процессоров выручка рванула вверх. Рост более 1000%",
      likesCount: 40,
    },
  ],
}
const newsPageReducer = (state = initialState,action) => {
  return state;
};
export default newsPageReducer;
