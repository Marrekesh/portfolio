

import c from './title.module.css'

const Title = ({children}: any) => {
    return (
        <div className={c.title}>
            {children}
        </div>
    );
};

export default Title;