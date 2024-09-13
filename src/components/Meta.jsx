import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export default function Meta({ title }) {
    return (
        <Helmet>
            <title>{title ? `${title} - SoundScape` : 'SoundScape'}</title>
        </Helmet>
    );
}

Meta.propTypes = {
    title: PropTypes.string.isRequired,
};