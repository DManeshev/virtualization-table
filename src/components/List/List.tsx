import { useState, useMemo } from 'react';

import throttle from 'lodash.throttle';

interface IList {
    heightRow: number;
    visibleRow: number;
    list: any[];
}

const List = ({ heightRow, visibleRow, list }: IList) => {
    const [ start, setStart ] = useState<number>(0);

    const getTopHeight = () => heightRow * start;
    const getBottomHeight = () => heightRow * (list.length - (start + visibleRow));

    const onScroll = useMemo(
        () => throttle (
            function (e: any) {
                console.log(heightRow)
                setStart(Math.floor(e.target.scrollTop / heightRow))
            }, 
            50,
            { leading: false }
        ),
        [heightRow, visibleRow, list]
    );

    return (
        <div
            style={{ height: heightRow * visibleRow - 1 }}
            onScroll={onScroll}
            className='scrollbar overflow-auto flex-grow'
        >
            <div style={{ height: getTopHeight() }}></div>
            <ul className='flex flex-col'>
                {list.slice(start, start + visibleRow).map((item, index) => 
                    <li 
                        key={start + index} 
                        className='border px-3 rounded-xl font-mono flex items-center'
                        style={{ height: `${heightRow}px` }}
                    >
                        {item.name}
                    </li>
                )}
            </ul>
            <div style={{ height: getBottomHeight() }}></div>
        </div>
    )
}

export default List;