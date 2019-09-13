import React, {Component} from 'react';
import logo from '../../logo.1.svg';
import './Search.css';
import video from '../../assets/Palm_Trees.mp4';

class Search extends Component{
    constructor(props){
        super(props);

        this.state ={
            value: ''
        };
    }

    handleChange(value){
        this.setState({value});
        console.log(this.state.value);
    }

    onSearch(result){
        /* eslint no-console: 1 */
        console.log(result);
    }

    render(){
        return(
            <main>
                <div className="bg-video">
                    <video  className="bg-video__content" autoPlay muted loop >
                        <source src={ video } type="video/mp4"/>
                        Your Browser is not supported
                    </video>
                </div>
                <img src={ logo } className="App-logo" alt="logo" />
                <section className="section-book">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <div className="form">
                                    <div className="u-margin-bottom-medium">
                                        <h2 className="heading-secondary">React Weather</h2>
                                    </div>
                                    <form onSubmit={ this.onSearch }>
                                        <div className="form__group">
                                            <input type="text" className="form__input" placeholder="City" value={ this.state.value }  onChange={ event => this.handleChange(event.target.value) } required minLength="3" title="Cannot be blank"/>
                                            <label className="form__label">City</label>
                                        </div>
                                        <div className="form__group">
                                            <input type="text" className="form__input" placeholder="Region/State" value={ this.state.value }  onChange={ event => this.handleChange(event.target.value) } required minLength="2" maxLength="2" title="Cannot be blank"/>
                                            <label className="form__label">Region/State</label>
                                        </div>
                                        <div className="form__group">
                                            <input type="text" className="form__input" placeholder="Country" value={ this.state.value }  onChange={ event => this.handleChange(event.target.value) }required minLength="2" title="Cannot be blank"/>
                                            <label className="form__label">Country</label>
                                        </div>
                                        <div className="form__group">
                                            <button className="green__button green__button--green2"> Search </button>
                                            <a href="/home" className="btn-text">Go Back &rarr;</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
          
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
export default Search;