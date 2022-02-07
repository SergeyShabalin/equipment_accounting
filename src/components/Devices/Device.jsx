import React from 'react'
import $api from "../../API";
import '../../styles/departmentWindow.css'
import {IoIosBuild, IoMdClose} from "react-icons/io";
import ModalDevice from '../Devices/ModalDevice'
import '../../styles/modalWindow.scss'
import '../../styles/Device.css'
import {Input} from '../elements/Input'


function Device() {

    const [devices, setDevices] = React.useState([])
    const [hiddenModal, setHiddenModal] = React.useState(true)
    const [filterDevice, setFilterDevice] = React.useState('')

    React.useEffect(() => {
         getDevices()
    }, [])

    async function getDevices() {
        let resp = await $api.get('/device')
        setDevices(resp.data)
    }

    function addDevice(input) {
        const idNumber = {...input, id: devices.length + 1}
        setHiddenModal(true)
        setDevices([...devices, idNumber])
    }

    function searchInputHandler({target}) {
        setFilterDevice(target.value)
        console.log(filterDevice)
    }

    function searchDevices() {
        let searchResult = devices.filter(function (device) {
            return (device.seria === filterDevice ||
                device.name === filterDevice ||
            device.inventoryNumber === filterDevice ||
            device.condition === filterDevice)

        }); console.log(searchResult)
        setDevices(searchResult)
    }

    function hiddenAddDevice() {
        setHiddenModal(false)
    }

    function closeAddDevice() {
        setHiddenModal(true)
    }

    function deleteDevice(id, name) {
        if (window.confirm('девайс ' + name + 'будет удалён. Продолжить?')) {
            $api.delete('http://localhost:1000/api/device/' + id).then(() => {
                let devicesWithDelete = devices.filter(function ({_id}) {
                    if (id === _id) {
                        return false
                    }
                    return true
                });
                setDevices(devicesWithDelete)
            })
        }
    }

    // let reverseDevices = devices.reverse() //перевернём массив
    let devicesInTable = devices.map(function (item, index) {

            return (
                <React.Fragment key={item._id}>
                    <tr align='center' valign='center'>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.seria}</td>
                        <td>{item.inventoryNumber}</td>
                        <td>{item.condition}</td>
                        <td>{item.storageLife}</td>
                        <td>{item.dateStart}</td>
                        <td>
                            <IoIosBuild className='iconsChange'
                                        type="button"
                            />
                        </td>

                        <td>
                            <IoMdClose className='iconsDelete'
                                       type='button'
                                       onClick={() => deleteDevice(item._id, item.name)}
                            />
                        </td>
                    </tr>
                </React.Fragment>
            )
        }
    )

    return (
        <>
        <div className='search'>
            <button
            className="btn btn-success buttonAddDevice"
            onClick={hiddenAddDevice}>
            Добавить оборудование
        </button>

            <input className = 'inputSearch'
                   placeholder = 'Введите данные для поиска'
                   onChange={searchInputHandler} />

            <input className='searchButton'
                   type = 'image'
                   src = "https://www.iconpacks.net/icons/1/free-search-icon-666-thumb.png"
                   onClick={searchDevices}
            />
        </div>

            <table className="table">
                <thead
                    align='center' className="table-primary ">
                <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Серийный номер</th>
                    <th>Инвентарный номер</th>
                    <th>Состояние</th>
                    <th>Срок эксплуатации</th>
                    <th>Дата</th>
                    <th colSpan="2" scope="col">Действие</th>
                </tr>
                </thead>

                <tbody>
                {devicesInTable}
                </tbody>
            </table>

            <ModalDevice
                addDevice={addDevice}
                hiddenModal={hiddenModal}
                closeAddDevice={closeAddDevice}

            />
        </>

    )
}

export default Device