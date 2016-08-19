import React from 'react';
import greeting from '../greeting';
import test from '../hello';

class App extends React.Component {
    render(){
        return (
            <h1>Hello React Skeleton 1111 {test} {greeting}</h1>
        );
    }
}

export default App;