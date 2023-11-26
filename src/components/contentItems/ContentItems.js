import ContentItem from '../contentItem/ContentItem';
import './ContentItems.sass';

const ContentItems = (props) => {
    const {data, onChangeNum} = props;
    let items;
    if (onChangeNum){
        items = data.map(({image, title, price, country}, index) => {
            return <ContentItem image={image} title={title} price={price} country={country} key={index} 
            onChangeNum={() => onChangeNum(index)}/>
        });
    } else{
        items = data.map(({image, title, price, country}, index) => {
            return <ContentItem image={image} title={title} price={price} country={country} key={index} />
        });
    }
    
    return (
        <div className="content__items-block">
            {items}
        </div>
    )
}

export default ContentItems;