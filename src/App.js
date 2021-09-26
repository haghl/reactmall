import './App.css';
import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function App() {
  let history = useHistory();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="loginform">
            <form action="" method="get">
              <p><label htmlFor="loginid">아이디:</label><input type="text" id="loginid"/></p>
              <p><label htmlFor="loginpw">비밀번호:</label><input type="password" id="loginpw" /></p>
              <button className="loginBtn" type="submit">로그인</button>
            </form>
          </div>
          <button className="newbiBtn" onClick={()=>{history.push('/member')}}>회원가입</button>
        </Route>

        <Route path="/member">
          <Member history={history}/>
        </Route>
      </Switch>

    </div>
  );
}

function Member(props){
  let [inputid,inputid_c] = useState('');
  let [inputpw,inputpw_c] = useState('');

  function newmember(){
    let info = {id : inputid, pw : inputpw};
    localStorage.setItem('user',JSON.stringify(info));
    if(!inputid == ""&& !inputpw == ""){
      props.history.push('/');
    }
  }

  return(
    <div className="membership">
      <p>회원가입</p>
      <form action="">
        <p>
          <label htmlFor="memberid">아이디</label>
          <input type="text" required id="memberid" onChange={(e)=>{inputid_c(e.target.value)}} />
        </p>
        <p>
          <label htmlFor="memberpw">비밀번호</label>
          <input type="password" required id="memberpw" onChange={(e)=>{inputpw_c(e.target.value)}} />
        </p>

        <button type="submit" onClick={()=>{newmember();}}>회원가입</button>
      </form>
    </div>
  )
}

export default App;
