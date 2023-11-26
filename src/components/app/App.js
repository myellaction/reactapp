import './App.sass';
import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import {Component} from 'react';
import image3 from '../content/item3.png';

class App extends Component {
  state = {page: 'menu', pageNum: null} 
  data = [{image: image3, title: 'AROMISTICO Coffee 1 kg', price: '6.99', country: 'Brazil'},
                 {'1':{country: 'Kenya'}, '2':{country:'Columbia'}}];

  onChangePage = (page) => {
    this.setState(state => ({page}));
    this.onChangeNum();
  }

  onChangeNum = (pageNum=null) => {
    if (pageNum){
      this.setState(state => ({pageNum, page: 'menu'}));
    } else{
      this.setState(state => ({pageNum}));
    }
  }

  prepareData = () => {
    const items = [];
    for (let i=0; i<6; i++){
      let item = {...this.data[0]};
      if ([1, 2].includes(i)){
          item['country'] = this.data[1][String(i)]['country'];
      }
      items.push(item);
    }
    return items;
  }

  render() {
    const {page} = this.state;
    const data = this.prepareData();

    return (
      <div className="wrapper">
        <Header page={page} onChangePage={this.onChangePage} />
        <Content page={page} pageNum={this.state.pageNum} data={data} onChangeNum={this.onChangeNum} />
        <Footer page={page} onChangePage={this.onChangePage} pageNum={this.state.pageNum} />
      </div>
    );
  }
  
}

export default App;


