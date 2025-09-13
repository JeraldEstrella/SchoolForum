import Eventcard from '../../components/eventcard/Eventcard';
import './event.css';
const Event = () => {
  return (
    <div className='event-container'>
      <p className='head-text'>What's New</p>
      <div className='event-cards'>
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
      </div>
    </div>
  );
};

export default Event;
