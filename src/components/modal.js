import React from 'react';
import {Input} from "./input";


export default function Modal({hidden, addModal, closeModal}) {
    const initState = {
        name: '',
        level: '',
        bossName: '',
        bossSurName: '',
        bossMiddleName: '',
        cabinetNumber: '',
    }
    const [inputs, setInputs] = React.useState(initState)


    const inputHandler = ({target}) => {
        setInputs({
            ...inputs, [target.name]: target.value,
        })
    }

    const cancelModal = () => {
        closeModal()
        setInputs(initState)
    }

    const addClearModal = () => {
        addModal(inputs)
        setInputs(initState)
    }

    return (
        <div>
            {/*Модалка*/}
            <div onClick={closeModal}
                 hidden={hidden}
                 className='modalOpacity'>
            </div>

            <div hidden={hidden} className='modalWindow'>
                <h2 className='modalTitle'>Добавление отдела</h2>
                {/*инпуты */}
                <h3>Отдел</h3>
                <Input type="text"
                       label="Отдел"
                       value={inputs.name}
                       name='name'
                       onChange={inputHandler}
                />

                <Input type="text"
                       label="Этаж"
                       value={inputs.level}
                       name='level'
                       onChange={inputHandler}
                />

                <Input type="text"
                       label="Кабинет"
                       value={inputs.cabinetNumber}
                       name='cabinetNumber'
                       onChange={inputHandler}
                />
                <hr/>
                <h3>Начальник</h3>
                <Input type="text"
                       label="Фамилия"
                       value={inputs.bossSurName}
                       name='bossSurName'
                       onChange={inputHandler}
                />

                <Input type="text"
                       label="Имя"
                       value={inputs.bossName}
                       name='bossName'
                       onChange={inputHandler}
                />

                <Input type="text"
                       label="Отчество"
                       value={inputs.bossMiddleName}
                       name='bossMiddleName'
                       onChange={inputHandler}
                />

                <div className='modalButton'>
                    <button
                        onClick={
                            addClearModal
                        }>Добавить
                    </button>

                    <button
                        onClick={cancelModal}
                    >Отменить
                    </button>
                </div>
            </div>
        </div>
    );
}

