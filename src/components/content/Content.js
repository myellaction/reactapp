import Grains from '../grains/Grains';
import './Content.sass';
import ContentItems from '../contentItems/ContentItems';
import imageGirl from './girl-coffee.jpg';
import coffeeCup from './coffee-cup.png';
import aboutImage from './about-item.jpg';
import SeacrhPanel from './searchPanel/SearchPanel';
import Filter from './filter/Filter';
import image1 from './item1.png';
import image2 from './item2.png';
import image3 from './item3.png';
import {Component} from 'react';


const Content = (props) => {
    const {page, pageNum, data, onChangeNum} = props;
    if (page == 'home'){
        return <MainContent />
    } else if (['menu', 'pleasure'].includes(page) && pageNum === null){
        return <CatalogContent page={page} data={data} onChangeNum={onChangeNum} />
    } else if (['menu', 'pleasure'].includes(page) && pageNum !== null){
        return <ItemSection itemContent={data[pageNum]} />
    }
}

export default Content;


const MainContent = () => {
    const data = [{image: image1, title: 'Solimo Coffee Beans 2 kg', price: '10.73'},
                  {image: image2, title: 'Presto Coffee Beans 1 kg', price: '15.99'},
                  {image: image3, title: 'AROMISTICO Coffee 1 kg', price: '6.99'}];

    return (
        <div className="content">
            <div className="content__about">
                <p className="content__title">About Us</p>
                <div className="header__grains-wrapper">
                    <Grains hrColor="color-black" grainsColor="black-grains" />
                </div>
                <p className="content__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.<br/><br/>

                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p>
            </div>
            <div className="content__items-section">
                <p className="content__items-title">Our best</p>
                <ContentItems data={data} />
            </div>
        </div>
    )
}

class CatalogContent extends Component {
    constructor(props){
        super(props);
        this.onChangeCountry = this.onChangeCountry.bind(this);
    }


    state = {'keyWord': '', 'country':[]}

    onChangeCountry(country){
        const newCountry = [...this.state.country];
        if (this.state.country.includes(country)){
            newCountry.splice(this.state.country.indexOf(country), 1);
        } else{
            newCountry.push(country);
        }
        this.setState(state => ({country: newCountry}));
    }

    onChangeKeyWord = (keyWord) => {
        this.setState({keyWord});
    }

    render() {
        const {data, onChangeNum, page} = this.props;
        const {keyWord, country} = this.state;
        let visibleData = keyWord == '' ? data : data.filter(item => {
            return item.title.toLowerCase().includes(keyWord.toLowerCase()) || item.country.toLowerCase().includes(keyWord.toLowerCase());
        });
        visibleData = country.length > 0 ? visibleData.filter(item => country.includes(item.country)) : visibleData;
        const contentTitle = page == 'menu' ? 'About our beans' : page == 'pleasure' ? 'About our goods' : null;
        const contentImage = page == 'menu' ? imageGirl : page == 'pleasure' ? coffeeCup : null;
        const searchFilter = page == 'pleasure' ? null : (
            <div className="catalog__search-filter">
                    <SeacrhPanel onChangeKeyWord={this.onChangeKeyWord} />
                    <Filter onChangeCountry={this.onChangeCountry} />
                </div>
        );
        return(
            <div className="catalog">
                <div className="catalog__image-title">
                    <img src={contentImage} alt="Girl with coffee" />
                    <div className="catalog__title-block">
                        <p className="content__title catalog__title">{contentTitle}</p>
                        <div className="catalog__grains-wrapper">
                            <Grains hrColor="color-black" grainsColor="black-grains"/>
                        </div>
                        <p className="catalog__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br/><br/>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. <br/>
                            As greatly removed calling pleased improve an.<br/> Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>
                </div>
                <hr className="catalog__hr" />
                {searchFilter}
                <ContentItems data={visibleData} onChangeNum={onChangeNum}/>
            </div>
        )
    }
}

const ItemSection = (props) => {
    const {itemContent} = props;
    const {country, title, price} = itemContent;

    return (
        <div className="item-section">
            <img className="item-section__image" src={aboutImage} alt="Coffee" />
            <div className="catalog__title-block">
                <p className="content__title catalog__title">About it</p>
                <div className="catalog__grains-wrapper">
                    <Grains hrColor="color-black" grainsColor="black-grains"/>
                </div>
                <div className="item-section__text">
                    <p><span className="fw700">Country:</span> {country} </p>
                    <p>
                        <span className="fw700">Description:</span> {title} - lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae aliquam laudantium, commodi ipsum molestias quasi quia enim eaque! Culpa numquam aut, repudiandae at quia nam odit. Ea, vitae obcaecati? 
                    </p>
                    <p><span className="fw700">Price: &nbsp;</span> <span className="fs24"> {price}$</span></p>
                </div>
            </div>
        </div>
    )
}