import React from "react";
import style from "./style.less";

const cardStatusToClass = {
    "important" : style.important,
    "failed": style.failed,
    "completed" : style.completed
};

export default ({status, header, content}) => (
    <div className={cardStatusToClass[status] || style.normal}>
        <div className={style.header}>{header}</div>
        <div className={style.content}>{content}</div>
    </div>
)