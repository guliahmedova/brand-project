import email from '../../assets/images/email.svg';
import icons from '../../assets/images/icons.svg';
import appStore from '../../assets/images/appStore.svg';
import googlePlay from '../../assets/images/googlePlay.svg';
import logo from '../../assets/images/logo.svg';
import footerList from '../../assets/const/footerList';
import us from '../../assets/images/us.svg';
import downIcon from '../../assets/images/down.svg';
import { useParams , useLocation} from 'react-router-dom';

const Footer = () => {
  const { productId } = useParams();
  const location = useLocation();

  const listItems = footerList.map(item => {
    return (
      <div className='mini-footer-card' key={item.id}>
        <h3>{item.title}</h3>
        {item.list.map((i, index) => <span key={index}>{i}</span>)}
      </div>
    )
  })

  return (
    <footer className="footer">

      {
        !productId && location.pathname !== "/mycart" && (
          <div className="subscribe-section">
            <h1>Subscribe on our newsletter</h1>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            <form >
              <div className='input'>
                <img src={email} alt="" className='email-icon' />
                <input type="email" placeholder='Email' />
              </div>
              <button type='button' className='custom-btn'>Subscribe</button>
            </form>
          </div>
        )
      }

      <section className='footer-card'>
        <div className="brand-card">
          <img src={logo} alt="" />
          <div>Best information about the company <br /> gies here but now lorem ipsum is</div>
          <img src={icons} alt="" />
        </div>
        <div className="mini-cards">
          {listItems}
        </div>
        <div className="app-card">
          <h3>Get app</h3>
          <img src={appStore} style={{ marginBottom: '8px' }} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </section>

      <div className='footer-copyright'>
        <section className='footer-copyright-sec'>
          <p>© 2023 Ecommerce. </p>
          <div className="footer-langs d-flex align-items-center column-gap-2"><img src={us} alt="" className='lang' />English<img src={downIcon} alt="" /></div>
        </section>
      </div>
    </footer>
  )
}

export default Footer