import React,{Fragment} from 'react';
import Home from './paginas/Home'
import Cadastro from './paginas/Cadastro'
import Chat from './paginas/Chat'
import Nav from './componentes/nav/Nav'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Fragment>
          <Nav/>
          <Route path='/' exact component={Home}/>
          <Route path='/cadastro' component={Cadastro}/>
          <Route path='/chat' exact component={Chat}/>
      </Fragment>
    </Switch>
  )
}

export default App;
