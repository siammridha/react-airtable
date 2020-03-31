import { createStore } from "redux";
import reducer from "./reducer"

export default createStore(reducer, {
    data_types: ['int', 'varchar', 'date', 'money', 'timestamptz', 'uuid', 'decimal', 'foreign key'],
    tables: [{
        name: 'Table 1',
        id: 'sdfsdfdsfdsfdsfsd',
        columns: [{
            column_id: 'asdsfsdafsdafsaf',
            name: 'first_name',
            type: 'varchar',
            type_length: 50,
            key: '',
            not_null: true,
            default_value: '',
            width: '10rem',
        },
        {
            column_id: 'sadfasfdsafdsaf',
            name: 'last_namesadfsadfsasadfsaf saf sdfasdf',
            type: 'varchar',
            type_length: 50,
            key: '',
            not_null: true,
            default_value: '',
            width: '10rem',

        },
        {
            column_id: 'sfdfasfdsafsadfsa',
            name: 'email',
            type: 'varchar',
            type_length: 100,
            key: '',
            not_null: true,
            default_value: '',
            width: '10rem',
        }, {
            column_id: 'fsadfsafs',
            name: 'addres',
            type: 'varchar',
            type_length: 50,
            key: '',
            not_null: true,
            default_value: '',
            width: '10rem',
        }],
        rows: [
            ['Mridha', 'Siam', 'siam@sharedstudios.com'],
            ['Alam', 'Masud', 'masudalam@sharedstudios.com']
        ]
    }, {
        name: 'Table 2',
        id: 'hgkkgjkjjkjhgjgkj',
        columns: [],
        rows: []
    }]
})


