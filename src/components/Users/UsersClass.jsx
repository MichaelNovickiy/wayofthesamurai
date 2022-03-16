import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    };

    onClickPageChangedHandler = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
            if (i == 20) break;
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     this.onClickPageChangedHandler(p)
                                 }}>{p}</span>
                })}
            </div>
            {this.props.users.map(m => <div key={m.id}>
            <span>
                <div>
                    <img
                        src={m.photos.small != null ? m.photos.small : 'data:image/png;base64,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'}
                        className={styles.userPhoto}/>
                </div>
                <div>
                    {m.followed ? <button onClick={() => {
                            this.props.unFollow(m.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            this.props.follow(m.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{m.name}</div>
                    <div>{m.status}</div>
                </span>
                <span>
                    <div>{'m.location.country'}</div>
                    <div>{"m.location.city"}</div>
                </span>
            </span>
            </div>)}
        </div>
    }
}

export default Users;