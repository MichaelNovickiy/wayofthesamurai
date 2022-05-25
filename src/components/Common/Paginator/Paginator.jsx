import styles from "./Paginator.module.css";
import React from "react";

let Paginator = ({totalUsersCount, pageSize, currentPage, onClickPageChangedHandler}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i == 20) break;
    }

    console.log(currentPage)
    return <div>
        {pages.map(p => {
            return <span className={currentPage === p ? styles.selectedPage : ''}
                         onClick={(e) => {
                             onClickPageChangedHandler(p)
                         }}>{p + " "}</span>
        })}

    </div>

}
export default Paginator