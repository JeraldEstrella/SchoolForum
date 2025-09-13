import './eventcard.css';

const Eventcard = () => {
  return (
    <div className='event-card'>
      <img src='./profile.png' alt='' />
      <div className='eventcard-text'>
        <span className='eventcard-author'>JohnDoe</span>
        <span className='eventcard-content'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          perspiciatis expedita vel, nobis necessitatibus inventore fugit
          voluptatibus magnam iste reprehenderit facere ad vitae sed consequatur
          maxime minus nisi quia consectetur.
        </span>
      </div>
    </div>
  );
};

export default Eventcard;
