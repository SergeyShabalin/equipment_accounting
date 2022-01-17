import React from 'react';
import {Input} from "./input";
import {connect} from "react-redux";
import $api from "../API";


export default function Modal({hidden, addModal, closeModal, configModal, saveModal}) {


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
        if (configModal.isEdit === true) {
            setInputs(configModal.item)
        }
    }, [configModal.item])


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
            "name": "fkfkfkkff",
            "roomNumber": "231",
            "level": "4",
            "boss": "61b8edcb693c2f2ccb96f637",
            "devices": [],
            "users": []
        }

        $api.post('http://localhost:1000/api/department', {
            dataAdd
        }).then(() => {

        })

        addModal(inputs)
        setInputs(initState)
    }


    //Передача инпутов в кнопку сохранить
    const saveInputsModal = () => {
        saveModal(inputs)
    }

    const [boss, setBoss] = React.useState([])




    React.useEffect(() => {
        $api.get('http://localhost:1000/api/users').then(({data}) => {
           let bossMap = data.map(function (boss) {
                return (
                     <option value={boss.id}
                            key={boss.id}>
                         {boss.surname} {boss.name} {boss.lastname}
                    </option>

                )
            })
            setBoss(bossMap)
        } )
    }, [])



    function selectHandler(event) {
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
                <h2 className='modalTitle'>{configModal.title}</h2>
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
                <select onChange={selectHandler}>
                    {boss}
                </select>


                {/*<Input type="text"*/}
                {/*       label="Фамилия"*/}
                {/*       value={inputs.bossSurName}*/}
                {/*       name='bossSurName'*/}
                {/*       onChange={inputHandler}*/}
                {/*/>*/}

                {/*<Input type="text"*/}
                {/*       label="Имя"*/}
                {/*       value={inputs.bossName}*/}
                {/*       name='bossName'*/}
                {/*       onChange={inputHandler}*/}
                {/*/>*/}

                {/*<Input type="text"*/}
                {/*       label="Отчество"*/}
                {/*       value={inputs.bossMiddleName}*/}
                {/*       name='bossMiddleName'*/}
                {/*       onChange={inputHandler}*/}
                {/*/>*/}

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

// function mapStateToProps(state) {
//     return {
//         name: state.modal.name,
//         level: state.modal.level,
//         bossName: state.modal.bossName,
//         bossSurName: state.modal.bossSurName,
//         bossMiddleName: state.modal.bossMiddleName,
//         cabinetNumber: state.modal.cabinetNumber
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//       fetchModal: ()=> dispatch(fetchModal())
//     }
// }

// connect(mapStateToProps, mapDispatchToProps)(Modal)