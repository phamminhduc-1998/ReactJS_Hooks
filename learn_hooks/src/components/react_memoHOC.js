import React, { memo } from 'react'
/**
 * Ngăn components render nhiều lần không cần thiết
 * Nếu truyền props từ component cha sang, khi giá trị props thay đổi thì mới render lại
 * Nếu không truyền gì sang thì không render
 * 
 */

const React_memoHOC = ({counts}) => {
    console.log('re-render');
    return (
        <div>
            <h1>Hello memo</h1>
            <h1>{counts}</h1>

        </div>
    )
}

export default memo(React_memoHOC);
