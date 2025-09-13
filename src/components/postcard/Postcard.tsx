import './postcard.css';

type postcardProps = {
  className: boolean;
  image?: string;
};

const Postcard = ({ className, image }: postcardProps) => {
  return (
    <div
      className={`${
        className ? `postcard-container pinned` : `postcard-container`
      }`}
    >
      <div className='post-header'>
        <div className='post-header-main'>
          <img src={image} alt='' />
          <span className='post-title'>Mastering Gamification Strategies</span>
        </div>
        <span className='post-date'>Tuesday</span>
      </div>
      <div className='post-content-container'>
        {!className && <span className='post-author'>John Doe</span>}
        <span className='post-content'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          asperiores earum sapiente alias. Libero, doloribus magnam veritatis,
          asperiores maiores veniam iste minima sed voluptates consequuntur
          blanditiis debitis molestias, sit soluta.
        </span>
      </div>
    </div>
  );
};

export default Postcard;
