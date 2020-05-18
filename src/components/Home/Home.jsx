import React, {Component} from 'react';
import Logo from '../Logo';
import Spinner from '../Spinner/Spinner';
import reactLogo from '../../logo.svg';
import cloudy from '../../assets/weather-icons/rainy-6.svg';
import snowy from '../../assets/weather-icons/cloudy-day-2.svg';
import day from '../../assets/weather-icons/day.svg';
import thunder from '../../assets/weather-icons/thunder.svg';
import weatherSunset from '../../assets/weather-icons/weather_sunset.svg';
import './Home.css';
import dataResponse from '../../assets/dataExample.json';


class Home extends Component{   
    constructor(){
        super();
        this.state={
            loading:false
        };
    }


    componentWillMount(){

        const response = dataResponse;
        const location = 'in ' + response.location.city + ', ' + response.location.region + ', ' + response.location.country;
        this.setState({
            response: response,
            location: location

        });
        console.log(response, location);

        
        setTimeout(() => {
            this.loadingDelay();
        }, 3000);
    }

    loadingDelay(){
        this.setState({
            loading: true
        });
    }

    getLogo(){
        /* eslint no-console: 1 */
        console.log('does this work?');
        return <Logo />;
    }
    render(){
        return(
            <div>
                <header className="header">
                    <div className="header__logo-box">
                        <img src={ reactLogo } className="App-logo" alt="logo" />
                    </div>
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">React Weather</span>
                        </h1>
                        <a href="/search" className="btn btn--white btn--animated">Change location</a>
                    </div>
                </header>
                {!this.state.loading? <Spinner/>
                    :<div>
                        <section className="section-tours">
                            <div className="u-center-text u-margin-bottom-big">
                                <h2 className="heading-secondary2">
                                    <span className="tempheading">{this.state.response.current_observation.condition.temperature}&#x2109;</span> &nbsp;
                                    {this.state.location}
                                </h2>
                            </div>

                            <div className="row">
                                <div className="col-1-of-3">
                                    <div className="card">
                                        <div className="card__side card__side--front">
                                            <div className="card__picture card_picture-1">
                                                <img src={ cloudy } className="weather-logo" alt="cloud icon"/></div>
                                            <div className="card__box">
                                                <h4 className="card__heading">
                                                    <span className="card__heading-span card__heading-span--1">
                                                    todays weather
                                                    </span>
                                                </h4>
                                                <div className="card__details">
                                                    <ul>
                                                        <li>Weather Description </li>
                                                        <li>Today's High :&#x2109;</li>
                                                        <li>Today's Low: &#x2109;</li>
                                                        <li>humidity :</li>
                                                        <li>Hover for more info</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__side card__side--back card__side--back-1">
                                            <div className="card__cta">
                                                <div className="card__price-box">
                                                    <p className="card__price-only">Current Temprature</p>
                                                    <p className="card__price-value">&#x2109;</p>
                                                    <p className="card__price-value2">Wind mph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-of-3">
                                    <div className="card">
                                        <div className="card__side card__side--front">
                                            <div className="card__picture">
                                                <Logo condition={ 'Cloudy' } />
                                            </div>
                                            <div className="card__box">
                                                <h4 className="card__heading">
                                                    <span className="card__heading-span card__heading-span--2">
                                                        tomorrows weather
                                                    </span>
                                                </h4>
                                                <div className="card__details">
                                                    <ul>
                                                        <li>Weather Description</li>
                                                        <li>Tomorrow's High : &#x2109;</li>
                                                        <li>Tomorrow's Low:  &#x2109;</li>
                                                        <li>humidity :</li>
                                                        <li>Hover for more info</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__side card__side--back card__side--back-2">
                                            <div className="card__cta">
                                                <div className="card__price-box">
                                                    <p className="card__price-only">tomorrow's high</p>
                                                    <p className="card__price-value"> &#x2109;</p>
                                                    <p className="card__price-value2">Wind mph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-of-3">
                                    <div className="card">
                                        <div className="card__side card__side--front">
                                            <div className="card__picture">
                                                <img src={ snowy } className="weather-logo" alt="snowy"/>
                                            </div>
                                            <div className="card__box">
                                                <h4 className="card__heading">
                                                    <span className="card__heading-span card__heading-span--3">
                                                        the day after 
                                                    </span>
                                                </h4>
                                                <div className="card__details">
                                                    <ul>
                                                        <li>Weather</li>
                                                        <li> High : &#x2109;</li>
                                                        <li> Low: &#x2109;</li>
                                                        <li>humidity :</li>
                                                        <li>Hover for more info</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__side card__side--back card__side--back-3">
                                            <div className="card__cta">
                                                <div className="card__price-box">
                                                    <p className="card__price-only">High</p>
                                                    <p className="card__price-value">&#x2109;</p>
                                                    <p className="card__price-value2">Wind mph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- SECTION2 --> */}
                        <section className="section-tours2">
                            <div className="row">
                                <div className="col-1-of-3">
                                    <div className="card">
                                        <div className="card__side card__side--front">
                                            <div className="card__picture">
                                                <img src={ day } className="weather-logo" alt="sunny"/>
                                            </div>
                                            <div className="card__box">
                                                <h4 className="card__heading">
                                                    <span className="card__heading-span card__heading-span--1">
                                                      and the day after that
                                                    </span>
                                                </h4>
                                                <div className="card__details">
                                                    <ul>
                                                        <li>Weather Description</li>
                                                        <li> High : &#x2109;</li>
                                                        <li> Low:  &#x2109;</li>
                                                        <li>humidity :</li>
                                                        <li>Hover for more info</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__side card__side--back card__side--back-1">
                                            <div className="card__cta">
                                                <div className="card__price-box">
                                                    <p className="card__price-only">High</p>
                                                    <p className="card__price-value"> &#x2109;</p>
                                                    <p className="card__price-value2">Wind mph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-of-3">
                                    <div className="card">
                                        <div className="card__side card__side--front">
                                            <div className="card__picture"> &nbsp;
                                                <img src={ thunder } className="weather-logo" alt="thunder"/>
                                            </div>
                                            <div className="card__box">
                                                <h4 className="card__heading">
                                                    <span className="card__heading-span card__heading-span--2">
                                                        and the day after that
                                                    </span>
                                                </h4>
                                                <div className="card__details">
                                                    <ul>
                                                        <li>Weather Description</li>
                                                        <li> High :&#x2109;</li>
                                                        <li> Low:  &#x2109;</li>
                                                        <li>humidity :</li>
                                                        <li>Hover for more info</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__side card__side--back card__side--back-2">
                                            <div className="card__cta">
                                                <div className="card__price-box">
                                                    <p className="card__price-only">High</p>
                                                    <p className="card__price-value">&#x2109;</p>
                                                    <p className="card__price-value2">Wind mph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-of-3">
                                    <div className="card">
                                        <div className="card__side card__side--front">
                                            <div className="card__picture">
                                                <img src={ weatherSunset } className="weather-logo" alt="thunder"/>
                                            </div>
                                            <div className="card__box">
                                                <h4 className="card__heading">
                                                    <span className="card__heading-span card__heading-span--3">
                                                    and the day after that
                                                    </span>
                                                </h4>
                                                <div className="card__details">
                                                    <ul>
                                                        <li>weatherlist</li>
                                                        <li> High : &#x2109;</li>
                                                        <li> Low: &#x2109;</li>
                                                        <li>humidity :</li>
                                                        <li>Hover for more info</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__side card__side--back card__side--back-3">
                                            <div className="card__cta">
                                                <div className="card__price-box">
                                                    <p className="card__price-only">High</p>
                                                    <p className="card__price-value">&#x2109;</p>
                                                    <p className="card__price-value2">Wind mph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>}
            </div>
        );
    }
}
export default Home;