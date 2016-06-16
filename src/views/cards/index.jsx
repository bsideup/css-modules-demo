import React from "react";
import faker from "faker";
import style from "./style";
import Card from "./card";

faker.seed(42);

const data = [
    {},
    {},
    {status: "important"},
    {},
    {},
    {status: "completed"},
    {status: "completed"},
    {},
    {status: "failed"},
    {},
    {},
];

export default class CardsView extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                 {data.map(({status}, i) => (
                     <Card key={i}
                           status={status}
                           header={`${faker.hacker.verb()} ${faker.hacker.noun()}`}
                           content={`${faker.hacker.phrase()} ${faker.hacker.phrase()}`}
                     />
                 ))}
            </div>
        )
    }
}