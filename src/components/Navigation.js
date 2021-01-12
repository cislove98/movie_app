import React from "react";
import {Link} from "react-router-dom";
import "./reset.css";
import "./Navigation.css";

function Navigation(){
    return <div class="nav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
}

/*
<a href="URL">을 사용한다면 이것은 html이기 때문에 모든 화면을 죽이고 새로고침 해버린다.
그로인해 react가 재실행되어서 로딩이 다시 되는 문재가 발생한다. 
따라서 이를 해결하기 위해 Link를 통해 전체 화면을 죽이지 않고 URL을 변환 할 수 있도록 한다.
이때 우리는 Link를 router밖에서 사용할 수 없다. 따라서 <HashRouter>안에 사용해야 한다.
하지만 모든것을 router안에서 할 필요는 없다. 
*/
/*
...여기서 우리는 다른 route가 가진 props를 전달할 수 있다.
<Link to={{
  pathname="/about"
  state:{
    fromNavigation:true
  }
}}
>
</Link>
이렇게 해줌으로서 우리는 props를 전달하는 것이 가능하다.
*/


export default Navigation;