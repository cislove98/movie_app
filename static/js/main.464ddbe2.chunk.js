(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{20:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){},62:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(0),r=n.n(i),a=n(31),c=n.n(a),o=n(9),l=n(2);n(20),n(40);var j=function(e){return console.log(e),Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(s.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},u=n(17),d=n.n(u),v=n(32),b=n(11),p=n(12),h=n(14),m=n(13),O=n(33),x=n.n(O),f=n(4),g=n.n(f);n(29),n(62);function y(e){var t=e.id,n=e.title,i=e.year,r=e.rating,a=e.genres,c=e.synopsis,l=e.poster;return Object(s.jsx)(o.b,{to:{pathname:"/movie/".concat(t),state:{title:n,year:i,poster:l,genres:a,rating:r,synopsis:c}},children:Object(s.jsxs)("div",{class:"movie",children:[Object(s.jsx)("img",{src:l,alt:n,title:n}),Object(s.jsxs)("div",{class:"movie_info",children:[Object(s.jsxs)("div",{class:"movie_title_year",children:[Object(s.jsx)("div",{class:"movie_title",children:n}),Object(s.jsx)("div",{class:"movie_year",children:i})]}),Object(s.jsx)("ul",{class:"movie-geners",children:a.map((function(e,t){return Object(s.jsx)("li",{class:"movie-geners-gener",children:e},t)}))}),Object(s.jsxs)("div",{class:"movie-rating",children:[r," / 10.0"]}),Object(s.jsx)("p",{class:"movie_summery",children:c.slice(0,180)})]})]})})}y.prototype={id:g.a.number.isRequired,title:g.a.string.isRequired,year:g.a.number.isRequired,rating:g.a.number.isRequired,genre:g.a.arrayOf(g.a.string).isRequired,synopsis:g.a.string.isRequired,poster:g.a.string.isRequired};var _=y,w=(n(66),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(d.a.mark((function t(){var n,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{class:"container",children:t?Object(s.jsx)("div",{class:"loader",children:Object(s.jsx)("div",{class:"loader-text",children:"Now Loading..."})}):Object(s.jsx)("div",{class:"movies",children:n.map((function(e){return Object(s.jsx)(_,{id:e.id,title:e.title,year:e.year,rating:e.rating,genres:e.genres,synopsis:e.synopsis,poster:e.medium_cover_image},e.id)}))})})}}]),n}(r.a.Component)),k=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(s.jsx)("sapn",{children:e.state.title}):null}}]),n}(r.a.Component);n(67);var q=function(){return Object(s.jsxs)("div",{class:"nav",children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};n(68),n(69);var R=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(q,{}),Object(s.jsx)(l.a,{path:"/",exact:!0,component:w}),Object(s.jsx)(l.a,{path:"/about",component:j}),Object(s.jsx)(l.a,{path:"/movie/:id",component:k})]})};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(R,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.464ddbe2.chunk.js.map