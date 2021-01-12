
import React from "react";
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./reset.css";
import "./App.css";

function App(){
  return <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home} />    
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
}

export default App;
//<HashRouter> - route를 만드는 것이다
//<Route path="" component={}> Route안에는 2가지 props가 들어간다. URL과 render할 screen이 들어간다
/*
route의 작동 방식은 URL을 가져와서 비교하는 방식이다.
따라서 만약 /home과 /home/intro라는 URL이 code에 있다면 router는 
/home과 매치 되고 또한 /home/intro와 매치됨으로 2개를 redering한다.
그로인해 화면에는 2개의 screen이 동시에 rendering되는 것이다.
*/
/*
위의 사례를 방지하기 위해 exact={true}를 사용한다. 
이것은 정확히 /인 URL이 아니면 render하지 않는다고 설정하는 것이다.
*/
/*
모든 router에 있는 route는 props를 가진다(history,location,match,staticContext)
이를 통해 한 route에 있는 props를 다른 route로 전달할 수 있다.
navigation.js에서 이어서 설명
*/
