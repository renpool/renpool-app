/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/svelte';
import Warn from './Warn.svelte';

describe('Warn', () => {

    it('changes count when button is clicked', async () => {
        const { getByText } = render(Warn, {
            props: {
                title: 'This is a Warning!'
            }
        });
        expect(getByText('This is a Warning!')).toBeInTheDocument();
    });

    it('ichanges count when button is clicked', async () => {
        const { getByText, getByRole, queryByText } = render(Warn, {
            props: {
                title: 'This is a Warning!'
            }
        });
        expect(getByText('This is a Warning!')).toBeInTheDocument();

        await fireEvent.click(getByRole('button'))
        expect(queryByText('This is a Warning!')).not.toBeInTheDocument();
    });

});
