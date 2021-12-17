import React from 'react'

import '../styles/modalWindow.scss'
import '../styles/departmentWindow.css'
import {IoIosBuild, IoMdClose} from 'react-icons/io'

import '../components/modalWindow'
import Modal from "../components/modal"

import {NavLink} from "react-router-dom";


const Departments = () => {
    //главный стейт отдела
    const [depart, setDepart] = React.useState(
        [{
            id: 1,
            name: 'Отдел информационного обеспечения',
            level: '4',
            bossName: 'Василий',
            bossSurName: 'Ковалёв',
            bossMiddleName: 'Вячеславович',
            cabinetNumber: '412',

        },
            {
                id: 2,
                name: 'Отдел хозяйственного обеспечения',
                level: '3',
                bossName: 'Андрей',
                bossSurName: 'Кузнецов',
                bossMiddleName: 'Иванович',
                cabinetNumber: '212',

            }
        ]
    )


    //стэйт модалки
    const [hidden, setHidden] = React.useState(true)

    //стэйт класснейм
    const [className, setClassName] = React.useState({
        name: 'modalWindow',
        title: 'Добавление отдела',
        btnAddHidden: 'visibleButton',
        btnSaveHidden: 'visibleButton',
        item: {
            name: '',
            level: '',
            bossName: '',
            bossSurName: '',
            bossMiddleName: '',
            cabinetNumber: '',
            isEdit: false
        }
    })

    //закрыть модалку
    const closeModal = () => {
        setHidden(true)
    }

    //открыть модалку добавления
    const openModalAdd = () => {
        setHidden(false)
        setClassName({
            name: 'modalWindow',
            title: 'Добавление отдела',
            btnAddHidden: 'visibleButton',
            btnSaveHidden: 'hiddenButton',
            // item: {},
            isEdit: false
        })
    }

    //функционал кнопки сохранить
    const saveModal = (inputs) => {
        let newDepart = depart.map(function (item) {
            if (inputs.id === item.id) {
                return inputs
            } else return item
        })
        setDepart(
            newDepart
        )
        closeModal()
    }


    //Передать информацию в worker
    const transferInfo = () => {

    }


    //функционал кнопки удалить
    const deleteModal = (id) => {
        const confirm = window.confirm('строка будет удалена. Продолжить?')
        if (confirm) {

            const del = depart.filter(function (item) {
                    return id!==item.id
            })
            setDepart(del)
        }
    }


    //функционал кнопки добавить новый отдел
    const addModal = (inputs) => {
        const idNumber = {...inputs, id: depart.length + 1}
        setHidden(true)
        setDepart([...depart, idNumber])
    }

    //map массива depart
    let res = depart.map(function (item) {
        //открыть модалку изменения
        const openModalChange = () => {
            setHidden(false)
            setClassName({
                name: 'modalWindowChange',
                title: 'Изменить данные',
                btnAddHidden: 'hiddenButton',
                btnSaveHidden: 'visibleButton',
                item: item,
                isEdit: true
            })
        }

        return (
            //тело таблицы
            <tr align='center'
                key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.level}</td>
                <td><NavLink depart={depart}
                             onClick={transferInfo}
                             to="/worker/id"
                             className="nav-link">
                    {item.bossSurName} {item.bossName} {item.bossMiddleName}</NavLink></td>
                <td>{item.cabinetNumber}</td>

                {/*редактировать*/}
                <td>
                    <IoIosBuild className='iconsChange'
                                type="button"
                                onClick={openModalChange}/>
                </td>

                {/*удалить*/}
                <td>
                    <IoMdClose className='iconsDelete'
                               type="button"
                               onClick={() => deleteModal(item.id)}/>
                </td>

            </tr>
        )
    })

    //Заголовок таблицы
    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-5">Отделы</h1>
                </div>
            </div>


            <table className="table table-hover ">
                <thead
                    align='center' className="table-primary ">
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Отдел</th>
                    <th scope="col">Этаж</th>
                    <th scope="col">Начальник</th>
                    <th scope="col">Кабинет</th>
                    <th colspan="2" scope="col">Действие</th>

                </tr>

                {/*Содержимое таблицы*/}
                </thead>
                <tbody>
                {res}
                </tbody>
            </table>
            <div>
                <button  className="btn btn-success " onClick={openModalAdd}>Добавить новый отдел
                </button>

            </div>
            <Modal
                hidden={hidden}
                addModal={addModal}
                closeModal={closeModal}
                className={className}
                saveModal={saveModal}
            />
        </div>
    )
}

export default Departments