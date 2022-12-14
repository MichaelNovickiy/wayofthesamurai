import React from 'react';
import {Avatar, List} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const ListItems = ({posts, avatar}) => {
    
    return (
        <List
            itemLayout="horizontal"
            dataSource={posts}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        style={{alignItems: 'center'}}
                        avatar={avatar && <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>}
                        title={<>
                            {item.message && <p>{item.message}</p>}
                            {item.name &&  <Link to={'/dialogs/' + item.id}>{item.name}</Link> }
                        </>}
                        description={item.likecount && <p>Likes: {item.likecount}</p>}
                    />
                </List.Item>
            )}
        />
    );
};

export default ListItems;