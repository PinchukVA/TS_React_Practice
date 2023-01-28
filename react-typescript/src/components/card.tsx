import React, {FC,PropsWithChildren} from 'react';

export enum CardVariant {
    outlined='outlined',
    primary='primary'
}

interface ICardProps extends PropsWithChildren {
    width?: string,
    height?: string,
    variant:CardVariant,
    clickHandler?: () => void
}
const Card:FC<ICardProps> = ({
    width,
    height,
    children,
    variant,
    clickHandler
    }) => {

    return (
        <div 
            style={{
                width,
                height,
                margin: '10px',
                background: variant === CardVariant.primary ? '#ccc6' : '',
                borderRadius:'10px',
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none'
            }}
            onClick={clickHandler}
        >
            {children}
        </div>
    );
};

export default Card