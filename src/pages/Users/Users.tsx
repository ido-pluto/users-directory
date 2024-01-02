import {ActionIcon, Flex, Title} from '@mantine/core';
import {useUsers} from './hooks/useUsers.ts';
import {ViewUser} from './components/ViewUser/ViewUser.tsx';
import {WebsiteLayout} from '../../components/WebsiteLayout/WebsiteLayout.tsx';
import {UserSkeleton} from './components/UserSkeleton.tsx';
import {useAutoAnimate} from '@formkit/auto-animate/react';
import {useUserMutations} from './hooks/useUserMutations/useUserMutations.ts';
import {PlusIcon} from '@radix-ui/react-icons';
import {EditUser} from './components/EditUser/EditUser.tsx';
import {useDisclosure} from '@mantine/hooks';

const SKELETON_ARRAY = new Array(10).fill(0);

export function Users() {
    const users = useUsers();
    const userMutations = useUserMutations(users);
    const [animateUsers] = useAutoAnimate();
    const [editModelOpened, editModelOpenedHealer] = useDisclosure(false);

    return <WebsiteLayout>
        <Title order={1} mb={30}>Search User</Title>
        <EditUser key={userMutations.lastSave} newUser={true} opened={editModelOpened} close={editModelOpenedHealer.close} userMutations={userMutations}/>

        <Flex justify="end">
            <ActionIcon mb={20} variant="outline" color="blue" radius="xl" size="xl" onClick={editModelOpenedHealer.open}>
                <PlusIcon/>
            </ActionIcon>

        </Flex>

        <Flex wrap="wrap" justify="space-between" gap={15} ref={users.data && animateUsers}>
            {users.users.map(user => <ViewUser user={user} key={user.id.value} userMutations={userMutations}/>)}
            {users.isLoading ?
                SKELETON_ARRAY.map((_, index) => <UserSkeleton key={index}/>) :
                null
            }
        </Flex>
    </WebsiteLayout>;
}
