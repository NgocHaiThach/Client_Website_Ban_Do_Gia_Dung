import React, { useState } from 'react';
import './style.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Propose = ({ active }) => {
    const name = active ? 'product-propose_new active' : 'product-propose_new'
    return (
        <>
            <div className={name}>
                {/* <div className="product-propose_btn product-propose_prev"><i className="fas fa-angle-left"></i></div> */}
                {/* <div className="product-propose_btn product-propose_next"><i className="fas fa-angle-right"></i></div> */}
                {/* <div className="row row-nowrap"> */}
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    // ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={4000}
                    autoPlay={true}
                    keyBoardControl={true}
                    slidesToSlide={1}
                    // customTransition="all"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"

                >

                    {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                    <div className="product-propose_new-item">
                        <img className="product-propose_new-item_img"
                            src="https://sunhouse.com.vn/pic/thumb/compact/product/SHD8658G.png"
                            alt="TOKYOLIFE" />
                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                            className="product-propose_new-item_logo" />
                        <p className="product-propose_new-item_info">NỒI CƠM ĐIỆN 1.8L MAMA SHD8658G</p>
                        <h4 className="product-propose_new-item_price">390.000 ₫</h4>
                    </div>
                    {/* </div> */}

                    {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                    <div className="product-propose_new-item">
                        <img className="product-propose_new-item_img"
                            src="https://sunhouse.com.vn/pic/thumb/compact/product/MMB9208DIH-2.jpg"
                            alt="TOKYOLIFE" />
                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                            className="product-propose_new-item_logo" />
                        <p className="product-propose_new-item_info">BẾP ĐÔI ĐIỆN TỪ MAMA MMB9208DIH</p>
                        <h4 className="product-propose_new-item_price">590.000 ₫</h4>
                    </div>
                    {/* </div> */}

                    {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                    <div className="product-propose_new-item">
                        <img className="product-propose_new-item_img"
                            src="https://sunhouse.com.vn/pic/thumb/compact/product/sunhouse-sha76213ck_001.jpg"
                            alt="TOKYOLIFE" />
                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                            className="product-propose_new-item_logo" />
                        <p className="product-propose_new-item_info">Máy lọc nước R.O 10 lõi SLIMBIO SHA76213CK-S</p>
                        <h4 className="product-propose_new-item_price">590.000 ₫</h4>
                    </div>
                    {/* </div> */}

                    {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                    <div className="product-propose_new-item">
                        <img className="product-propose_new-item_img"
                            src="https://sunhouse.com.vn/pic/thumb/large/product/500x600_38_-removebg-preview.png"
                            alt="TOKYOLIFE" />
                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                            className="product-propose_new-item_logo" />
                        <p className="product-propose_new-item_info">ẤM SIÊU TỐC THỦY TINH 1.7L MAMA SHD1330</p>
                        <h4 className="product-propose_new-item_price">690.000 ₫</h4>
                    </div>
                    {/* </div> */}

                    {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                    <div className="product-propose_new-item">
                        <img className="product-propose_new-item_img"
                            src="https://sunhouse.com.vn/pic/thumb/large/product/Artboard%201(29).png"
                            alt="TOKYOLIFE" />
                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                            className="product-propose_new-item_logo" />
                        <p className="product-propose_new-item_info">MÀNG LỌC KHÔNG KHÍ SHD-AF9718</p>
                        <h4 className="product-propose_new-item_price">690.000 ₫</h4>
                    </div>
                    {/* </div> */}

                    {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                    <div className="product-propose_new-item">
                        <img className="product-propose_new-item_img"
                            src="https://sunhouse.com.vn/pic/thumb/large/product/500x600_23_-removebg-preview.png"
                            alt="TOKYOLIFE" />
                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                            className="product-propose_new-item_logo" />
                        <p className="product-propose_new-item_info">NỒI CHIÊN KHÔNG DẦU 6L SHD4026</p>
                        <h4 className="product-propose_new-item_price">690.000 ₫</h4>
                    </div>
                    {/* </div> */}

                    {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                    <div className="product-propose_new-item">
                        <img className="product-propose_new-item_img"
                            src="https://sunhouse.com.vn/pic/thumb/large/product/SHD6872-removebg-preview.png"
                            alt="TOKYOLIFE" />
                        <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                            className="product-propose_new-item_logo" />
                        <p className="product-propose_new-item_info">BẾP ĐIỆN TỪ CẢM ỨNG MAMA SHD6872</p>
                        <h4 className="product-propose_new-item_price">350.000 ₫</h4>
                    </div>
                    {/* </div> */}
                </Carousel>
                {/* </div> */}
            </div>
        </>
    );
}

const ProductNew = ({ active }) => {
    const name = active ? 'product-propose_new' : 'product-propose_new active'

    return (
        <div className={name}>
            {/* <div className="product-propose_btn product-propose_prev"><i className="fas fa-angle-left"></i></div> */}
            {/* <div className="product-propose_btn product-propose_next"><i className="fas fa-angle-right"></i></div> */}
            {/* <div className="row row-nowrap"> */}

            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={4000}
                autoPlay={true}
                keyBoardControl={true}
                slidesToSlide={1}
                // customTransition="all"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"

            >

                {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                <div className="product-propose_new-item">
                    <img className="product-propose_new-item_img"
                        src="https://sunhouse.com.vn/pic/thumb/compact/product/MMB0980_1.jpg"
                        alt="TOKYOLIFE" />
                    <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                        className="product-propose_new-item_logo" />
                    <p className="product-propose_new-item_info">BẾP GAS DƯƠNG MẶT MEN MAMA MMB0980</p>
                    <h4 className="product-propose_new-item_price">790.000 ₫</h4>
                </div>
                {/* </div> */}

                {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                <div className="product-propose_new-item">
                    <img className="product-propose_new-item_img"
                        src="https://sunhouse.com.vn/pic/thumb/compact/product/may-hut-mui-sunhouse-mama-mmb6682-70_001.jpg"
                        alt="TOKYOLIFE" />
                    <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                        className="product-propose_new-item_logo" />
                    <p className="product-propose_new-item_info">MÁY HÚT MÙI CAO CẤP KÍNH CONG MAMA MMB6682-70</p>
                    <h4 className="product-propose_new-item_price">390.000 ₫</h4>
                </div>
                {/* </div> */}


                {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                <div className="product-propose_new-item">
                    <img className="product-propose_new-item_img"
                        src="https://sunhouse.com.vn/pic/thumb/compact/product/500x600(52).jpg"
                        alt="TOKYOLIFE" />
                    <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                        className="product-propose_new-item_logo" />
                    <p className="product-propose_new-item_info">MÁY SẤY TÓC SHD2315G</p>
                    <h4 className="product-propose_new-item_price">690.000 ₫</h4>
                </div>
                {/* </div> */}

                {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                <div className="product-propose_new-item">
                    <img className="product-propose_new-item_img"
                        src="https://sunhouse.com.vn/pic/thumb/compact/product/sunhouse-shg2703ga.jpg"
                        alt="TOKYOLIFE" />
                    <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                        className="product-propose_new-item_logo" />
                    <p className="product-propose_new-item_info">Bộ nồi Anod SHG2703GA</p>
                    <h4 className="product-propose_new-item_price">690.000 ₫</h4>
                </div>
                {/* </div> */}

                {/* <div className="col l-3 m-4 c-6 prpduct-propose_list"> */}
                <div className="product-propose_new-item">
                    <img className="product-propose_new-item_img"
                        src="https://sunhouse.com.vn/pic/thumb/compact/product/SHD6004(1).jpg"
                        alt="TOKYOLIFE" />
                    <img src="https://tokyolife.vn/media/wysiwyg/home/I-Online.svg" alt=""
                        className="product-propose_new-item_logo" />
                    <p className="product-propose_new-item_info">BẾP HỒNG NGOẠI CƠ SHD6004</p>
                    <h4 className="product-propose_new-item_price">350.000 ₫</h4>
                </div>
                {/* </div> */}

                {/* </div> */}

            </Carousel>
        </div>
    );
}

function ProductPropose(props) {

    const [typeProduct, setTypeProduct] = useState(true);
    return (
        <>
            {/* product-propose  */}
            <div className="product-propose">
                <div className="grid wide">
                    <div className="product-propose_title">
                        <h3
                            className={typeProduct ? "product-propose_title-name active" : "product-propose_title-name"}
                            onClick={() => setTypeProduct(true)}
                        >
                            BÁN CHẠY NHẤT

                        </h3>
                        <h3
                            className={typeProduct ? "product-propose_title-name" : "product-propose_title-name active"}

                            onClick={() => setTypeProduct(false)}
                        >
                            HÀNG MỚI VỀ
                        </h3>
                        <div className="line"></div>
                    </div>

                    <Propose active={typeProduct} />
                    <ProductNew active={typeProduct} />

                </div>
            </div>
        </>
    );
}

export default ProductPropose;