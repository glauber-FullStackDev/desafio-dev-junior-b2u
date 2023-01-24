import { Eye } from '@styled-icons/entypo/Eye';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkInfo = styled(Link) `
    cursor: pointer;

    text-decoration: none;
    color: #fff;

    font-size: 12px;

`;

export const InfoIcon =  styled(Eye)`

    color: blue;
    width: 16px;
    height: 16px;

`;