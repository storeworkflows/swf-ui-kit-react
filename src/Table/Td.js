import classNames from "classnames";

export const Td = ({centered, render, children}) => {
    return <td className={classNames("swfTd", centered && "center")}>
        {render ? render({centered, children}) : children}
    </td>
}