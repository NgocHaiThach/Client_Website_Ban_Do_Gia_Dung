import { useEffect, useRef, useState } from 'react';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddressByUser } from '../../../redux/address/apiFunctionAddress';
import { FaChevronDown } from "react-icons/fa";


function AddressInfo({
    setAddress,
    address,
    setNoteBill,
}) {

    const dispatch = useDispatch();
    const accessUser = cookies.load("userToken");

    //list address init
    const listAddress = useSelector(state => state.addressList.list);
    // const defaultAddress = listAddress.find(item => item.default === true)

    //list addressRef to select
    const listAddressRef = useRef(null);

    //tonggle display list address
    const [displayAddresses, setDisplayAddresses] = useState(true);

    // xử lý click ra ngoài đóng list address?
    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the list, then close the list
            if (listAddressRef.current && !listAddressRef.current.contains(e.target)) {
                setDisplayAddresses(true);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [listAddressRef]);
    const handleDisplay = () => {
        setDisplayAddresses(!displayAddresses);
    };

    //handle Delete address user by idAddress
    const handleDeleteAddressById = async (id) => {
        deleteAddressByUser(dispatch, id, accessUser.userId);
        // setShow(true);
    };

    //handle Select
    const handleSelectAddress = (item) => {
        setAddress(item)
        setDisplayAddresses(true);
    }
    return (
        <>
            <div className="payment__select-address">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="payment__note" onClick={handleDisplay}>
                        Chọn địa chỉ giao hàng của bạn* <FaChevronDown style={{ paddingTop: '4px', paddingLeft: '3px' }} />

                    </div>
                    {/* <button onClick={() => setTonggleAdd(!tonggleAdd)} className="btn-add-address">Thêm địa chỉ mới</button> */}
                </div>
                <div ref={listAddressRef} className="footer__language">
                    <div style={{ display: displayAddresses ? "none" : "block" }} className="footer__pseudo">
                        {listAddress.length > 0 ?
                            <ul style={{ display: displayAddresses ? "none" : "block" }} className="language__list">
                                {listAddress?.map((item, index) => (
                                    <div key={index} className="language__item-action">
                                        <li onClick={() => handleSelectAddress(item)} className="language__item">
                                            <div className="location__item-info">
                                                <div className="location__item-name">
                                                    {item.name}
                                                    <span>
                                                        {/* <AiOutlineCheckCircle /> */}
                                                        {/* {item.default && <span>Địa chỉ mặc định</span>} */}
                                                    </span>
                                                </div>
                                                <div className="location__item-address">
                                                    <span>Địa chỉ:</span> {" "}
                                                    {item.detail}, {item.wardName}, {item.districtName}, {item.provinceName}
                                                </div>
                                                <div className="location__item-phone">
                                                    <span>Điện thoại:</span> {" "}
                                                    {item.phone}
                                                </div>
                                                <div className="location__item-phone">
                                                    <span>Ghi chú:</span> {" "}
                                                    {item.note}

                                                </div>
                                            </div>
                                        </li>
                                        {/* <span onClick={() => handleDeleteAddressById(item.addressId)} style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }}>Xóa</span> */}
                                    </div>
                                ))}
                            </ul>
                            :
                            <div style={{ padding: '15px 20px' }}>
                                Danh  sách địa chỉ trống
                            </div>
                        }
                    </div>
                </div>

            </div>

            {address === null || listAddress.length === 0 ?
                <span className="payment__list-form-add" style={{ padding: '15px 20px', fontSize: '20px', marginTop: '10px' }}>
                    {/* Vui lòng chọn hoặc thêm địa chỉ của bạn */}
                </span>
                :
                <div className="payment__list-form-add">

                    <div className='info'>
                        <div className="info-user">
                            <span>Họ tên:</span>
                            <div>{address?.name}</div>
                        </div>
                        {/* <div onClick={() => setTonggleEdit(!tonggleEdit)} className="edit-info">Sửa</div> */}
                    </div>

                    <div className="info-user">
                        <span>Số đt:</span>
                        <div>{address?.phone}</div>
                    </div>

                    <div className="info-user">
                        <span>Đ/chỉ:</span>
                        <div>
                            {address?.detail},
                            {" "} {address?.wardName},
                            {" "} {address?.districtName},
                            {" "}{address?.provinceName}
                        </div>
                    </div>


                    <div className="info-user">
                        <span>Ghi chú:</span>
                        <div>
                            {/* {address?.note} */}
                            <input onChange={(e) => setNoteBill(e.target.value)} type="text" placeholder="Ghi chú ..." className="note-bill__input" />
                        </div>
                    </div>

                </div>
            }
        </>
    );
}

export default AddressInfo;