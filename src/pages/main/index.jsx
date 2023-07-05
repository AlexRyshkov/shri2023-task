import React, { useCallback, useEffect, useMemo } from 'react'
import Dashboard from '../../components/dashboard/index.jsx'
import Scenarios from '../../components/scenarios/index.jsx'
import Devices from '../../components/devices/index.jsx'
import Tabs from '../../components/devices/tabs/index.jsx'
import './index.css'
import { Data } from '../../components/devices/tabs/data.js'

function Main() {
    const [activeDeviceTab, setActiveDeviceTab] = React.useState('')

    const devices = useMemo(
        () => Data[activeDeviceTab]?.items ?? [],
        [activeDeviceTab]
    )

    useEffect(() => {
        setActiveDeviceTab(
            new URLSearchParams(location.search).get('tab') || 'all'
        )
    }, [])

    const onChangeDeviceTab = useCallback((value) => {
        setActiveDeviceTab(value)
    }, [])

    return (
        <main className="main">
            <section className="section main__general">
                <h2 className="section__title section__title-header section__main-title">
                    Главное
                </h2>
                <Dashboard />
            </section>

            <section className="section main__scripts">
                <h2 className="section__title section__title-header">
                    Избранные сценарии
                </h2>
                <Scenarios />
            </section>

            <section className="section main__devices">
                <div className="section__title">
                    <h2 className="section__title-header">
                        Избранные устройства
                    </h2>
                    <Tabs
                        activeTab={activeDeviceTab}
                        onChange={onChangeDeviceTab}
                    />
                </div>
                {devices.length > 0 && (
                    <Devices activeTab={activeDeviceTab} devices={devices} />
                )}
            </section>
        </main>
    )
}

export default Main
