import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from'@material-ui/core/Tooltip';

import { ThemeContext } from './Theme'

const ThemeToggle = () => {
    <ThemeContext>
        {({ type, changeTheme }) => {
            const onToggle = (e) =>{
                const value = type === 'dark' ? 'light' : 'dark';
                changeTheme(value);
            }
            return (
                <Tooltip title="Toggle dark/light theme">
                    <Checkbox
                    color="default"
                    checked={type === 'dark'}
                    onChange={onToggle}
                    />
                </Tooltip>
            )
        }
        }

    </ThemeContext>
}
export default ThemeToggle;