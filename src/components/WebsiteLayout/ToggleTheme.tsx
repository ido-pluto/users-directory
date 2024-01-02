import {ActionIcon, useMantineColorScheme} from '@mantine/core';
import {MoonIcon, SunIcon} from '@radix-ui/react-icons';

export function ToggleTheme() {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return <ActionIcon
        variant="outline"
        color={dark ? 'light' : 'dark'}
        onClick={toggleColorScheme}
        title="Toggle color scheme">
        {
            dark ?
                <SunIcon fontSize={18}/> :
                <MoonIcon fontSize={18}/>
        }
    </ActionIcon>;
}
