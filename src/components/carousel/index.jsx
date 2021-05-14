import { Carousel } from 'antd';
import './index.css';
const CarouselContainer = (props) => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const settings = props.carouselSettings;
    const banners = props.banners || [];

    const imgWidth = Math.round(window.innerWidth * 0.90)
    const imgSize = `?param=` + imgWidth + `y160`;
    // const imgSize = '?param=380y160';

    return (
        <Carousel {...settings}  >
            {(banners.length > 0) ?
                banners.map((item, index) => {
                    return <div key={index}>
                        <img src={item.imageUrl + imgSize} />
                    </div>
                })
                : null}

        </Carousel>
    )
}
export default CarouselContainer;


