import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta'; // Ensure Meta is properly imported if you want to use it

export default function NotFound() {
    return (
        <>
            <Meta title="404 - Page Not Found" />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={
                        <Link to="/">
                            <Button type="primary">Back to Home</Button>
                        </Link>
                    }
                />
            </div>
        </>
    );
}
