
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//import PropTypes from "prop-types";
//import Test from './test';

/*
function Food({name,num,rating}) {
  console.log();
  return <div>
    <h2>I like {name}</h2>
    <h3>It is {num}</h3>
    <h4>{rating}/5.0</h4>
    </div>
}

Food.propTypes={
  name:PropTypes.string.isRequired,
  num:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}

//porpTypes를 통해서 react magic에서 가져오는 props들을 검사할 수 있다.
//property의 존재의 유무, property의 type의 검사등 props를 검사하는 것이다.
/*
  1. terminal -> npm i prop-types (install)
  2. import PropTypes from "porp-types";
  3. render function.propTypes={
    property:PropTypes.type.isRequired
  }
*/

/*
const foodILike=[
  {id:1,name:"kimchi",num:"first",rating:4.5},
  {id:2,name:"rameun",num:"second",rating:3.7},
  {id:3,name:"kimbab",num:"third",rating:3.1},
  {id:4,name:"drink",num:"fourth",rating:2.8},
  {id:5,name:"dongasu",num:"fifth",rating:2.4}
]
*/

/*
//function component를 사용하는 방법
function App() {      //component == html을 반환하는 function
  return (
    <div className="App">
      <h1>hello</h1>
      {foodILike.map(function(dish){
        return <Food key={dish.id} name={dish.name} num={dish.num} rating={dish.rating}/>
      })}
    </div>
  );
}       //function App은 html 을 반환하는 function이다
*/


/*
//function component를 사용하는 방법이 아닌 state를 사용하기 위해 App class 생성
class App extends React.Component{
  state={
     count:0
  };
  add=()=>{
    console.log("add");
    this.setState(current => ({count: current.count+1}));
  };
  minus=()=>{
    console.log("minus");
    this.setState(current => ({count: current.count-1}));
  };
  render (){
    return ( 
    <div>
      <h1>I am class component</h1>
      <h2>The count: {this.state.count}</h2>
      <button onClick={this.add}>ADD</button>
      <button onClick={this.minus}>MINUS</button>
    </div>
    );
  }
}
*/

/*
App class는 React.Component클래스에서 상속받는다.
App class는 함수가 아님으로 return할수 없다. 하지만 React.Component에 render메서드를 사용해서
멤버 메서드로 가져온다음 render안에서 return 함으로서 실행할 수 있다.
*/

/*
function componemt 대신 class component를 사용하는 이유!!
우리가 사용하는 데이터가 동적으로 변화할때(API, server에서 data를 가져오는 경우...)
우리는 object인 state를 사용하여 data를 state안에 저장해서
data를 사용하고 관리한다.
이때 우리는 class compnent를 사용함으로 클래스 문법에 맞게 사용해야한다.
(Java의 클래스 문법을 생각하면 이해가 쉽다.)
*/

/*
궁극적으로 class component를 사용하는 목적인 state에 담긴 data의 변화이다.
그러면 어떻게 data를 변화(조작)할 수 있는가??
단순히 class문법인 this.state.count를 사용한다라고 생각 할 수 있다.
하지만 이러한 경우 react는 변화한 state의 data값을 render할 수 없다.
즉 우리는 state의 data값을 변화시킨다음 그것을 다시 render함으로서 보여야하는데
이때 state를 직접적으로 사용한다면 react는 render를 refresh하지 않음으로 data의 변화를
보이지 않는다. 따라서 우리는 setState를 사용해서 state의 data를 변화해야 한다.
이때 setState에서 data를 변화할때 this.state.count처럼 사용하는 것이 아닌 current를 
사용해서 state에 종속적이지 않고 사용할 수 있다.
*/

/*
component life cycle
class component임으로 생성과 종료의 cycle을 가지고 있다. 
크게 3가지로서 Mounting-Update-Unmounting이다 

1. Mounting
constructor()->>생성자
render()
componentDidMount() ->> render()후 component가 render되었음을 알림

2. Update
Update의 원인은 사용자이다(ex. state의 변화...)
render()
componentDidUpdate() ->> render()이후 Update가 완료되었을때 componentDidUpdate가 실행된다

3. Unmounting
componentWillUnmount() ->> component가 종료될때 실행된다(page refresh,page close...).
c++에서 소멸자와 비슷한 개념이다.
*/


class App extends React.Component{

  state={
    isLoading: true,   
    movies:[]
  };

  /*
  componentDidMount(){
    setTimeout( () => { this.setState( { isLoading : false } ); },6000);   //setState을 작성할때 state에 반드시 default값을 작성하지 않아도 된다
  };
  */
  
  getMovies= async ()=>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
  }
  //API에서 data를 가져온다. 이때 data를 모두 가져올때 까지 비동기로 지정하고 기다리게 해준다.
  //이때 사용되는 것이 async & await이다.

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies}=this.state;
    return (
      <section classsname="container">
      {isLoading ? (
          <div classsname="loader">
            <span classsname="loader-text">Now Loading...</span>
          </div>
        ) : (
          <div classsname="movies">
            {
              movies.map(movie => (
                <Movie key={movie.id} title={movie.title} year={movie.year} rating={movie.rating} genres={movie.genres} synopsis={movie.synopsis} poster={movie.medium_cover_image} />
              ))
            }
          </div> )
        }
      </section>
    );
  }
}




export default App;

//line 10 ->> <Test />

/*application안에 많은 component를 포함할수 있고 이러한 component안에 다 많은
component를 import 할수 있다
*/

/*
<Food fav  ="kimchi" someting={true} apapapp={["hello",1,2,3,4,false]}/>

Food라는 component에 fav라는 이름의 property(prop)를 "kimchi"라는 value로 준것이다
porp의 value값으로는 다양한 것을 줄 수 있다.
또한 react magic은 이러한 props를 가져가는 약할을 한다.
Food component로 정보를 보내고자 하면 react는 모든 props(속성)을 Food component의 argument로
props를 전달해준다.
이떄 argument로 전달하는 props는 js의 event 또는 python의 self같은 형식이다.
따라서 argument를 조작해서 개별 property를 가져올수도 있다.
like Food({fav}) 라면 porps중에서 fav property를 가져오는 뜻이다.(props.fav=={fav})
*/


/*
{foodILike.map(function(dish){
  return <Food key={dish.id} name={dish.name} num={dish.num}/>
})}

foodILike list를 map메서드로 인자 하나씩 받아서 function(dish)에 넣어서 return 해주는 코드이다.
이때 dish는 foodILike에 인자 하니씩 받음으로 dish에는 component가 2개가 존재한다.
따라서 dish.*를 통해 각각의 component를 조작할 수 있고 이것으 Food함수를 return 해줌으로서
위의 code처럼 property를 조작할 수 있게 한다.
또한 react는 그리 똑똑하지 않아서 react 내부적으로 구분할 수 있게
list에 각각의 요소는 유일해야 한다. 따라서 id값 같은 것을 통해 유일한 key를 가질 수 있게 한다.
*/
