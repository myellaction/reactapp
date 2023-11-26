import './ContentItem.sass';


const ContentItem = (props) => {
    const {image, title, price, country, onChangeNum} = props;
    const countryElem = country ? <p className="content__item-price content__item-country">{country}</p> : null;
    const menuItemClass = country ? 'content__item-image-menu' : 'content__item-image';
    const itemClass = country ? 'content__item-menu' : 'content__item';
    return(
        <div className={itemClass} onClick={onChangeNum}>
            <div className={menuItemClass}>
                <img src={image} alt={title}/>
            </div>
            <p className="content__item-title">{title}</p>
            {countryElem}
            <p className="content__item-price">{price + '$'}</p>
        </div>
    )
}

export default ContentItem;