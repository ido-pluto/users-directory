import {Box, Card, Flex, Group, Skeleton, Stack} from '@mantine/core';

export function UserSkeleton() {
    return <Card shadow="sm" padding="lg" radius="md" withBorder w={400}>
        <Flex align="start" justify="space-between" m={5}>
            <Skeleton circle height={100}/>
            <Skeleton width={100} height={30}/>
        </Flex>

        <Box mt="md" mb="xs">
            <Skeleton width={200} height={15}/>
        </Box>

        <Stack gap={10}>
            <Skeleton width={200} height={15}/>
            <Skeleton width={300} height={15}/>
        </Stack>

        <Group justify="space-between" mt="lg">
            <Skeleton width={200} height={15}/>
            <Skeleton width={100} height={30}/>
        </Group>
    </Card>;
}
