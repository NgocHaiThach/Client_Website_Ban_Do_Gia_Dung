import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import cookies from 'react-cookies';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from "yup";
import { addAddressByUser } from '../../../redux/address/apiFunctionAddress';
import SelectField2 from '../../SelectField2/SelectField2';
import TextField from '../../TextField';
import './style.css';



function AddAddress({
    setTonggleAdd, tonggleAdd,
}) {
    const style = {
        fontSize: 17
    };

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setTonggleAdd(!tonggleAdd);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction);

        return () => {
            document.removeEventListener("keydown", escFunction);
        };
    }, [escFunction]);

    const validate = Yup.object({
        name: Yup.string()
            .max(50, "Tên phải ngắn hơn 50 ký tự")
            .required("Trường này bắt buộc"),
        province: Yup.string()
            .required("Trường này bắt buộc"),
        district: Yup.string()
            .required("Trường này bắt buộc"),
        ward: Yup.string()
            .required("Trường này bắt buộc"),
        detail: Yup.string()
            .required("Trường này bắt buộc"),
        note: Yup.string()
            .required("Trường này bắt buộc"),
        phone: Yup.string()
            .required("Trường này bắt buộc"),
    });


    const accessUser = cookies.load("userToken");

    // ====================
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const [listProv, setListProv] = useState(null);
    const [listDisApi, setListDisApi] = useState(null);
    const [listWardApi, setListWardApi] = useState(null);

    //get distric in localstore
    const getDistrictLocalStorage = () => {
        let district = localStorage.getItem('district')
        if (district) {
            return JSON.parse(localStorage.getItem('district'))
        } else {
            return undefined
        }
    };
    const idDistrict = getDistrictLocalStorage()?.value;

    //get local ward choosed
    const getWardLocalStorage = () => {
        let ward = localStorage.getItem('ward')
        if (ward) {
            return JSON.parse(localStorage.getItem('ward'))
        } else {
            return undefined
        }
    };
    const idWard = getWardLocalStorage()?.value;


    //get list provinces
    const getApiProvinces = async () => {
        const res = await axios({
            method: 'POST',
            url: `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province`,
            data: null,
            headers: {
                token: `300c5a62-ded5-11ec-ac64-422c37c6de1b`
            },
        })
            .catch(err => {
                console.error(err)
            })
        setListProv(res.data.data);
    }
    //get list distric
    const getApiDistricts = async () => {
        const res = await axios({
            method: 'POST',
            url: `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district`,
            data: null,
            headers: {
                token: `300c5a62-ded5-11ec-ac64-422c37c6de1b`
            },
        })
            .catch(err => {
                console.error(err)
            })
        setListDisApi(res.data.data);
    }

    //get list ward
    const getApiWards = async () => {
        const res = await axios({
            method: 'POST',
            url: `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id`,
            data: {
                district_id: +idDistrict,
            },
            headers: {
                token: `300c5a62-ded5-11ec-ac64-422c37c6de1b`
            },
        })
            .catch(err => {
                console.error(err)
            })
        setListWardApi(res.data.data);

    }

    useEffect(() => {
        getApiProvinces();
        getApiDistricts();
    }, []);

    useEffect(() => {
        getApiWards();
    }, [idDistrict]);


    //rerender 
    const [reRender, setReRender] = useState();
    useEffect(() => { }, [reRender]);

    //save local province choosed
    const getLocalStorage = () => {
        let province = localStorage.getItem('province')
        if (province) {
            return JSON.parse(localStorage.getItem('province'))
        } else {
            return undefined
        }
    };

    // define list provinces
    let PROVINCES_OPTIONS = [];

    //loop push name
    for (const key in listProv) {
        PROVINCES_OPTIONS.push(listProv[key]);
    }

    // loop define object
    PROVINCES_OPTIONS = PROVINCES_OPTIONS.map((item, i) => {
        return {
            value: +item?.ProvinceID,
            label: item?.ProvinceName,
        }
    })

    //define list object districts
    let districtInCity = [];

    const idProv = getLocalStorage()?.value;
    districtInCity = listDisApi?.filter((item) => {
        return item?.ProvinceID === +idProv
    });

    //define list name
    let DISTRICTS_OPTIONS = [];


    // //loop in array object and push district name
    for (const key in districtInCity) {
        DISTRICTS_OPTIONS.push(districtInCity[key]);
    }

    // //loop define save objetc name
    DISTRICTS_OPTIONS = DISTRICTS_OPTIONS.map((item, i) => {
        return {
            value: item.DistrictID,
            label: item.DistrictName,
        }
    });

    // //define list object wards
    let wardInDistrict = [];

    // //loop ward to object
    wardInDistrict = listWardApi?.map((item, i) => {
        return {
            value: item.WardCode,
            label: item.WardName,
        }
    });

    const [defaultAddress, setDefaultAddress] = useState(false);



    return (
        <>
            <div className="modal" >
                <div className="modal__overlay-address">
                </div>
                <div className="modal__body">
                    <div className="auth-form-address">
                        <Formik
                            initialValues={
                                {
                                    name: "",
                                    province: "",
                                    district: "",
                                    ward: "",
                                    detail: "",
                                    note: "",
                                    phone: "",
                                }
                            }
                            validationSchema={validate}
                            onSubmit={(values) => {
                                const {
                                    name,
                                    province,
                                    district,
                                    ward,
                                    detail,
                                    note,
                                    phone
                                } = values;
                                // console.log(
                                //     name,
                                //     province,
                                //     district,
                                //     ward,
                                //     detail,
                                //     note,
                                //     phone,
                                //     idProv, idDistrict, idWard
                                // );

                                addAddressByUser(dispatch,
                                    accessUser.userId,
                                    name,
                                    phone,
                                    province, district, ward,
                                    note,
                                    detail,
                                    idProv, idDistrict, idWard, defaultAddress);

                                toast.info('Thêm địa chỉ thành công!', {
                                    position: "bottom-right",
                                    autoClose: 3000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            }}
                        >
                            {(formik) => (
                                <Form className="auth-form__container-address">
                                    <div className="auth-form__header-address">
                                        <h3 className="auth-form__heading-address">THÊM ĐỊA CHỈ</h3>
                                    </div>
                                    <TextField
                                        label="Tên"
                                        name="name"
                                        type="text"
                                        className="input-field"
                                        placeholder="Tên..."
                                    />

                                    <TextField
                                        label="Số điện thoại"
                                        name="phone"
                                        type="text"
                                        className="input-field"
                                        placeholder="Số điện thoại..."
                                    />

                                    <SelectField2
                                        setReRender={setReRender}
                                        getLocalStorage={getLocalStorage}
                                        label="Tỉnh/Thành Phố"
                                        name="province"
                                        type="option"
                                        options={PROVINCES_OPTIONS} />

                                    <SelectField2
                                        setReRender={setReRender}
                                        getDistrictLocalStorage={getDistrictLocalStorage}
                                        label="Quận/Huyện"
                                        name="district"
                                        type="option"
                                        options={DISTRICTS_OPTIONS} />

                                    <SelectField2
                                        label="Xã/Phường"
                                        name="ward"
                                        type="option"
                                        options={wardInDistrict}
                                        getWardLocalStorage={getWardLocalStorage}
                                        setReRender={setReRender}
                                    />

                                    <TextField
                                        label="Số nhà/Đường"
                                        name="detail"
                                        type="text"
                                        className="input-field"
                                        placeholder="Số nhà/Đường..."
                                    />

                                    <TextField
                                        label="Ghi Chú"
                                        name="note"
                                        type="text"
                                        className="input-field"
                                        placeholder="Ghi chú..."
                                    />
                                    <div style={{ marginTop: '8px' }}>
                                        <label>Chọn làm địa chỉ mặc định</label>
                                        <input checked={defaultAddress} onChange={(e) => setDefaultAddress(e.target.checked)} style={{ marginLeft: '10px' }} type="checkbox" />
                                    </div>
                                    <div className="auth-form__controls">
                                        <Button
                                            variant="secondary"
                                            className="btn btn--primary auth-form__controls-login"
                                            type='reset'
                                            onClick={() => setTonggleAdd(!tonggleAdd)}
                                        >

                                            Trở về
                                        </Button>
                                        <Button
                                            variant="primary"
                                            className="btn btn--primary auth-form__controls-login"
                                            type="submit"
                                        // onClick={() => handleShow()}
                                        >
                                            Thêm Địa Chỉ

                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                </div>

            </div>

            <ToastContainer style={style} />

        </>
    );
}

export default AddAddress;