import React from 'react'
import $api from "../../API";
import '../../styles/departmentWindow.css'
import {IoIosBuild, IoMdClose} from "react-icons/io";
import ModalDevice from '../Devices/ModalDevice'
import '../../styles/modalWindow.scss'
import '../../styles/Device.css'


function Device() {

    const [devices, setDevices] = React.useState([])
    const [hiddenModal, setHiddenModal] = React.useState(true)

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

    let reverseDevices = devices.reverse() //перевернём массив
    let devicesInTable = reverseDevices.map(function (item, index) {

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
            <button
                className="btn btn-success buttonAddDevice"
                    onClick={hiddenAddDevice}>
                Добавить оборудование
            </button>

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