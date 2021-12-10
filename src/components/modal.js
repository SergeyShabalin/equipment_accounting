import React from 'react';
import {Input} from "./input";


export default function Modal({hidden, addModal, closeModal, className, saveModal}) {
    const initState = {
        name: '',
        level: '',
        bossName: '',
        bossSurName: '',
        bossMiddleName: '',
        cabinetNumber: '',
    }
    const [inputs, setInputs] = React.useState(initState)

    React.useEffect(() => {
        if (className.isEdit === true){
            setInputs(className.item)
        }
    }, [className.item])



//занести в стейт значения из инпутов
    const inputHandler = ({target}) => {
        setInputs({
            ...inputs, [target.name]: target.value,
        })
    }
    //функционал кнопки отменить
    const cancelModal = () => {
        closeModal()
        setInputs(initState)
    }

    //функционал кнопки добавить
    const addClearModal = () => {
        addModal(inputs)
        setInputs(initState)
    }


    const saveInputsModal = () => {
        saveModal(inputs)
    }



    return (
        <div>
            {/*Модалка*/}
            <div
                 hidden={hidden}
                 onClick={cancelModal}
                 className='modalOpacity'
            >
            </div>

            <div hidden={hidden}
                 className={className.name}
            >
                <h2 className='modalTitle'>{className.title}</h2>
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
                    <button type="button"
                            className="btn btn-danger"
                            onClick={cancelModal}
                    >Отменить
                    </button>

                    <button
                        type="button"
                        className={className.btnAddHidden + ' btn btn-success'}
                        onClick={
                            addClearModal
                        }
                    >Добавить
                    </button>

                    <button
                        type="button"
                        className={className.btnSaveHidden + ' btn btn-secondary '}
                        onClick={
                            saveInputsModal
                        }
                    >Сохранить
                    </button>

                </div>
            </div>
        </div>
    );
}

