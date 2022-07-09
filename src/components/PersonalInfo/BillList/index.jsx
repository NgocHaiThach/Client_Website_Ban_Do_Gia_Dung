import React, { useRef, useState } from 'react';
import { AiOutlineSearch, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './style.css';
import callApi from '../../../utils/callApi';
import cookies from 'react-cookies';
import { useEffect } from 'react';
import { FormatInput, formatPrice } from '../../../utils/format';


function BillList(props) {

    const [listActive, setListActive] = useState(0);
    const [listBill, setListBill] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [sizePage, setSizePage] = useState(10);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0)


    const accessUser = cookies.load("userToken");

    const [listToSearch, setListToSearch] = useState([]);
    const [search, setSearch] = useState('');
    const [input, setInput] = useState('');
    const typingTimoutRef = useRef(null);

    const getListBillByIdUser = async () => {
        setIsLoading(true);
        const res = await callApi("/orders/get", "POST", {
            customerId: accessUser.userId,
            // status: "PAIN",
            page: currentPage,
            size: sizePage,
        })
        // console.log("bill list", res.data.result.orders);
        setListBill(res.data.result.orders);
        setListToSearch(res.data.result.orders);
        setIsLoading(false);
        setTotalPage(res.data.result.totalPage)
    }

    useEffect(() => {
        if (listActive === 0) {
            getListBillByIdUser();
        }
        if (listActive === 1) {
            getListBillPaying();
        }
        if (listActive === 2) {
            getListBillProcessing();
        }
        if (listActive === 3) {
            getListBillDoing();
        }
        if (listActive === 4) {
            getListBillDone();
        }
        if (listActive === 5) {
            getListBillCanl();
        }

    }, [currentPage, accessUser.userId, sizePage, listActive]);

    const getBillListPrev = () => {
        const page = currentPage - 1
        setCurrentPage(page);
    };

    const getBillListNext = () => {
        const page = currentPage + 1
        setCurrentPage(page);
    };

    const handleSelectSizPage = (e) => {
        setSizePage(+e.target.value);
    };


    const renderPaginationNum = () => {
        return (
            <>
                <div className={currentPage === 0 ? "pagination__number-active" : "pagination__number"}
                    onClick={() => {
                        setCurrentPage(0);
                    }}
                >{1}</div>

                {currentPage === 1 && totalPage > 2 ? (
                    <>
                        <div className={currentPage === 1 ? "pagination__number-active" : "pagination__number"}>{2}</div>
                        <div className="pagination__number">...</div>

                    </>
                ) : null}

                {currentPage > 1 ? (
                    <>
                        <div className="pagination__number">...</div>
                    </>
                ) : null}

                {currentPage < totalPage - 1 && currentPage > 1 ?
                    <div className="pagination__number-active">
                        {currentPage + 1}
                    </div>
                    : null
                }

                {currentPage > 1 && currentPage < totalPage - 2 ? (
                    <>
                        <div className="pagination__number">...</div>
                    </>
                ) : null}

                {totalPage > 1 ?
                    <div className={currentPage === totalPage - 1 ? "pagination__number-active" : "pagination__number"}
                        onClick={() => {
                            setCurrentPage(totalPage - 1);
                        }}>
                        {totalPage}
                    </div>
                    : null
                }
            </>
        )
    }



    const getListBillPaying = async () => {
        setIsLoading(true);
        const res = await callApi("/orders/get", "POST", {
            customerId: accessUser.userId,
            status: "PAIN",
            page: currentPage,
            size: sizePage,
        })
        // console.log("bill list", res.data.result.orders);
        setListBill(res.data.result.orders);
        setListToSearch(res.data.result.orders);
        setIsLoading(false);
        setTotalPage(res.data.result.totalPage)
        setListActive(1)
    }

    const getListBillProcessing = async () => {
        setIsLoading(true);
        const res = await callApi("/orders/get", "POST", {
            customerId: accessUser.userId,
            status: "PRSS",
            page: currentPage,
            size: sizePage,
        })
        // console.log("bill list", res.data.result.orders);
        setListBill(res.data.result.orders);
        setListToSearch(res.data.result.orders);
        setIsLoading(false);
        setTotalPage(res.data.result.totalPage);
        setListActive(2);
    }

    const getListBillDoing = async () => {
        setIsLoading(true);
        const res = await callApi("/orders/get", "POST", {
            customerId: accessUser.userId,
            status: "DOIN",
            page: currentPage,
            size: sizePage,
        })
        // console.log("bill list", res.data.result.orders);
        setListBill(res.data.result.orders);
        setListToSearch(res.data.result.orders);
        setIsLoading(false);
        setTotalPage(res.data.result.totalPage);
        setListActive(3);
    }

    const getListBillDone = async () => {
        setIsLoading(true);
        const res = await callApi("/orders/get", "POST", {
            customerId: accessUser.userId,
            status: "DONE",
            page: currentPage,
            size: sizePage,
        })
        // console.log("bill list", res.data.result.orders);
        setListBill(res.data.result.orders);
        setIsLoading(false);
        setTotalPage(res.data.result.totalPage);
        setListActive(4);
    }

    const getListBillCanl = async () => {
        setIsLoading(true);
        const res = await callApi("/orders/get", "POST", {
            customerId: accessUser.userId,
            status: "CANL",
            page: currentPage,
            size: sizePage,
        })
        // console.log("bill list", res.data.result.orders);
        setListBill(res.data.result.orders);
        setListToSearch(res.data.result.orders);
        setIsLoading(false);
        setTotalPage(res.data.result.totalPage);
        setListActive(5);
    }

    //SEARCH    



    // const getToSearch = async () => {
    //     if (listActive === 0) {
    //         getListBillByIdUser();
    //     }
    //     if (listActive === 1) {
    //         getListBillPaying();
    //     }
    //     if (listActive === 2) {
    //         getListBillProcessing();
    //     }
    //     if (listActive === 3) {
    //         getListBillDoing();
    //     }
    //     if (listActive === 4) {
    //         getListBillDone();
    //     }
    //     if (listActive === 5) {
    //         getListBillCanl();
    //     }
    // }

    const onSearch = (e) => {
        const input = e.target.value
        setSearch(input)

        if (typingTimoutRef.current) {
            clearTimeout(typingTimoutRef.current)
        }

        typingTimoutRef.current = setTimeout(() => {
            const formvalues = {
                search: input,
            }
            if (handleSearch) {
                handleSearch(formvalues)
            }
        }, 300)

    }

    //xu ly search product
    const handleSearch = (input) => {
        const val = FormatInput(input.search)
        // const filter = listToSearch.filter((item) => {
        //     const name = FormatInput(item.orderId)
        //     if (name.includes(val)) {
        //         return item
        //     }
        // });

        let filter = [];
        for (let i = 0; i < listToSearch.length; i++) {
            if (listToSearch[i].products.find(i => FormatInput(i.name).includes(val))) {
                filter.push(listToSearch[i])
            }
        }
        setListBill(filter);
        setInput(input)

    }



    return (
        <div className="bill__info">
            <div className="bill__info-header">
                Đơn hàng của tôi
            </div>
            <div className="bill__info-container">
                <div className="info__title-list">
                    <div
                        onClick={() => { return setCurrentPage(0), setListActive(0) }}
                        className={listActive === 0 ? "info__title-item-active" : "info__title-item"}
                    >
                        Tất cả đơn
                    </div>
                    <div onClick={() => { return setCurrentPage(0), getListBillPaying() }}
                        className={listActive === 1 ? "info__title-item-active" : "info__title-item"}
                    >
                        Chờ thanh toán
                    </div>
                    <div
                        onClick={getListBillProcessing}
                        className={listActive === 2 ? "info__title-item-active" : "info__title-item"}
                    >
                        Đang xử lý
                    </div>
                    <div
                        onClick={() => { return setCurrentPage(0), getListBillDoing() }}
                        className={listActive === 3 ? "info__title-item-active" : "info__title-item"}
                    >
                        Đang vận chuyển
                    </div>
                    <div
                        onClick={() => { return setCurrentPage(0), getListBillDone() }}
                        className={listActive === 4 ? "info__title-item-active" : "info__title-item"}
                    >
                        Đã giao
                    </div>
                    <div
                        onClick={() => { return setCurrentPage(0), getListBillCanl() }}
                        className={listActive === 5 ? "info__title-item-active" : "info__title-item"}
                    >
                        Đã hủy
                    </div>
                </div>
                <div className="info__search">
                    <AiOutlineSearch className="info__search-icon" />
                    <input
                        className="info__search-input"
                        placeholder="Tìm đơn hàng..."
                        value={search}
                        onChange={onSearch}
                    />
                </div>
                <div className="bill__pagination">
                    {totalPage === 0 ? null :
                        <>
                            <select className="bill__size" defaultValue={'DEFAULT'} onChange={(e) => handleSelectSizPage(e)} >
                                <option value="DEFAULT" disabled>Size:</option>
                                <option value="5">5</option>
                                <option selected value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                            </select>
                            {currentPage === 0 ? null : <AiOutlineArrowLeft onClick={getBillListPrev} />
                            }
                            {renderPaginationNum()}
                            {currentPage === totalPage - 1 ? null : <AiOutlineArrowRight onClick={getBillListNext} />}
                        </>
                    }

                </div>
                <div className="info__bill-list">

                    {!isLoading ?
                        listBill.length > 0 ?
                            listBill.map((item, index) => (
                                <div key={index} className="info__bill-item">
                                    <div className="bill__item-title">
                                        Mã hóa đơn: {item.orderId.slice(0, 8)}
                                    </div>
                                    {item.products.map((pro, i) => (
                                        <div key={i} className="bill__item-content">
                                            <div>
                                                <div className="bill__item-product">
                                                    <div className="bill__item-detail">
                                                        <img src={pro.avatar} alt="image product" className="bill__item-img" />
                                                        <div className="bill__item-info">
                                                            <p className="bill__item-name">{pro.name}</p>
                                                            <div className="bill__item-store">
                                                                <span>Quafa</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bill__item-price">
                                                        <span>{formatPrice(pro.price)}đ</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                    <div className="info__bill-footer">
                                        <div className="info__bill-money">
                                            <div className="money-title">
                                                Tổng giá:
                                            </div>
                                            <div className="money-total">
                                                {formatPrice(item.totalPrice)}đ
                                            </div>
                                        </div>
                                        <div className="info__bill-money">
                                            <div className="money-title">
                                                Phí giao hàng:
                                            </div>
                                            <div className="money-total">
                                                {formatPrice(item.totalFee)}đ
                                            </div>
                                        </div>
                                        <div className="info__bill-money">
                                            <div className="money-title">
                                                Tổng tiền:
                                            </div>
                                            <div className="money-total">
                                                {formatPrice(item.total)}đ
                                            </div>
                                        </div>
                                        {/* <div className="info__bill-group">
                                        <button className="btn-buy-again">Mua lại</button>
                                    </div> */}
                                    </div>
                                </div>
                            )) :
                            <div style={{ fontSize: "18px", textAlign: "center", marginTop: "120px" }}>
                                Đơn hàng trống
                            </div>

                        : <div className="bill__loading">
                            <div className="spinner-container">
                                <div className="loading-spinner">
                                </div>
                            </div>
                        </div>}


                </div>
                <div className="bill__pagination">
                    {totalPage === 0 ? null :
                        <>
                            {currentPage === 0 ? null : <AiOutlineArrowLeft onClick={getBillListPrev} />
                            }
                            {renderPaginationNum()}
                            {currentPage === totalPage - 1 ? null : <AiOutlineArrowRight onClick={getBillListNext} />}
                        </>
                    }
                </div>
            </div>
        </div >
    );
}

export default BillList;