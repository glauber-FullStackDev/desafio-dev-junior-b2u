import styled from "styled-components";

import { Calendar2Date } from '@styled-icons/bootstrap/Calendar2Date';
import { VehicleCarProfileLtr } from '@styled-icons/fluentui-system-regular/VehicleCarProfileLtr'
import { Note } from '@styled-icons/boxicons-solid/Note';
import { Car } from "@styled-icons/boxicons-regular/Car"

export const Cartao = styled.div`
    padding: 16px;

    border-radius: 16px;
    margin-bottom: 12px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    height: 180px;
    width: 270px;

    background-color: #414141;
    opacity: .8;

    &:hover {
        transition: .5s;
        opacity: .5;

    }

`;

export const Caixa = styled.div`

    display: flex;

    margin-top: 8px;

    >p {
        font-size: 12px;
        color: #fff;
        margin-left: 8px;
    }
`;

export const CarIcon = styled(Car)`
    color: #fff;
    width: 16px;
    height: 16px;
`;

export const AnoIcon = styled(Calendar2Date)`
    color: #fff;
    width: 16px;
    height: 16px;
`;

export const NotaIcon = styled(Note)`
    color: #fff;
    width: 16px;
    height: 16px;
`;

export const MarcaIcon = styled(VehicleCarProfileLtr)`
    color: #fff;
    width: 16px;
    height: 16px;
`;

