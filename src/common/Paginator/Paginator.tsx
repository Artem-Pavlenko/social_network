import React, {useState} from "react";
import s from "./Paginator.module.scss";
import cn from "classnames"

type DispatchToUsersPropsType = {
    onPageChanged: (page: number) => void
}
type StateToUsersPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
}
type UsersItemPageType = DispatchToUsersPropsType & StateToUsersPropsType


const Paginator = (props: UsersItemPageType) => {

    let pageCount = Math.ceil((props.totalItemsCount / props.pageSize))
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let [portionNumber, setPortionNumber] = useState(1)
    //общое к-во страниц/парция страниц видемых за раз, по умолчанию 10
    let portionCount = Math.ceil(pageCount / props.portionSize)
    //получаем левую границу порции страниц пользовательей
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    //получаем правую границу порции страниц пользователей
    let rightPortionPageNumber = portionNumber * props.portionSize

    const setPrevPortion = () => {
        setPortionNumber(portionNumber - 1)
    }

    const setNextPortion = () => {
        setPortionNumber(portionNumber + 1)
    }

    return (
        <div className={s.HeaderUserBlock}>
            <div className={s.paginator}>
                {portionNumber > 1 && <button onClick={setPrevPortion}>prev</button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return (
                            <span key={p} onClick={() => {props.onPageChanged(p)}}
                                  className={cn(s.pageNumber, {[s.selectedPage]: props.currentPage === p})}>
                            {p}
                            </span>
                        )
                    })}
                {portionCount > portionNumber && <button onClick={setNextPortion}> next </button>}
            </div>
        </div>
    )
}


export default Paginator;