// import { cloneElement, useMemo, useState } from 'react';
// import { useElementSize } from 'usehooks-ts';
// import throttle from 'lodash.throttle';

// interface VirtualizationProps {
//     headTable: any[];
//     rowHeight: number;
//     rowShow: number;
//     children: Array<JSX.Element>;
//     gap?: number;
// }

// const Virtualization = (props: VirtualizationProps) => {
//     const { headTable, rowHeight, rowShow, children, gap = 10 } = props;

//     const [ scrollPosition, setScrollPosition ] = useState(0)
//     const [ containerRef, { height: containerHeight } ] = useElementSize<HTMLDivElement>();

//     const onScroll = useMemo(
//         () => throttle (
//             function (e: any) {
//                 setScrollPosition(e.target.scrollTop);
//             },
//             50,
//             { leading: false }
//         ),
//         []
//     );

//     const visibleChildren = useMemo(() => {
//         const startIndex = Math.max(Math.floor(scrollPosition / rowHeight) - rowShow, 0);

//         const endIndex = Math.min(Math.ceil((scrollPosition + containerHeight) / rowHeight - 1) + rowShow, children.length - 1);
        
//         return children.slice(startIndex, endIndex + 1).map((child, index) => 
//             cloneElement(child, {
//                 style: {
//                     position: 'absolute',
//                     top: (startIndex + index) * rowHeight + index * gap,
//                     height: rowHeight,
//                     left: 0,
//                     right: 0,
//                     lineHeight: `${rowHeight}px`,
//                 }
//             })
//         );
//     }, [ children, containerHeight, rowHeight, scrollPosition, gap ])

//     return (
//         // <ul
//         //     onScroll={onScroll}
//         //     style={{ overflowY: 'scroll', position: 'relative', height: '100%' }}
//         //     ref={containerRef}
//         // >
//         //     {visibleChildren}
//         // </ul>
//         <div
//             onScroll={onScroll} 
//             style={{ overflowY: 'scroll', position: 'relative', height: '100%' }}
//             ref={containerRef}
//         >
//             <table className="table-app w-screen table-fixed border-0">
//                 <thead>
//                     {headTable.map(item => 
//                         <th key={item.id}>
//                             <div className='flex items-center gap-2'>
//                                 <svg className='w-2 shrink-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
//                                     <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
//                                 </svg>
//                                 <span>{item.Name}</span>
//                             </div>
//                         </th>
//                     )}
//                 </thead>
//                 <tbody>
//                     {visibleChildren}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Virtualization;