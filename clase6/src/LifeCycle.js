import React from 'react';

class LifeCycle extends React.Component{

    constructor(){
        super();
        console.log('Me voy a construir');
    }

    componentWillMount(){
        console.log('Estoy por dibujarme');
    }

    render(){
        console.log('Me voy a dibujar!');
        return(
            <div>
                Ciclo de vida!
            </div>
        )
    }

    componentDidUpdate(){
        console.log('Cambie mi estado.');
    }

    componentDidMount(){
        console.log('Ya estoy en pantalla!');
    }

    componentWillUnMount(){
        console.log('Me van sacar.')
    }
}

export default LifeCycle;