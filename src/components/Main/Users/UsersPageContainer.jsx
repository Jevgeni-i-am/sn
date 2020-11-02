import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../../redux/users-reducer";
import Preloader from "../../common/Preloaders/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        //Используем санки из Users-reducer
        //this.props.requestUsers(this.props.currentPage, this.props.pageSize);
        this.props.requestUsers(getCurrentPage, getPageSize);
    }

    onPageChanged = (pageNumber) => {
        const {requestUsers,pageSize,setCurrentPage} = this.props;
        requestUsers(pageNumber, pageSize);
        setCurrentPage(pageNumber);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

//достаёт данные из пропсов
// Data getter from props
/*let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
//HOC, передаём сразу в connect
//функция, возвращающая объект, в котором есть колбэки.
// Каждый колбэк диспатчит что-то в стор
export default compose(withAuthRedirect, connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, requestUsers
    }))(UsersContainer)