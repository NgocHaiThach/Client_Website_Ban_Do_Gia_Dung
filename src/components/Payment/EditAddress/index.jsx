import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import callApi from '../../../utils/callApi';
import InputProvinces from '../../InputProvinces';
import cookies from 'react-cookies';


function EditAddress({
    setTonggleEdit, tonggleEdit,
    // valueProvince, setValueProvince,
    // valueDistrict, setValueDistrict,
    // valueWard, setValueWard,
    address
}) {
    const schema = yup.object().shape({
        name: yup.string().required().max(50),
        phone: yup.string().required().min(10).max(10),
        note: yup.string().required(),
    }).required();
    // use React hook form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [valueProvince, setValueProvince] = useState(address.province);
    const [valueDistrict, setValueDistrict] = useState(address.district);
    const [valueWard, setValueWard] = useState(address.ward);

    const accessUser = cookies.load("userToken");

    console.log(address)
    const handleEditAddress = async (name, phone, province, district, ward, note) => {
        const res = callApi("/addresses/updateaddress", "PUT", {
            addressId: address.addressId,
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
        setTonggleEdit(!tonggleEdit)
        //cần get lại list addresses
    }
    //handleSubmit
    const onSubmit = (data) => {
        const { name, phone, note } = data;
        handleEditAddress(name, phone, valueProvince, valueDistrict, valueWard, note)
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
                                            defaultValue={address.name}
                                        />
                                    </p>


                                    <p className="auth-form__group">
                                        <input
                                            name="password"
                                            {...register("phone")}
                                            type="text"
                                            placeholder="Số điện thoại"
                                            className="auth-form__iput"
                                            defaultValue={address.phone}
                                        />
                                    </p>
                                </div>

                                <div className="auth-form__validate">
                                    {errors?.name?.type === "required" && <p className="valid-form__message">* Vui lòng nhập Họ tên</p>}
                                    {errors?.name?.type === "max" && <p className="valid-form__message">* Họ tên tối đa 30 ký tự</p>}
                                    {errors?.phone?.type === "required" && <p className="valid-form__message validate__left">* Vui lòng nhập số điện thoại</p>}
                                    {errors?.phone?.type === "min" && <p className="valid-form__message validate__left ">* Vui lòng nhập đúng số điện thoại</p>}
                                    {errors?.phone?.type === "max" && <p className="valid-form__message validate__left">* Vui lòng nhập đúng số điện thoại</p>}
                                </div>

                                <InputProvinces setValueProvince={setValueProvince}
                                    setValueDistrict={setValueDistrict}
                                    setValueWard={setValueWard}
                                    province={address.province}
                                    district={address.district}
                                    ward={address.ward} />
                                <textarea className="payment__address-note__input-address"
                                    placeholder="Địa chỉ cụ thể.."
                                    defaultValue={`${address.detail}, ${address.note}`}
                                    {...register("note")}
                                />
                                {errors?.note?.type === "required" && <p className="valid-form__message validate__left">* Vui lòng nhập địa chỉ cụ thể</p>}
                            </div>

                            <div className="auth-form__controls">
                                <button onClick={() => setTonggleEdit(!tonggleEdit)}
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

export default EditAddress;