import React, {Component} from 'react';
import './Spinner.css';


class Spinner extends Component{
    componentWillMount(){}

    render(){
        return(
            <div className="rocketMan">
                <div className='body'>
                    <span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div className='base'>
                        <span></span>
                        <div className='face'></div>
                    </div>
                </div>
                <div className='longfazers'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h1 className="Loading">Fetching Weather Reports  .........</h1>
            </div>
        );
    }
}

export default Spinner;