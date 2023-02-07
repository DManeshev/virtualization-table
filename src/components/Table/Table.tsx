import { useState, useMemo } from 'react';

import throttle from 'lodash.throttle';

interface ITable {
    heightRow: number;
    visibleRow: number;
    data: any[];
}

const Table = ({ heightRow, visibleRow, data }: ITable) => {
    const [ start, setStart ] = useState<number>(0);

    const getTopHeight = () => heightRow * start;
    const getBottomHeight = () => heightRow * (data.length - (start + visibleRow));

    const onScroll = useMemo(
        () => throttle (
            function (e: any) {
                setStart(Math.floor(e.target.scrollTop / heightRow))
            }, 
            50,
            { leading: false }
        ),
        [heightRow, visibleRow, data]
    );
    
    return (
        <div
            className='scrollbar overflow-auto flex-grow'
            style={{ height: heightRow * visibleRow }}
            onScroll={onScroll}
        >
            <div style={{ height: getTopHeight() }}></div>
            <table className='w-full'>
                {/* <thead>
                    <tr className='bg-slate-400'>
                        <th className='w-[300px]'>id</th>
                        <th className='w-[300px]'>label</th>
                        <th className='w-[300px]'>descr</th>
                    </tr>
                </thead> */}

                <tbody>
                    {data.slice(start, start + visibleRow).map((item, index) => 
                        <tr 
                            key={start + index}
                            style={{ height: `${heightRow}px` }}
                            className='border font-mono'
                        >
                            <td className='p-3 w-[300px]'>{item.id}</td>
                            <td className='p-3 w-[300px]'>{item.label}</td>
                            <td className='p-3 w-[300px]'>{item.descr}</td>
                        </tr>    
                    )}
                </tbody>
            </table>
            <div style={{ height: getBottomHeight() }}></div>
        </div>
    )
}

export default Table;