import { createContext, useState, PropsWithChildren, ChangeEvent } from "react";

interface ISetting {
    dataLength: number;
    rowHeigth: number;
    visibleRow: number;
}

export interface ISettingContextType {
    setting: ISetting;
    changeSetting: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SettingContext = createContext<ISettingContextType | null>(null);

const SettingProvider = ({ children }: PropsWithChildren) => {
    const [ setting, setSetting ] = useState<ISetting>({
        dataLength: 1000,
        rowHeigth: 45,
        visibleRow: 10
    })

    const changeSetting = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setSetting({ ...setting, [name]: Number(value) })
    }

    return (
        <SettingContext.Provider value={{ setting, changeSetting }} >
            {children}
        </SettingContext.Provider>
    )
}

export default SettingProvider;

