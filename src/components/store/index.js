import { createStore } from "redux";
import reducer from "./reducer"

export default createStore(reducer, {
    data_types: ['int', 'varchar', 'date', 'money', 'timestamptz', 'uuid', 'decimal', 'foreign key'],
    tables: [{
        name: 'Table 1',
        id: 'sdfsdfdsfdsfdsfsd',
        columns: [{
            column_id: 'sfdfasfdsafsadfsa',
            name: 'email',
            type: 'varchar',
            length: 100,
            not_null: true,
            default_value: '',
            width: '10rem',
        }, {
            column_id: 'asdsfsdafsdafsaf',
            name: 'first_name',
            type: 'varchar',
            length: 50,
            not_null: true,
            default_value: '',
            width: '10rem',
        },
        {
            column_id: 'sadfasfdsafdsaf',
            name: 'last_namesadfsadfsasadfsaf saf sdfasdf',
            type: 'varchar',
            length: 50,
            not_null: true,
            default_value: '',
            width: '10rem',

        },
        {
            column_id: 'fsadfsafs',
            name: 'address',
            type: 'varchar',
            length: 50,
            not_null: true,
            default_value: '',
            width: '10rem',
        }],
        rows: [
            ['siam@sharedstudios.com', 'Siam', 'Mridha', 'dadsffsadfasfasdf'],
            ['masudalam@sharedstudios.com', 'Masud', 'Alam', 'dfasfsafsafsaf']
        ],
        new_updates: {}
    }, {
        name: 'Table 2',
        id: 'hgkkgjkjjkjhgjgkj',
        columns: [],
        rows: [],
        new_updates: {}
    }]
})


