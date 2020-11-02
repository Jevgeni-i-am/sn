import React from 'react';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import News from "./News";


class NewsPageContainer extends React.Component {
    componentDidMount() {

    }

    render() {
    }
}

//HOC
let AuthRedirectComponent = withAuthRedirect(News);

const NewsPageContainer = connect()(AuthRedirectComponent);

export default NewsPageContainer;




























