import React, {Component} from 'react';
import logo from '../../logo.1.svg';
import './Search.css';
import video from '../../assets/Palm_Trees.mp4';

class Search extends Component{
    constructor(){
        super();
        this.state ={
            city:'',
            stateRegion:'',
            country:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    onSearch(event){
        /* eslint no-console: 1 */
        event.preventDefault();
        const { city, stateRegion, country } = this.state;
        this.props.onSubmit({city, stateRegion, country});
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
                                            <input id="city" type="text" className="form__input" placeholder="City" value={ this.state.value }  onChange={ this.handleChange } required minLength="3" title="Cannot be blank"/>
                                            <label className="form__label">City</label>
                                        </div>
                                        <div className="form__group">
                                            <input id="stateRegion" type="text" className="form__input" placeholder="Region/State" value={ this.state.value }  onChange={ this.handleChange } required minLength="2" maxLength="2" title="Cannot be blank"/>
                                            <label className="form__label">Region/State</label>
                                        </div>
                                        <div className="form__group">
                                            <input id="country" type="text" className="form__input" placeholder="Country" value={ this.state.value }  onChange={ this.handleChange } required minLength="2" title="Cannot be blank"/>
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