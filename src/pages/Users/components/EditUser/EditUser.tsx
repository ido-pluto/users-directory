import {Box, Button, Flex, Group, Modal, TextInput} from '@mantine/core';
import {UserInfo} from '../../types.ts';
import {useForm} from '@mantine/form';
import {zodResolver} from 'mantine-form-zod-resolver';
import {createUserSchema, newEmptyUser} from './schema.ts';
import UserMutations from '../../hooks/useUserMutations/userMutations.ts';

type Props = {
    user?: UserInfo,
    newUser?: boolean,
    opened: boolean,
    close: () => void,
    userMutations: UserMutations,
}

export function EditUser({newUser, user, opened, close, userMutations}: Props) {
    const title = newUser ? 'Create User' : 'Edit User';
    const checkEmailDoesNotExists = (email: string) => {
        return !userMutations.emailExists(email, user);
    };

    const form = useForm({
        initialValues: user ?? newEmptyUser(),
        validate: zodResolver(
            createUserSchema(checkEmailDoesNotExists)
        ),
    });

    const onSubmit = (data: UserInfo) => {
        userMutations.save(data);
        close();
    };

    return <>
        <Modal opened={opened} onClose={close} title={title}>
            <form onSubmit={form.onSubmit(onSubmit)}>
                <Group justify="space-between">
                    <TextInput label="Title" placeholder="Mr" {...form.getInputProps('name.title')} />
                    <TextInput label="First name" placeholder="John" {...form.getInputProps('name.first')} />
                    <TextInput label="Last name" placeholder="Smith" {...form.getInputProps('name.last')} />
                </Group>

                <Box mt="lg">
                    <TextInput label="Email" placeholder="email@example.com" {...form.getInputProps('email')} />
                </Box>

                <Group mt="lg" justify="space-between">
                    <TextInput label="City" placeholder="New York" {...form.getInputProps('location.city')} />
                    <TextInput label="Country" placeholder="USA" {...form.getInputProps('location.country')} />
                    <TextInput label="Street name" placeholder="5th Avenue" {...form.getInputProps('location.street.name')} />
                    <TextInput label="Street number" placeholder="123" {...form.getInputProps('location.street.number')} />
                </Group>

                <Flex mt="lg" justify="end">
                    <Button type="submit" variant="light" color="blue">
                        Submit
                    </Button>
                </Flex>
            </form>
        </Modal>
    </>;
}
