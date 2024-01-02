import {useQuery} from '@tanstack/react-query';
import {QUERY_USERS_URL} from '../../../const.ts';
import {useListState} from '@mantine/hooks';
import {UserInfo} from '../types.ts';
import {useEffect} from 'react';

export function useUsers(queryKey = ['users']) {
    const [users, usersHandler] = useListState<UserInfo>();

    const results = useQuery({
        queryKey: queryKey,
        queryFn: async () => {
            const response = await fetch(QUERY_USERS_URL);
            return await response.json();
        },
        placeholderData: (previousData) => previousData,
    });

    useEffect(() => {
        if (!results.data?.results) {
            return;
        }
        usersHandler.setState(results.data.results);
    }, [results.data?.results]);

    return {
        ...results,
        users,
        usersHandler
    };
}
