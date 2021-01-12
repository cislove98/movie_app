import React from "react";


class Detail extends React.Component{
    componentDidMount(){
        const {location, history}=this.props;
        if(location.state===undefined){
            history.push("/");
        }
    }
    render(){
        const{location}=this.props;
        if(location.state){
            return <sapn>{location.state.title}</sapn>;
        }
        else{
            return null;
        }
    }
}

/*
    영화 소개 부분을 누르면 porps를 가져와서 movie-detail에서 props를 조작햘 수 있다. 
    하지만 URL에서 movie-detail을 검색해서 들어오게 된다면 props를 가져올수 없게 되고
    그로인해 state===undefinie 상태가 된다.
*/

export default Detail;