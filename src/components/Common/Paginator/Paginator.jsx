import React from 'react';
import {Pagination} from 'antd';
import {useSelector} from 'react-redux';

const Paginator = ({totalItemsCount, currentPage, onPageChanged}) => {
    const pageSize = useSelector((state => state.usersPage.pageSize))

    return <Pagination
        total={totalItemsCount}
        current={currentPage}
        pageSize={pageSize}
        onChange={onPageChanged}
        showSizeChanger={false}
        showQuickJumper
        showTotal={(totalItemsCount) => `Total ${totalItemsCount} items`}
    />
}

export default Paginator


