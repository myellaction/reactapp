import './Filter.sass';
import {Component} from 'react';

class Filter extends Component {
    state = {'country':[]}

    onChangeCountry = (country) => {
        const newCountry = [...this.state.country];
        if (this.state.country.includes(country)){
            newCountry.splice(this.state.country.indexOf(country), 1);
        } else{
            newCountry.push(country);
        }
        this.setState(state => ({country: newCountry}));
        this.props.onChangeCountry(country);
    }


    render(){
        const {country} = this.state;
        const countries = ['Brazil', 'Kenya', 'Columbia'];
        const activeClass = 'filter__button-active';
        const buttons = countries.map((title, index) => {
            let buttonClass = country.includes(title) ? activeClass : '';
            return <button className={`filter__button ${buttonClass}`}
                    onClick={() => this.onChangeCountry(title)} key={index}>{title}</button>
        });
        return(
            <div className="filter">
                <span className="filter__title">Or filter</span>
                <span className="filter__buttons">
                    {buttons}
                </span>
            </div>
        )
    }
}

export default Filter;