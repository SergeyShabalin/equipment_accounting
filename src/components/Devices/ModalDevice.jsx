import React from 'react'
import {Input} from '../elements/Input'
import {Select} from '../elements/Select'
import '../../styles/modalWindow.scss'
import $api from "../../API";
import { compareAsc, format } from 'date-fns'

function ModalDevice({hiddenModal, closeAddDevice, addDevice, devices}) {

    const initState = {
        name: '',
        seria: '',
        inventoryNumber: '',
        condition: 0,
        storageLife: '',
        dateStart: '',
        department: ''


    }

    const selectConditionValue = [
        {
            name: 'Cостояние',
            id: 0
        },
        {
            name: 'Новый',
            id: 1
        },
        {
            name: 'Б/У',
            id: 2
        }
    ]

    const selectStorageLifeValue = [
        {
            name: 'Cрок эксплуатации',
            id: 0
        },
        {
            name: '1 месяц',
            id: 1
        },
        {
            name: '2 месяца',
            id: 2
        },
        {
            name: '3 месяца',
            id: 3
        },
        {
            name: '6 месяцев',
            id: 4
        },
        {
            name: '1 год',
            id: 5
        },
        {
            name: '2 года',
            id: 6
        },
        {
            name: '3 года',
            id: 7
        },
        {
            name: '4 года',
            id: 8
        },
        {
            name: '5 лет',
            id: 9
        },
        {
            name: '10 лет',
            id: 10
        }
    ]



    const [input, setInput] = React.useState(initState)

    const closeModalWindow = () => {
        closeAddDevice()
        setInput(initState)
    }


    const currDate = format(new Date(), 'PPPP')
    const inputHandler = ({target}) => {
        setInput({
            ...input, [target.name]: target.value,
            dateStart: currDate
        })
    }

    const selectHandler = ({target}) => {
        console.log(target.value)
        setInput({
            ...input, [target.name]: target.value
        })
    }

    const addNewDevice = () => {
        const data = {
            ...input
        }
        $api.post('http://localhost:1000/api/device', data).then(() => {
        })
        addDevice(input)
        setInput(initState)
    }

    return (
        <div hidden={hiddenModal}>

            <div
                className='modalOpacity'
                onClick={closeModalWindow}
            >

            </div>
            <div className='modalDevice'>
                <h1 className='label'>Оборудование</h1>
                <Input
                    value={input.name}
                    label="Название"
                    name='name'
                    onChange={inputHandler}
                />
                <Input
                    value={input.seria}
                    label="Серийный номер"
                    name='seria'
                    onChange={inputHandler}
                />
                <Input
                    value={input.inventoryNumber}
                    label="Инвентарный номер"
                    name='inventoryNumber'
                    onChange={inputHandler}
                />

                <Select
                    onChange={selectHandler}
                    name='condition'
                    selectValue= {selectConditionValue}
                    value={input.condition}
                    defaultValue={'0'}
                >
                </Select>

                <Select
                    onChange={selectHandler}
                    name='storageLife'
                    selectValue= {selectStorageLifeValue}
                    value={input.storageLife}
                    defaultValue={'0'}
                >
                </Select>

                {/*<Select*/}
                {/*    onChange={selectHandler}*/}
                {/*    name='department'*/}
                {/*    selectValue= {selectConditionValue}*/}
                {/*    value={input.department}*/}
                {/*    defaultValue={'0'}*/}
                {/*>*/}
                {/*</Select>*/}

                <div className='modalButton'>
                    <button type="button"
                            className="btn btn-danger"
                            onClick={closeModalWindow}
                    >Закрыть
                    </button>

                    <button
                        type="button"
                        className=' btn btn-success'
                        onClick={addNewDevice}
                    >Добавить
                    </button>
                </div>


            </div>

        </div>)
}

export default ModalDevice