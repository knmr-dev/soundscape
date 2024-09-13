import { useEffect, useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import soundscape from '../assets/soundscape.png';

const { Header } = Layout;

const menuItems = [
    { key: '1', path: '/', label: 'HOME' },
    { key: '2', path: '/services', label: 'SERVICES' },
    { key: '3', path: '/media', label: 'MEDIA' },
    { key: '4', path: '/reviews', label: 'REVIEWS' },
    { key: '5', path: '/contact', label: 'CONTACT' },
];

export default function CustomHeader() {
    const location = useLocation();
    const [current, setCurrent] = useState('1');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const activeKey = menuItems.find(item => item.path === location.pathname)?.key || '1';
        setCurrent(activeKey);
    }, [location.pathname]);

    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);

    return (
        <Layout>
            <Header className="bg-primary shadow h-auto">
                <div className="container mx-auto flex items-center justify-between h-full py-2">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={soundscape} alt="Logo" className="py-2 h-16 w-auto" />
                        </Link>
                    </div>

                    <Menu
                        theme="light"
                        mode="horizontal"
                        selectedKeys={[current]}
                        className="bg-primary hidden md:flex flex-grow justify-end font-bold custom-menu"
                    >
                        {menuItems.map(({ key, path, label }) => (
                            <Menu.Item key={key}>
                                <Link to={path}>{label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>

                    <Button
                        className="block md:hidden"
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={showDrawer}
                    />

                    <Drawer
                        title="Menu"
                        placement="right"
                        closable
                        onClose={onClose}
                        visible={visible}
                        width={250}
                    >
                        <Menu
                            mode="inline"
                            selectedKeys={[current]}
                            onClick={(e) => {
                                setCurrent(e.key);
                                onClose();
                            }}
                            className="custom-menu" 
                        >
                            {menuItems.map(({ key, path, label }) => (
                                <Menu.Item key={key}>
                                    <Link to={path}>{label}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Drawer>
                </div>
            </Header>
        </Layout>
    );
}