import {Badge, Box, Button, Card, Flex, Group, Image, Text} from '@mantine/core';
import {UserInfo} from '../../types.ts';
import {useDisclosure} from '@mantine/hooks';
import {EditUser} from '../EditUser/EditUser.tsx';
import {DeleteUserModal} from './DeleteUserModal.tsx';
import UserMutations from '../../hooks/useUserMutations/userMutations.ts';

type Props = {
    user: UserInfo
    userMutations: UserMutations,
}

export function ViewUser({user, userMutations}: Props) {
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const fullId = user.id.value && `${user.id.name}-${user.id.value}`;
    const [deleteModelOpened, deleteModelOpenedHealer] = useDisclosure(false);
    const [editModelOpened, editModelOpenedHealer] = useDisclosure(false);

    const deletePermeability = () => {
        userMutations.remove(user);
        deleteModelOpenedHealer.close();
    };

    return <>
        <DeleteUserModal deleteModelOpened={deleteModelOpened} fullName={fullName} close={deleteModelOpenedHealer.close} deletePermeability={deletePermeability}/>
        <EditUser user={user} opened={editModelOpened} close={editModelOpenedHealer.close} userMutations={userMutations}/>

        <Card shadow="sm" padding="lg" radius="md" withBorder w={400}>
            <Flex align="start" justify="space-between" m={5}>
                <Image src={user.picture.medium} height={100} alt={fullName} radius="100%"/>
                <Button variant="light" size="xs" onClick={editModelOpenedHealer.open}>Edit</Button>
            </Flex>

            <Box mt="md" mb="xs">
                <Text fw={500}>{fullName}</Text>
            </Box>

            <Text>{user.email}</Text>
            <Text size="sm" c="dimmed">
                {user.location.street.number} {user.location.street.name} {user.location.city} {user.location.country}
            </Text>

            <Group justify="space-between" mt="lg">
                <Badge color="grey">{fullId || 'no id'}</Badge>
                <Button color="red" size="compact-xs" onClick={deleteModelOpenedHealer.open}>Delete</Button>
            </Group>
        </Card>
    </>;
}
