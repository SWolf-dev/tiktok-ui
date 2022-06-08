import { forwardRef, useState } from 'react';

import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) {
    const [fallBack, setFallBack] = useState();

    const handleErrorSrc = () => {
        setFallBack(customFallBack);
    };

    return (
        <>
            <img
                className={classNames(styles.wrapper, className)}
                src={fallBack ? fallBack : src}
                alt={alt}
                ref={ref}
                {...props}
                onError={handleErrorSrc}
            />
        </>
    );
}

export default forwardRef(Image);
