import axios from 'axios';
import React, { useEffect, useState } from 'react';

function InputProvinces({ province, district, ward, setValueProvince, setValueDistrict, setValueWard }) {
    const [listProv, setListProv] = useState(null);
    const [listWard, setListWard] = useState(null);
    const [listDis, setListDis] = useState(null);

    console.log('va', province, district, ward)

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
                <option selected className="select-option">{province}</option>
                {listProv?.map((item, index) => (
                    <option className="select-option" key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
            <select className="select-form" onChange={(e) => handleSelectDistricts(e)}>
                <option className="select-option" value='abc'>{district}</option>
                {listDis?.map((item, index) => (
                    <option className="select-option" key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
            <select className="select-form" onChange={(e) => handleSelectWard(e)}>
                <option className="select-option" value='abc'>{ward}</option>
                {listWard?.map((item, index) => (
                    <option className="select-option" key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default InputProvinces;