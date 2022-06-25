import React from 'react';
import './style.css';

function Chatbox(props) {
    return (
        //  fixed
        <div className="fixed-container">
            <div className="fixed-form">
                <div className="fixed-form_header">
                    <h3 className="fixed-form_header-title">Để lại cho chúng tôi một tin nhắn</h3>
                    <i className="far fa-window-minimize"></i>
                </div>
                <form action="">
                    <div className="fixed-form_group">
                        <label htmlFor="name">Tên Của Bạn <span>*</span></label>
                        <input id="name"
                            placeholder="Tên của bạn"
                            required type="text"
                            className="fixed-form_group-item" />
                    </div>

                    <div className="fixed-form_group">
                        <label htmlFor="phone">Số điện Thoại <span>*</span></label>
                        <input
                            id="phone"
                            placeholder="091 234 56 78"
                            required type="text"
                            className="fixed-form_group-item" />
                    </div>

                    <div className="fixed-form_group">
                        <label htmlFor="option">Chọn bộ phận cần liên hệ <span>*</span></label>
                        <select name="" id="option" className="fixed-form_group-item">
                            <option value="">Hỗ Trợ Khách Hàng Online</option>
                        </select>
                    </div>

                    <div className="fixed-form_group">
                        <label htmlFor="message">Xin chào, chúng tôi có thể giúp gì cho bạn? <span>*</span></label>
                        <input
                            id="message"
                            placeholder="Bắt đầu trò chuyện tại đây..."
                            required type="message"
                            className="fixed-form_group-item fixed-form_group-message" />
                    </div>

                    <div className="fixed-form_footer">
                        <div className="fixed-btn_group">
                            <input
                                type="button"
                                value="Hủy"
                                className="fixed-btn_group-item" />
                            <input
                                type="submit"
                                value="Gửi"
                                className="fixed-btn_group-item active" />
                        </div>
                        <a className="fixed-form_footer-link" href="">StringeeX</a>
                    </div>

                </form>
            </div>
            <div className="btn btn-message"><i className="fas fa-comments"></i></div>
            <a href="#top" className="btn btn-srollFixed">
                <i className="fas fa-chevron-up"></i>
            </a>
        </div>
    );
}

export default Chatbox;