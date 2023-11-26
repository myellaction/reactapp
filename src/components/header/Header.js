import Nav from '../nav/Nav';
import Grains from '../grains/Grains';
import './Header.sass';

const Header = (props) => {
    const {page, onChangePage} = props;
    const headerClass = page == 'home' ? 'header-home' : page=='menu' ? 'header-menu' : 'header-pleasure';
    const title = page == 'home' ? 'Everything You Love About Coffee' : page == 'menu' ? 'Our Coffee' :
          page == 'pleasure' ? 'For your pleasure' : null;
    const headerContent = page == 'home' ? <HeaderHome /> : null;

    return (
        <header className={`header ${headerClass}`}>
            <Nav marBot="mb-111" grainsColor="white-grains" onChangePage={onChangePage} />
            <p className="header__title">{title}</p>
            {headerContent}    
        </header>
    )
}

export default Header;

const HeaderHome = () => {
    return (
            <>
                <div className="header__grains-wrapper">
                    <Grains hrColor="color-white" grainsColor="white-grains" />
                </div>
                <p className="header__text">We makes every day full of energy and taste</p>
                <p className="header__text header__second-text">Want to try our beans?</p>
                <button className="header__button">More</button>
            </>
        )
}


