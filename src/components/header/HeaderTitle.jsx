import PropTypes from 'prop-types';

export default function HeaderTitle({ title, description }) {
    return (
        <div className="h-[40vh] bg-third text-white flex flex-col justify-center py-8 px-32">
            <h1 className="text-6xl font-black mb-4">{title}</h1>
            <div className="border-b-2 border-white w-48 mb-4"></div>
            <p className="text-lg max-w-4xl text-justify py-4">
                {description}
            </p>
        </div>
    );
}

HeaderTitle.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
