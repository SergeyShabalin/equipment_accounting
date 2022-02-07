import React from 'react';
import {Input} from "../elements/Input";
import $api from "../../API";


export default function Modal({hidden, addModal, closeModal, configModal, saveModal}) {


    const initState = {
        name: '',
        level: '',
        roomNumber: '',
        boss: ''
    }
    const [inputs, setInputs] = React.useState(initState)
    const [bosses, setBosses] = React.useState([])

    React.useEffect(() => {
        if (configModal.isEdit === true) {
            setInputs(configModal.item)
        }
    }, [configModal.item])

    React.useEffect(() => {
        getBosses()
    }, [])


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

        const dataAdd = {
            ...inputs,
            "devices": [],
            "users": []
        }

        $api.post('http://localhost:1000/api/department',
            dataAdd
        ).then(() => {
        })
        addModal(inputs)
        setInputs(initState)
    }

    //Передача инпутов в кнопку сохранить
    const saveInputsModal = () => {
        saveModal(inputs)
    }

    async function getBosses() {
        let resp = await $api.get('http://localhost:1000/api/users')
        setBosses(resp.data)
    }

    let bossMap = bosses.map(function (boss) {
        return (
            <option value={boss._id}
                    key={boss._id}>
                {boss.surname} {boss.name} {boss.lastname}
            </option>
        )
    })

    function selectHandler(event) {
        console.log(event.target.value)
        setInputs({
            ...inputs, boss: event.target.value,
        })
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
                 className={configModal.name}
            >
                <h2 className='modalTitle label'>{configModal.title}</h2>
                {/*инпуты */}
                <h3 className='label'>Отдел</h3>
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
                       value={inputs.roomNumber}
                       name='roomNumber'
                       onChange={inputHandler}
                />
                <hr/>

                <h3 className='label'>Начальник</h3>
                <select defaultValue={'0'} className="form-select selectShadow"
                        onChange={selectHandler}>
                    {bossMap}
                </select>


                <div className='modalButton'>
                    <button type="button"
                            className="btn btn-danger"
                            onClick={cancelModal}
                    >Отменить
                    </button>

                    <button
                        type="button"
                        className={configModal.btnAddHidden + ' btn btn-success'}
                        onClick={
                            addClearModal
                        }
                    >Добавить
                    </button>

                    <button
                        type="button"
                        className={configModal.btnSaveHidden + ' btn btn-secondary '}
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

