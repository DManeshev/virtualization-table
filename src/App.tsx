import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'

import { SettingContext, ISettingContextType } from './context';

import Navigation from "./components/Navigation";
import List from "./components/List/List"
import Table from "./components/Table/Table";
import Settings from './components/Settings';

function App() {
  const { setting } = useContext(SettingContext) as ISettingContextType;

  const list = Array(setting.dataLength).fill(1).map((_, index) => ({ name: index }));

  const table = [...Array(setting.dataLength)].map((_, index) => {
    const randomStr = "abcdefghijklmnopqrstuvwxyz".split('').sort(() => .5-Math.random()).join('');
    return { id: index, label: randomStr.slice(0, Math.random()*26 + 2), descr: randomStr.slice(0, Math.random()*26 + 2)}
  })

  return (
    <div className='max-w-[1200px] flex items-center m-auto'>
      <div className='w-full flex items-start gap-5'>
        <Navigation />

        <Routes>
          <Route path='/list' element={<List heightRow={setting.rowHeigth} visibleRow={setting.visibleRow} list={list} />} />
          <Route path='/table' element={<Table heightRow={setting.rowHeigth} visibleRow={setting.visibleRow} data={table} />} />
        </Routes>

        <Settings />
      </div>
    </div>
  )
}

export default App
