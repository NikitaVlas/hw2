import React from 'react'
import downIconPath from "../../downIconPath.png"
import upIconPath from "../../upIconPath.png"
import noneIconPath from "../../noneIconPath.svg"
import s from './SuperSort.module.css'

// добавить в проект иконки и импортировать
const downIcon = downIconPath
const upIcon = upIconPath
const noneIcon = noneIconPath

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === "") return down
    if (sort === down) return up
    if (sort === up) return ""// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                id={id + '-icon-' + sort}
                src={icon}
                className={s.icon}
            />
        </span>
    )
}

export default SuperSort
