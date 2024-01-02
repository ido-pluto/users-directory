import {Button, Flex, Modal, Text} from '@mantine/core';

type Props = {
    deleteModelOpened: boolean,
    fullName: string,
    deletePermeability: () => void,
    close: () => void,
}

export function DeleteUserModal({deleteModelOpened, close, fullName, deletePermeability}: Props) {
    return <Modal opened={deleteModelOpened} onClose={close} title={`Delete ${fullName}`}>
        <Text size="sm">
            Are you sure? <br/>
            This action cannot be undone!
        </Text>
        <Flex justify="end">
            <Button color="red" size="xs" onClick={deletePermeability}>Delete Permeability</Button>
        </Flex>
    </Modal>;
}
