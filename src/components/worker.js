import React from 'react'

export const Worker = ({depart}) => {

    const initState = {
        bossName: 'имя',
        bossSurName: 'фамилия',
        bossMiddleName: 'отчество',

    }

    const [infoWorker, setInfoWorker] = React.useState(initState)


    const transferInfoWork = () => {
setInfoWorker({
    ...infoWorker, depart,

})
        console.log(infoWorker)
    }

    return (
        <div>
            <h2>инфо о конкретном сотруднике</h2>
            <h2>{initState.bossName} {initState.bossSurName} {initState.bossMiddleName}</h2>
        <button onClick={transferInfoWork}>тык</button>
        </div>
    )
}