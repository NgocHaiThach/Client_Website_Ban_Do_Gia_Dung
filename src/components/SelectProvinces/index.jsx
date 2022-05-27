import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';

function SelectProvinces({ setValueProvince, setValueDistrict, setValueWard }) {

    const [listProv, setListProv] = useState(null);
    const [listWard, setListWard] = useState(null);
    const [listDis, setListDis] = useState(null);

    // const [valueProvince, setValueProvince] = useState('');
    // const [valueDistrict, setValueDistrict] = useState('');
    // const [valueWard, setValueWard] = useState('');

    const getApiProvinces = async () => {
        const res = await axios.get('https://provinces.open-api.vn/api/?depth=3');
        setListProv(res.data);
    }

    useEffect(() => {
        getApiProvinces();
    }, [])

    const handleSelectProvince = (e) => {
        const nameProvince = (e.target.value);
        setValueProvince(nameProvince);
        const prov = listProv?.find(item => item.name === nameProvince)
        // console.log(prov.districts)
        setListDis(prov.districts)
    }

    const handleSelectDistricts = (e) => {
        const nameDis = (e.target.value);
        setValueDistrict(nameDis);
        const dis = listDis?.find(item => item.name === nameDis);
        // console.log(prov.districts)
        setListWard(dis.wards);
    }
    const handleSelectWard = (e) => {
        const nameWard = (e.target.value);
        setValueWard(nameWard);
        console.log(nameWard)
    }

    return (
        <div className="select-controls">
            <select className="select-form" onChange={(e) => handleSelectProvince(e)}>
                <option className="select-option">Chọn Tỉnh/Thành Phố</option>
                {listProv?.map((item, index) => (
                    <option className="select-option" key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
            <select disabled={listDis === null} className="select-form" onChange={(e) => handleSelectDistricts(e)}>
                <option className="select-option" value='abc'>Chọn Quận/Huyện</option>
                {listDis?.map((item, index) => (
                    <option className="select-option" key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
            <select disabled={listWard === null} className="select-form" onChange={(e) => handleSelectWard(e)}>
                <option className="select-option" value='abc'>Chọn Xã/Phường</option>
                {listWard?.map((item, index) => (
                    <option className="select-option" key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectProvinces;