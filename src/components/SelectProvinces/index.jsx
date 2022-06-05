import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';

function SelectProvinces({ setValueProvince, setValueDistrict, setValueWard }) {

    //đã work
    // const [listProv, setListProv] = useState(null);
    // const [listWard, setListWard] = useState(null);
    // const [listDis, setListDis] = useState(null);

    const [listProv, setListProv] = useState(null);

    const [listDisApi, setListDisApi] = useState(null);
    const [listDisInProv, setListDisInProv] = useState(null);

    const [listWardApi, setListWardApi] = useState(null);

    // const [valueProvince, setValueProvince] = useState('');
    // const [valueDistrict, setValueDistrict] = useState('');
    // const [valueWard, setValueWard] = useState('');

    // api cũ đã work
    // const getApiProvinces = async () => {
    //     const res = await axios.get('https://provinces.open-api.vn/api/?depth=3');
    //     setListProv(res.data);
    // }

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

    const getApiWards = async (id) => {
        const res = await axios({
            method: 'POST',
            url: `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id`,
            data: {
                district_id: +id,
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

    }, [])

    const handleSelectProvince = (e) => {
        const prov = (e.target.value);
        console.log(prov)
        const a = listDisApi?.filter((item) => {
            return item?.ProvinceID === +prov
        });
        setListDisInProv(a);
        setValueProvince(prov);
    }

    const handleSelectDistricts = (e) => {
        const id = (e.target.value);
        getApiWards(id);
        setValueDistrict(id);
    }

    const handleSelectWard = (e) => {
        setValueWard(e.target.value);
    }


    //đã work
    // const handleSelectProvince = (e) => {
    //     const nameProvince = (e.target.value);
    //     setValueProvince(nameProvince);
    //     const prov = listProv?.find(item => item.name === nameProvince)
    //     // console.log(prov.districts)
    //     setListDis(prov.districts)
    // }

    // const handleSelectDistricts = (e) => {
    //     const nameDis = (e.target.value);
    //     setValueDistrict(nameDis);
    //     const dis = listDis?.find(item => item.name === nameDis);
    //     // console.log(prov.districts)
    //     setListWard(dis.wards);
    // }
    // const handleSelectWard = (e) => {
    //     const nameWard = (e.target.value);
    //     setValueWard(nameWard);
    //     console.log(nameWard)
    // }

    return (
        <div className="select-controls">
            {/* <div>đã work</div> */}
            {/* <select className="select-form" onChange={(e) => handleSelectProvince(e)}>
                <option className="select-option">Chọn Tỉnh/Thành Phố</option>
                {listProv?.map((item, index) => (
                    <option className="select-option" key={index} value={item.name}>{item.name}</option>
                ))}
            </select> */}
            {/* <select disabled={listDis === null} className="select-form" onChange={(e) => handleSelectDistricts(e)}>
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
            </select> */}



            <select className="select-form" onChange={(e) => handleSelectProvince(e)}>
                <option className="select-option">Chọn Tỉnh/Thành Phố</option>
                {listProv?.map((item, index) => (
                    <option className="select-option" key={index} value={item.ProvinceID}>{item.ProvinceName}</option>
                ))}
            </select>
            <select disabled={listDisInProv === null} className="select-form"
                onChange={(e) => handleSelectDistricts(e)}
            >
                <option className="select-option" value='abc'>Chọn Quận/Huyện</option>
                {listDisInProv?.map((item, index) => (
                    <option className="select-option" key={index} value={item.DistrictID}>{item.DistrictName}</option>
                ))}
            </select>
            <select disabled={listWardApi === null} className="select-form"
                onChange={(e) => handleSelectWard(e)}
            >
                <option className="select-option" value='abc'>Chọn Xã/Phường</option>
                {listWardApi?.map((item, index) => (
                    <option className="select-option" key={index} value={item.WardCode}>{item.WardName}</option>
                ))}
            </select>


        </div>
    );
}

export default SelectProvinces;