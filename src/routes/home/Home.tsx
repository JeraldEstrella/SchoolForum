import Postcard from '../../components/postcard/Postcard';
import Event from '../../layout/event/Event';
import './home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Discussion from '../../layout/discussion/Discussion';

const Home = () => {
  return (
    <div className='home-container'>
      <Sidebar />
      <div className='home-content'>
        <Postcard className={true} image={'./profile.png'} />
        <Event />
        <Discussion />
      </div>
    </div>
  );
};

export default Home;
