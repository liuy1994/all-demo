import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            name: '2333333',
            isToggleOn: false
        }
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    click(e){
        e.preventDefault()
        console.log('This link was cliked!')
    }

    handleClick = () => {
        this.setState(prevState => {
            isToggleOn: !prevState.isToggleOn
            console.log(this.state.isToggleOn)
        })
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <a href="index.css" onClick={this.click}>CLICK</a>
                <hr/>
                <button onClick={this.handleClick}>CLICK</button>
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)