import React from 'react';
import { Carousel } from 'antd';
import './Carousel.css';
const AntCarousel: React.FC = () => {
  return (
    <Carousel autoplay className="custom-carousel">
      <div>
        <img
          style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          src="https://scontent.fcue3-1.fna.fbcdn.net/v/t39.30808-6/277574464_406244694835224_5634887459552021113_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_ohc=ssxJC5LaoloAX-Wt5Xf&_nc_ht=scontent.fcue3-1.fna&oh=00_AfA906Xo9V70s_A5BE7ilcHIH84uRFtmrWwrNIY-OMe4OQ&oe=65C8D946"
          alt="Image One"
        />
      </div>
      <div>
        <img
          style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          src="https://scontent.fcue3-1.fna.fbcdn.net/v/t39.30808-6/365169597_777822914344065_3507704623632616452_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hmglwHW2UI4AX_8R37V&_nc_ht=scontent.fcue3-1.fna&oh=00_AfDBd7xVqT9UqOmeKB17yRwzR55zsKj7WrV5N67o7bPRSg&oe=65C8B10F"
          alt="Image Two"
        />
      </div>
      <div>
        <img
          style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          src="https://scontent.fcue3-1.fna.fbcdn.net/v/t1.6435-9/67780568_2330247163729655_8854105390288207872_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=WCGNHto2_ScAX8s-IO0&_nc_ht=scontent.fcue3-1.fna&oh=00_AfCfubhNoR5fnQcKJ4nH1UZy2z6YfZg_1QDfP2LFGhjJKQ&oe=65EB5659"
          alt="Image Three"
        />
      </div>
    </Carousel>
  );
};

export default AntCarousel;
