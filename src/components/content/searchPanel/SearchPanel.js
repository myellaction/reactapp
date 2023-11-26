import './SearchPanel.sass';
import {Component} from 'react';

class SearchPanel extends Component {
    state = {value: ""}

    onUpdateValue = (value) => {
        this.setState({value});
        const {onChangeKeyWord} = this.props;
        onChangeKeyWord(value);
    }

    render() {
        const {value} = this.state;
        return (
        <div className="search">
            <label htmlFor="search-input">Lookiing for</label>
            <input className="search__input" id="search-input" type="text"
             placeholder="start typing here..." 
             onChange={(e)=>{this.onUpdateValue(e.target.value)}} value={value}/>
        </div>
    )
    }
}

export default SearchPanel;