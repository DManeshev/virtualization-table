import { ChangeEvent, useContext } from "react"
import { SettingContext, ISettingContextType } from '../context';

const Settings = () => {
    const { setting, changeSetting } = useContext(SettingContext) as ISettingContextType;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => changeSetting(event);

    return (
        <div className="flex flex-col gap-3 border w-[200px] p-3 rounded-xl bg-slate-200 shadow-lg">
            <input type="number" name="dataLength" value={setting.dataLength} onChange={handleChange} />
            <input type="number" name="rowHeigth" value={setting.rowHeigth} onChange={handleChange} />
            <input type="number" name="visibleRow" value={setting.visibleRow} onChange={handleChange} />
        </div>
    )
}

export default Settings