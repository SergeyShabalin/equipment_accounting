import React from 'react'

import '../styles/modalWindow.scss'
import '../styles/departmentWindow.css'
import {IoIosBuild, IoMdClose} from 'react-icons/io'

import '../components/modalWindow'
import Modal from "../components/modal"

import {NavLink} from "react-router-dom";
import $api from "../API";


const Departments = () => {
    //главный стейт отдела
    const [depart, setDepart] = React.useState(
        []
    )

    React.useEffect(() => {
        $api.get('http://localhost:1000/api/department').then(({data}) => {
            setDepart(data)
        })
    }, [])



    //стэйт модалки
    const [hidden, setHidden] = React.useState(true)

    //стэйт конфиг модал
    const [configModal, setConfigModal] = React.useState({
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
        setConfigModal({
            name: 'modalWindow',
            title: 'Добавление отдела',
            btnAddHidden: 'visibleButton',
            btnSaveHidden: 'hiddenButton',
             item: {},
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
            $api.delete('http://localhost:1000/api/department?departmentId=' + id).then(()=>{

                let filteredDepart = depart.filter(function({_id}) {
                    if(id === _id){
                        return false
                    }
                   return true
                });
                setDepart(filteredDepart)

            })
        }
    }

    //функционал кнопки добавить новый отдел
    const addModal = (inputs) => {
        const idNumber = {...inputs, id: depart.length + 1}
        setHidden(true)
        setDepart([...depart, idNumber])
    }


    //map массива depart
    let res = depart.map(function (dep, index) {
        //открыть модалку изменения
        const openModalChange = () => {
            const currentItem = {
                name: dep.name,
                level: dep.level,
                bossName: dep.boss.name,
                bossSurName: dep.boss.surname,
                bossMiddleName: dep.boss.lastname,
                cabinetNumber: dep.roomNumber,

            }

            setHidden(false)
            setConfigModal({
                name: 'modalWindowChange',
                title: 'Изменить данные',
                btnAddHidden: 'hiddenButton',
                btnSaveHidden: 'visibleButton',
                item: currentItem,
                isEdit: true
            })
        }



        return (
            //тело таблицы
            <tr align='center'
                key={dep._id}>
                <th scope="row">{index+1}</th>
                <td>{dep.name}</td>
                <td>{dep.level}</td>
                {dep.boss ?
                    <td><NavLink depart={depart}
                                 onClick={transferInfo}
                                 to={"/worker/"+dep.boss._id}
                                 className="nav-link"
                                 >

                        {dep.boss.surname} {dep.boss.name[0]}. {dep.boss.lastname[0]}.

                    </NavLink></td>
                    : <td>нет ответственного</td>}
                <td>{dep.roomNumber}</td>


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
                               onClick={() => deleteModal(dep._id)}/>
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
                <button className="btn btn-success " onClick={openModalAdd}>Добавить новый отдел
                </button>
            </div>
            <Modal
                hidden={hidden}
                addModal={addModal}
                closeModal={closeModal}
                configModal={configModal}
                saveModal={saveModal}
            />
        </div>
    )
}

export default Departments