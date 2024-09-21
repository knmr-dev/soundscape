import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';

export default function BreadCrumb({ active }) {
    return (

        <div className="h-[5vh] bg-third text-white flex flex-col py-2 px-32">
            <Breadcrumb className="custom-breadcrumb">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-red">{active}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

BreadCrumb.propTypes = {
    active: PropTypes.string.isRequired,
};
