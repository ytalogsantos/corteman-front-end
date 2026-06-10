import styles from "./DefaultInfoCard.module.css";
import { Heading } from "../Heading";
import { createElement } from "react";

type DefaultInfoCardProps = {
    title: string,
    info: {
        nome: string,
        preco: number,
    }
}

function formatInfo(data: object) {
    const divChildren = [];

    for (const i in data) {
        divChildren.push(createElement("p", null, data[i as keyof object]));
    }
    return createElement("div", null, divChildren);
}

export function DefaultInfoCard({ title, info }: DefaultInfoCardProps) {
    return (
        <div className={styles.defaultInfoCardContainer}>
            <Heading color="cyan">{title}</Heading>
            <div className={styles.defaultInfoCardContent}>
                {formatInfo(info)}
            </div>
        </div>
    );
}
