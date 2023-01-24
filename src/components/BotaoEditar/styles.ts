import styled from 'styled-components';

import { Update } from '@styled-icons/material/Update';
import { Link } from 'react-router-dom';

export const LinkInfo = styled(Link) `
    cursor: pointer;

    text-decoration: none;
    color: #fff;

    font-size: 12px;

`;

export const InfoIcon =  styled(Update)`

    color: green;
    width: 16px;
    height: 16px;

`;