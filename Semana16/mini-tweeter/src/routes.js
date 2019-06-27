import React from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'

//Páginas
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage'
const estaAutenticado= ()=>  localStorage.getItem('token')? true : false



class PrivateRoute extends React.Component{
    
    render(){
        const Component = this.props.component
        if(estaAutenticado()){
            return <Route render={()=> <Component {...this.props}> </Component>}></Route>
        }
        else{
            return <Redirect to='/login'/>
        }

    }
}

const Roteamento = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default Roteamento