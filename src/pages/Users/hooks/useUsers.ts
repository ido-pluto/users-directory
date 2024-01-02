import {useQuery} from '@tanstack/react-query';
import {QUERY_USERS_URL} from '../../../const.ts';
import {useListState} from '@mantine/hooks';
import {UserInfo} from '../types.ts';
import {useEffect} from 'react';
import {v4 as uuid} from 'uuid';

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

        const uniqueUsers = ensureUniqueUsers(results.data.results);
        usersHandler.setState(uniqueUsers);
    }, [results.data?.results]);

    return {
        ...results,
        users,
        usersHandler
    };
}


function ensureUniqueUsers(users: UserInfo[]) {
    return users.map((x: UserInfo) => ({
        ...x,
        id: {
            name: x.id.name,
            value: uuid().slice(0, 10)
        }
    }));
}
