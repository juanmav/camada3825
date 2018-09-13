import React from 'react';

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count : props.pepe,
        };
    }

    sumar = () => {
        console.log('Suma!');
        let aux = this.state.count;
        aux++;
        this.setState({count: aux})
        // Esto no reacciona al cambio.
        /*this.state.count++;
      console.log(this.state.count);*/
    };

    restar = () => {
        console.log('Restar!!');
        let aux = this.state.count;
        aux--;
        this.setState({count: aux});
    };

    /**
     * Desafio.
     * Hacer que cada un segundo se sume uno al count.
     * Usar la function setInterval(()=>{....}, 1000)
     * */

    render(){
        return (
            <div>
                Hola soy contador! la cuenta es: {this.state.count}
                <br/>
                <button onClick={this.sumar}>Sumar</button>
                <button onClick={this.restar}>Restar</button>
            </div>
        )
    }

}

export default Counter;