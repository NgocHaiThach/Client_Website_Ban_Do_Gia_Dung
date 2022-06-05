import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import callApi from '../../../utils/callApi';
import InputProvinces from '../../InputProvinces';
import cookies from 'react-cookies';
import { editAddressByUser } from '../../../redux/address/apiFunctionAddress';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import axios from 'axios';
import { Form, Formik } from 'formik';
import TextField from '../../TextField';
import SelectField2 from '../../SelectField2/SelectField2';
import { Button } from 'react-bootstrap';



function EditAddress({
    setTonggleEdit, tonggleEdit,
    address
}) {
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setTonggleEdit(!tonggleEdit);
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
    };

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
    };

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
    };

    useEffect(() => {
        getApiProvinces();
        getApiDistricts();
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
    });

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
    };

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

    const [show, setShow] = useState(false);
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
                                    name: address.name || "",
                                    province: "",
                                    district: "",
                                    ward: "",
                                    detail: address.detail || "",
                                    note: address.note || "",
                                    phone: address.phone || "",
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

                                editAddressByUser(dispatch,
                                    address.addressId,
                                    accessUser.userId,
                                    name,
                                    phone,
                                    province, district, ward,
                                    note,
                                    detail,
                                    idProv, idDistrict, idWard
                                )

                                setShow(true);
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
                                        label="Tên"
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
                                        options={PROVINCES_OPTIONS}
                                        dtf={address.provinceName}
                                        valuField={address.provinceId}
                                    />

                                    <SelectField2
                                        setReRender={setReRender}
                                        getDistrictLocalStorage={getDistrictLocalStorage}
                                        label="Quận/Huyện"
                                        name="district"
                                        type="option"
                                        options={DISTRICTS_OPTIONS}
                                        dtf={address.districtName}
                                        valuField={address.districtId}
                                    />

                                    <SelectField2
                                        label="Xã/Phường"
                                        name="ward"
                                        type="option"
                                        options={wardInDistrict}
                                        getWardLocalStorage={getWardLocalStorage}
                                        setReRender={setReRender}
                                        dtf={address.wardName}
                                        valuField={address.wardId}
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
                                    <div className="auth-form__controls">


                                        <Button
                                            variant="secondary"
                                            className="btn btn--primary auth-form__controls-login"
                                            type='reset'
                                            onClick={() => setTonggleEdit(!tonggleEdit)}
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
        </>
    );
}

export default EditAddress;