import { useState, useEffect } from 'react'
import { getAppList } from '../../api'

function MonitoredApp() {
    const [appList, setAppList] = useState(null);

    useEffect (() => {
        const init = async () => {
            getAppList().then((data) => {
                setAppList(data);
                console.log(appList)
            })
        }
        init();
    }, [])

    return (
        <>
            <div></div>
        </>
    )
}

export default MonitoredApp
