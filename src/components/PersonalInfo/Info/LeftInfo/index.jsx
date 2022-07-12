import { Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import cookies from 'react-cookies';
import * as Yup from "yup";
import { getPersonalInfoById, updatePersonalInfoById } from '../../../../redux/personalInfo/apiFunctionPersonal';
import callApi from '../../../../utils/callApi';
import { typeSexs } from '../../../../utils/constances';
import TextField2 from '../../../TextField2';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

function LeftInfo({ infoUser }) {

    const validate = Yup.object({
        name: Yup.string()
            .max(50, "Tên phải ngắn hơn 50 ký tự")
            .required("Trường này bắt buộc"),
        phone: Yup.string()
            .required("Trường này bắt buộc"),
        email: Yup.string(),
    });

    const style = {
        fontSize: 17
    };

    const accessUser = cookies.load("userToken");


    let { fullName, phone, email, dateOfBirth, gender, picture } = infoUser;

    const [typeSex, setTypeSex] = useState(gender);
    const [contentPicture, setContentPicure] = useState(picture);
    const [isUrl, setIsUrl] = useState(true);


    if (contentPicture === null) {
        setContentPicure('https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg')
    }

    const inputFile = useRef(null);

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();


    const onClickChoosFile = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    }


    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        // console.log("picture", e.target.files[0])
        getBase64(e.target.files[0]);
    }

    const onLoad = fileString => {
        var strImage = fileString.replace(/^data:image\/[a-z]+;base64,/, "");
        // console.log('length', strImage);
        setContentPicure(strImage);
        setIsUrl(false);
    };

    const getBase64 = file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };

    const [dateBirth, setDateBirth] = useState(dateOfBirth?.split('T')[0]);

    const dispatch = useDispatch();

    return (
        <div className="personal__info-left">
            <span className="info__left-header">Thông tin cá nhân</span>
            <div className="info__left-container">
                <Formik
                    initialValues={
                        {
                            name: fullName || '',
                            phone: phone || "",
                            email: email || "",
                        }
                    }
                    validationSchema={validate}
                    onSubmit={(values) => {
                        const {
                            name,
                            phone,
                            email,
                        } = values;
                        // console.log(accessUser.userId, name, contentPicture, isUrl, dateBirth, typeSex);
                        updatePersonalInfoById(accessUser.userId, name, contentPicture, isUrl, dateBirth, typeSex);
                        getPersonalInfoById(dispatch, accessUser.userId);
                        toast.info('Cập nhật thông tin thành công!', {
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
                        <Form>
                            <div className="container__form-info">
                                <div className="form-avatar">
                                    <div className="form-avatar-styles">
                                        <div>
                                            <div className="form-avatar-view">
                                                <img className="avatar-default" src={preview === undefined ? contentPicture : preview} alt="avatar" />
                                                {/* <img className="avatar-default" src={contentPicture} alt="avatar2" /> */}
                                                <div className="form-avatar-edit">
                                                    <img onClick={onClickChoosFile} src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png" alt="edit" />
                                                    <input
                                                        onChange={(e) => onSelectFile(e)}
                                                        type='file'
                                                        id='file'
                                                        ref={inputFile}
                                                        style={{ display: 'none' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <TextField2
                                        label="Họ & Tên"
                                        name="name"
                                        type="text"
                                        classNameDiv="info__input-field"
                                        placeholder="Họ tên..."
                                        nameInput="info-input"
                                        labelName="info-label"
                                    />
                                    {/* <TextField2
                                        label="Nickname"
                                        name="phone"
                                        type="text"
                                        classNameDiv="info__input-field"
                                        placeholder="Số điện thoại..."
                                        nameInput="info-input"
                                        labelName="info-label"
                                    /> */}
                                    {/* <TextField2
                                        label="Email"
                                        name="email"
                                        type="text"
                                        classNameDiv="info__input-field"
                                        placeholder="Email..."
                                        nameInput="info-input"
                                        labelName="info-label"
                                    /> */}
                                </div>
                            </div>
                            {/* <div className="info__input-field">
                                <span>Ngày sinh: </span>
                                <SelectField
                                    options={days}
                                    as="input"
                                    name="d"
                                    placeholder={d.length === 0 ? "Ngày" : d}
                                    dft={d}

                                />
                                <SelectField
                                    options={months}
                                    as="input"
                                    name="m"
                                    placeholder={m.length === 0 ? "Ngày" : m + 1}
                                    dft={m + 1}


                                />
                                <SelectField
                                    options={years}
                                    as="input"
                                    name="y"
                                    placeholder={y.length === 0 ? "Năm" : y}
                                    dft={y}
                                />
                            </div> */}
                            <div className="info__input-field">
                                <label>Ngày sinh:</label>
                                <input style={{ fontSize: "15px", height: "28px", marginLeft: "15px" }}
                                    type="date"
                                    value={dateBirth}
                                    onChange={e => setDateBirth(e.target.value)}
                                />
                            </div>

                            <div className="info__input-field">
                                <span>Giới tính: </span>

                                {typeSexs.map(type => (
                                    <div key={type.value} className="payment__info-type__sex" style={{ padding: '10px 20px' }}>
                                        <input
                                            onChange={() => setTypeSex(type.value)}
                                            checked={typeSex === type.value}
                                            type="radio" />
                                        <span style={{ marginLeft: '5px' }}>{type.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="auth-form__controls">
                                <button
                                    className="btn-save"
                                    type="submit"
                                >
                                    Lưu thay đổi

                                </button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
            <ToastContainer style={style} />
        </div >
    );
}

export default LeftInfo;