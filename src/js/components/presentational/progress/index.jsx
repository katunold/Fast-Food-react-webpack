import React from 'react';
import PropTypes from 'prop-types';
import { PacmanLoader } from 'react-spinners';

const CircularProgressLoader = ({ loading }) => {
    /** function component to render a circular spinner */
    const override = '    display: \'block\',\n'
        + '    margin: \'0 auto\',\n'
        + '    \'border-color\': \'red\',';

    return (
        !loading
            ? null
            : (
                <div id="loader-body" className="loader-body">
                    <div className="sweet-loading" />
                    <div align="center" className="lds-ripple">
                        <PacmanLoader
                            css={override}
                            sizeUnit="px"
                            size={25}
                            color="#fafafa"
                            loading={loading}
                        />
                    </div>
                </div>
            )
    );
};

CircularProgressLoader.propTypes = {
    loading: PropTypes.bool.isRequired,
};


export default CircularProgressLoader;
