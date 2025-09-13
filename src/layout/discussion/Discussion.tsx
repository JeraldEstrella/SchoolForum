import Button from '../../components/button/Button';
import Postcard from '../../components/postcard/Postcard';
import './discussion.css';

const Discussion = () => {
  return (
    <div className='discussion-container'>
      <span>Discussions</span>
      <div className='discussion-header'>
        <div className='discussion-btn'>
          <Button className={'btn-outline'} label={'Popular'} />
          <Button className={'btn-outline'} label={'Recently post'} />
        </div>
        <Button className={'btn-primary'} label={'View all'}></Button>
      </div>
      <div className='discussion-post'>
        <Postcard className={false} image={'./profile.png'} />
      </div>
    </div>
  );
};

export default Discussion;
