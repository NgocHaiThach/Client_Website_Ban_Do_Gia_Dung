import React from 'react';
import './style.css';

function Chatbox(props) {
    return (
        //  fixed
        <div class="fixed-container">
            <div class="fixed-form">
                <div class="fixed-form_header">
                    <h3 class="fixed-form_header-title">Để lại cho chúng tôi một tin nhắn</h3>
                    <i class="far fa-window-minimize"></i>
                </div>
                <form action="">
                    <div class="fixed-form_group">
                        <label for="name">Tên Của Bạn <span>*</span></label>
                        <input id="name"
                            placeholder="Tên của bạn"
                            required type="text"
                            class="fixed-form_group-item" />
                    </div>

                    <div class="fixed-form_group">
                        <label for="phone">Số điện Thoại <span>*</span></label>
                        <input
                            id="phone"
                            placeholder="091 234 56 78"
                            required type="text"
                            class="fixed-form_group-item" />
                    </div>

                    <div class="fixed-form_group">
                        <label for="option">Chọn bộ phận cần liên hệ <span>*</span></label>
                        <select name="" id="option" class="fixed-form_group-item">
                            <option value="">Hỗ Trợ Khách Hàng Online</option>
                        </select>
                    </div>

                    <div class="fixed-form_group">
                        <label for="message">Xin chào, chúng tôi có thể giúp gì cho bạn? <span>*</span></label>
                        <input
                            id="message"
                            placeholder="Bắt đầu trò chuyện tại đây..."
                            required type="message"
                            class="fixed-form_group-item fixed-form_group-message" />
                    </div>

                    <div class="fixed-form_footer">
                        <div class="fixed-btn_group">
                            <input
                                type="button"
                                value="Hủy"
                                class="fixed-btn_group-item" />
                            <input
                                type="submit"
                                value="Gửi"
                                class="fixed-btn_group-item active" />
                        </div>
                        <a class="fixed-form_footer-link" href="">StringeeX</a>
                    </div>

                </form>
            </div>
            <div class="btn btn-message"><i class="fas fa-comments"></i></div>
            <a href="#top" class="btn btn-srollFixed">
                <i class="fas fa-chevron-up"></i>
            </a>
        </div>
    );
}

export default Chatbox;