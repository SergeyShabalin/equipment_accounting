import React from 'react'
import {Input} from '../elements/Input'
import {Select} from '../elements/Select'
import '../../styles/modalWindow.scss'
import $api from "../../API";

function ModalDevice({hiddenModal, closeAddDevice, addDevice}) {

    const initState = {
        name: '',
        seria: '',
        inventoryNumber: '',
        condition: 0,
        storageLife: ''

    }

    const selectValue = [
        {
            name: 'Новый',
            id: 1
        },
        {
            name: 'Б/У',
            id: 2
        },
        {
            name: 'Cостояние',
            id: 0
        }
    ]

    const [input, setInput] = React.useState(initState)

    const closeModalWindow = () => {
        closeAddDevice()
        setInput(initState)
    }

    const inputHandler = ({target}) => {
        setInput({
            ...input, [target.name]: target.value
        })
    }

    const selectHandler = ({target}) => {
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

                <Input
                    value={input.storageLife}
                    label="Срок эксплуатации"
                    name='storageLife'
                    onChange={inputHandler}
                />

                <Select
                    onChange={selectHandler}
                    name='condition'
                    selectValue= {selectValue}
                    value={input.condition}
                    defaultValue={'0'}
                >
                </Select>


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