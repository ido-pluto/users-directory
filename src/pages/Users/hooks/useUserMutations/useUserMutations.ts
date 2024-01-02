import {UseListStateHandlers} from '@mantine/hooks';
import {UserInfo} from '../../types.ts';
import {useMemo} from 'react';
import UserMutations from './userMutations.ts';

type UserMutationsArgs = {
    users: UserInfo[],
    usersHandler: UseListStateHandlers<UserInfo>
}

export function useUserMutations({users, usersHandler}: UserMutationsArgs) {
    return useMemo(() => new UserMutations(users, usersHandler), [users]);
}
