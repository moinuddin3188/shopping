import React from 'react';
import ContentLoader from 'react-content-loader';

const Preloader = () => {
    const repeat = [1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <div className="row">
            {
                repeat.map(() =>
                    <div className="col-3 mb-4">
                        <ContentLoader
                            viewBox="0 0 235 300"
                            speed={2}
                        >
                            <rect x="0" y="0" rx="5" ry="5" width="100%" height="157" />
                            <rect x="0" y="164" rx="0" ry="0" width="50%" height="8" />
                            <rect x="0" y="185" rx="0" ry="0" width="100%" height="10" />
                            <rect x="0" y="200" rx="0" ry="0" width="80%" height="10" />

                        </ContentLoader>
                    </div>
                )
            }
        </div>
    );
};

export default Preloader;