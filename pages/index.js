import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './home'
import Talk from './talk'
import Photo from './photo'

class Body extends Component{

    render(){
        return(
           <Router>

               <ul>

                   <li>
                       <Link to='/'>主页</Link>
                   </li>

                   <li>
                       <Link to='/talk'>评论</Link>
                   </li>

                   <li>
                       <Link to='/photo'>相册</Link>
                   </li>

               </ul>

               <hr></hr>

               <Route exact path='/' component={Home} ></Route>
               <Route exact path='/talk' component={Talk} ></Route>
               <Route exact path='/photo' component={Photo} ></Route>

           </Router>
        )
    }
}

ReactDOM.render(<Body></Body>,document.getElementById('root'))