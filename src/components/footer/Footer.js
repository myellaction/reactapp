import Nav from '../nav/Nav';
import Grains from '../grains/Grains';
import './Footer.sass';

const Footer = (props) => {
    const {onChangePage, page, pageNum} = props;
    const marTop = page == 'menu' && pageNum === null || page == 'pleasure' ? 'mt-60' : null;
    return(
        <div className={`footer ${marTop}`}>
            <Nav grainsColor="black-grains" marBot="mb-30" onChangePage={onChangePage} />
            <Grains hrColor="color-black" grainsColor="black-grains" />
        </div>
    )
}

export default Footer;