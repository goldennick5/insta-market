import {Outlet} from 'react-router-dom';
import Header from '../components/UI/header/Header';
import SideBar from '../components/UI/SideBar/SideBar';
import MobileSideBar from '../components/UI/MobileSideBar/MobileSideBar';
import style from './defaultlayout.module.scss';
import {connect} from "react-redux";

const DefaultLayout = (props) => {
    return (
        <div className={style.wrapper}>
            <Header/>
            <div className={style.body}>
                <SideBar signUpName={props.signUpName}/>
                <Outlet />
                <MobileSideBar/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    signUpName: state.signup.values.name
})

export default connect(mapStateToProps, {})(DefaultLayout)
