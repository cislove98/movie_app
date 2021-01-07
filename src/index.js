import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';



ReactDOM.render(            //component를 사용하고자 할때 사용하는 compotnent의 형태이다
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//react는 component를 사용해서 html처럼 작성하려는 경우에 필요하다
//위와같은 js와 html의 조합을 jsx라 부른다
/*
react application은 한번에 하나의 component만 rendering할 수 있다
따라서 모든 것은 application에 들어가야 한다.
*/