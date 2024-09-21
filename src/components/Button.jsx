import PropTypes from 'prop-types';

export default function Button({ children }) {
    return (
        <button className="bg-primary text-white font-poppins py-2 px-4 rounded hover:bg-secondary">
            {children}
        </button>
    );
}


// Define prop types for the Button component
Button.propTypes = {
    children: PropTypes.node.isRequired,
};
