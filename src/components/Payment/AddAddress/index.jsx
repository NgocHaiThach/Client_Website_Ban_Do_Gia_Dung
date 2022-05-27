import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SelectProvinces from '../../SelectProvinces';
import callApi from '../../../utils/callApi';
import cookies from 'react-cookies';


function AddAddress({
    setTonggleAdd, tonggleAdd,
    // valueProvince, setValueProvince,
    // valueDistrict, setValueDistrict,
    // valueWard, setValueWard,
}) {
    const schema = yup.object().shape({
        name: yup.string().required().max(50),
        phone: yup.string().required().min(10).max(10),
        note: yup.string().required(),
    }).required();

    const accessUser = cookies.load("userToken");

    // use React hook form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [valueProvince, setValueProvince] = useState('');
    const [valueDistrict, setValueDistrict] = useState('');
    const [valueWard, setValueWard] = useState('');

    const handleAddAddress = async (name, phone, province, district, ward, note) => {
        const res = callApi("/addresses/addaddress", "POST", {
            customerId: accessUser.userId,
            name: name,
            company: "VTDCompany",
            phone: phone,
            province: province,
            district: district,
            ward: ward,
            detail: "1173 Kha Vạn Cân",
            note: note,
            type: true,
            default: true
        })
        setTonggleAdd(!tonggleAdd)
        //cần get lại list addresses
    }

    //handleSubmit
    const onSubmit = (data) => {
        const { name, phone, note } = data;
        handleAddAddress(name, phone, valueProvince, valueDistrict, valueWard, note)
        // console.log('ádad', { ...data, province: valueProvince, district: valueDistrict, ward: valueWard });
    }
    return (
        <>
            <div className="modal" >
                <div className="modal__overlay-address">
                </div>
                <div className="modal__body">
                    <div className="auth-form-address">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="auth-form__container-address">
                            <div className="auth-form__header-address">
                                <h3 className="auth-form__heading-address">THÊM ĐỊA CHỈ</h3>
                            </div>
                            <div className="auth-form__form">
                                <div className="auth-form__name-phone">


                                    <p className="auth-form__group">
                                        <input
                                            name="name"
                                            {...register("name")}
                                            type="text"
                                            placeholder="Họ tên"
                                            className="auth-form__iput"
                                        />
                                    </p>


                                    <p className="auth-form__group">
                                        <input
                                            name="password"
                                            {...register("phone")}
                                            type="text"
                                            placeholder="Số điện thoại"
                                            className="auth-form__iput" />
                                    </p>
                                </div>

                                <div className="auth-form__validate">
                                    {errors?.name?.type === "required" && <p className="valid-form__message">* Vui lòng nhập Họ tên</p>}
                                    {errors?.name?.type === "max" && <p className="valid-form__message">* Họ tên tối đa 30 ký tự</p>}
                                    {errors?.phone?.type === "required" && <p className="valid-form__message validate__left">* Vui lòng nhập số điện thoại</p>}
                                    {errors?.phone?.type === "min" && <p className="valid-form__message validate__left ">* Vui lòng nhập đúng số điện thoại</p>}
                                    {errors?.phone?.type === "max" && <p className="valid-form__message validate__left">* Vui lòng nhập đúng số điện thoại</p>}
                                </div>

                                <SelectProvinces setValueProvince={setValueProvince}
                                    setValueDistrict={setValueDistrict}
                                    setValueWard={setValueWard}
                                />
                                <textarea
                                    {...register("note")}
                                    className="payment__address-note__input-address"
                                    placeholder="Địa chỉ cụ thể.." />
                                {errors?.note?.type === "required" && <p className="valid-form__message validate__left">* Vui lòng nhập địa chỉ cụ thể</p>}

                            </div>

                            <div className="auth-form__controls">
                                <button onClick={() => setTonggleAdd(!tonggleAdd)}
                                    className="btn btn--primary auth-form__controls-login"
                                >
                                    Trở Lại
                                </button>
                                <button
                                    // onClick={handleSubmit(onSubmit)}
                                    type="submit"
                                    className="btn btn--primary auth-form__controls-login"
                                >
                                    Thêm Địa Chỉ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddAddress;