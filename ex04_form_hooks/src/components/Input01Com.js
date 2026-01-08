const Input01com = ( {onChange2, onSubmit01, input} ) => {
    //button에 type이없으면 submit 역할을 함.
    //input = {username:"연습", addr : ""}

    return (<>
    <form onSubmit={onSubmit01} action="https://www.naver.com">
      <input type="text" value={input.username} name="username" onChange={onChange2} />
      <br />
      <input type="text" value={input.addr} name="addr" onChange={onChange2} />
      <br />
      <input type="submit" value="input" />
      <input type="button" value="input" />
      <button type="button">btn</button>
      <button type="submit">btn</button>
      <button>btn</button> 
    </form>
  </>)
}
export default Input01com;