import { v4 } from "uuid";

export const INCLUDE_DATA = [
    {
        title: 'Include Uppercase',
        selector: 'uppercase',
        id: v4()
    },
    {
        title: 'Include Lowercase',
        selector: 'lowercase',
        id: v4()
    } ,
    {
        title: 'Include Numbers',
        selector: 'numbers',
        id: v4()
    },
    {
        title: 'Include Symbols',
        selector: 'symbols',
        id: v4()
    }
]