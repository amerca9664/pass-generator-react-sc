import { v4 } from "uuid";

export const INCLUDE_DATA = [
    {
        title: 'Include Uppercase',
        selector: 'uppercase',
        id: v4(),
        string: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
        state: false
    },
    {
        title: 'Include Lowercase',
        selector: 'lowercase',
        id: v4(),
        string: 'abcdefghijklmnñopqrstuvwxyz',
        state: false
    } ,
    {
        title: 'Include Numbers',
        selector: 'numbers',
        id: v4(),
        string: '1234567890',
        state: false
    },
    {
        title: 'Include Symbols',
        selector: 'symbols',
        id: v4(),
        string: '+-.,!"·$%&/()=?{}',
        state: false
    }
]

