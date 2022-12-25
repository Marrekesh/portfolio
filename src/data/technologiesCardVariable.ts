import {ReactComponent as HTML} from '../images/svg/html.svg'
import {ReactComponent as CSS} from '../images/svg/css.svg'
import {ReactComponent as JS} from '../images/svg/js.svg'
import {ReactComponent as GIT}  from '../images/svg/git.svg'
import {ReactComponent as TYPESCRIPT}  from '../images/svg/typescript.svg'
import {ReactComponent as REDUX}  from '../images/svg/redux.svg'
import {FunctionComponent, SVGProps} from "react";

export type ImgTechnoCArdType = FunctionComponent<SVGProps<SVGSVGElement>>

type TechoVariablesType = {
    id: string
    name: string
    Img: ImgTechnoCArdType
}

export const technologiesCardVariable: Array<TechoVariablesType> = [
    {
        id: '1',
        name: 'HTML',
        Img: HTML

    },
    {
        id: '2',
        name: 'CSS',
        Img: CSS
    },
    {
        id: '3',
        name: 'JS',
        Img: JS
    },
    {
        id: '4',
        name: 'GIT',
        Img: GIT
    },
    {
        id: '5',
        name: 'TYPESCRIPT',
        Img: TYPESCRIPT
    },
    {
        id: '6',
        name: 'REDUX',
        Img: REDUX
    },

]