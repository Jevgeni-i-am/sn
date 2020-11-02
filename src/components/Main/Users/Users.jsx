import React from "react";
import Pagenator from "../../common/pagenator/Pagenator";
import User from "./User";


let Users = ({
                 currentPage, totalUsersCount, pageSize,
                 onPageChanged, users, ...props
             }) => {
    return <div>
        <Pagenator
            currentPage={currentPage}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            onPageChanged={onPageChanged}/>

        <div>
            {users.map(u => <User user={u} key={u.id}
                                  followingInProgress={props.followingInProgress}
                                  follow={props.follow}
                                  unfollow={props.unfollow}/>
            )}
        </div>
    </div>
}


export default Users;
