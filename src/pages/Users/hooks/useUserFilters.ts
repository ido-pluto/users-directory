import {useSetState} from '@mantine/hooks';

export function useUserFilters() {
    return useSetState(newFilters());

}


function newFilters() {
    return {
        'name.title': {
            value: '',
            label: 'Title',
            placeholder: 'Title',
            autocomplete: []
        },
        'name.first': {
            value: '',
            label: 'First Name',
            placeholder: 'First Name',
            autocomplete: []
        },
        'name.last': {
            value: '',
            label: 'Last Name',
            placeholder: 'Last Name',
            autocomplete: []
        },
        'location.city': {
            value: '',
            label: 'City',
            placeholder: 'City',
            autocomplete: []
        },
        'location.country': {
            value: '',
            label: 'Country',
            placeholder: 'Country',
            autocomplete: []
        },
        'location.street.name': {
            value: '',
            label: 'Street Name',
            placeholder: 'Street Name',
            autocomplete: []
        },
        'location.street.number': {
            value: '',
            label: 'Street Number',
            placeholder: 'Street Number',
            autocomplete: []
        }
    };
}
