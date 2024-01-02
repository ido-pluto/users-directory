import {MantineProvider} from '@mantine/core';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Users} from './pages/Users/Users.tsx';

const queryClient = new QueryClient();

export default function App() {

    return <QueryClientProvider client={queryClient}>
        <MantineProvider>
            <Users/>
        </MantineProvider>
    </QueryClientProvider>;
}
