import React from "react";
import style from "./style.less";
import {Link} from "react-router";

export default () => (
    <div className={style.wrapper}>
        <form className={style.form}>
            <h1 className={style.header}>Login</h1>
            <input className={style.normalInput} type="text" placeholder="username"/>
            <input className={style.invalidInput} type="password" placeholder="password"/>
            <Link className={style.loginButton} to="/cards">Login</Link>
        </form>
    </div>
)