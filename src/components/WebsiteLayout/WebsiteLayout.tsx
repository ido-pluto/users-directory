import React from 'react';
import {AppShell, Container, Flex, Group} from '@mantine/core';
import {PiUserCircleThin} from 'react-icons/pi';
import {ToggleTheme} from './ToggleTheme.tsx';

type Props = {
    children: React.ReactNode
}

export function WebsiteLayout({children}: Props) {
    return <AppShell
        header={{height: 60}}
        padding="md">
        <AppShell.Header>
            <Flex justify="space-between" p={15}>
                <Group gap={10} align="center">
                    <PiUserCircleThin size={25}/>
                    <span>Directory</span>
                </Group>
                <ToggleTheme/>
            </Flex>
        </AppShell.Header>

        <AppShell.Main>
            <Container>
                {children}
            </Container>
        </AppShell.Main>
    </AppShell>;
}
