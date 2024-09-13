import { Layout, Typography, Space } from 'antd';
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined, GithubOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, GlobalOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import 'tailwindcss/tailwind.css';
import soundscape from '../assets/soundscape.png';

const { Footer } = Layout;
const { Text } = Typography;

const socialLinks = [
    { href: 'https://www.facebook.com/knmrdev/', icon: <FacebookOutlined />, label: 'Facebook' },
    { href: 'https://www.linkedin.com/in/knmr-dev/', icon: <LinkedinOutlined />, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/knmr.lsndr/', icon: <InstagramOutlined />, label: 'Instagram' },
    { href: 'https://github.com/knmr-dev', icon: <GithubOutlined />, label: 'GitHub' },
];

const quickLinks = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/media', label: 'MEDIA' },
    { href: '/reviews', label: 'REVIEWS' },
    { href: '/contact', label: 'CONTACT' },
];

export default function AppFooter() {
    return (
        <>
            <div className="h-[45vh] grid grid-cols-3 gap-16 p-4 bg-primary px-48 py-16">
                <div className="flex flex-col items-center">
                    <div>
                        <img src={soundscape} alt="Logo" className="w-92 h-auto"/>
                    </div>
                    <p className="text-sm text-justify text-white">
                        SoundScape delivers an immersive musical experience with unique rhythms
                        and melodies that resonate deeply. Discover the beat that moves you and
                        join us on a journey through unforgettable sound.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div>
                        <h2 className='font-bold text-xl text-white'>QUICK LINKS</h2>
                        <div className="border-b-2 border-secondary w-32 my-4"></div>
                        <ul className="space-y-2 font-light ">
                            {quickLinks.map(({ href, label }) => (
                                <li key={label}>
                                    <a href={href} className="text-white hover:text-secondary">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div>
                        <h2 className='font-bold text-xl text-white'>CONTACT INFO</h2>
                        <div className="border-b-2 border-secondary w-32 my-4"></div>
                        <div className="flex items-center space-x-2 my-2">
                            <EnvironmentOutlined className='text-white' />
                            <Text className='contact-info'>Davao, Philippines</Text>
                        </div>
                        <div className="flex items-center space-x-2 my-2">
                            <PhoneOutlined className='text-white'/>
                            <Text className='contact-info'>09077822601</Text>
                        </div>
                        <div className="flex items-center space-x-2 my-2">
                            <MailOutlined className='text-white'/>
                            <Text className='contact-info'>knmrdev2002@gmail.com</Text>
                        </div>
                        <div className="flex items-center space-x-2 my-2">
                            <GlobalOutlined className='text-white'/>
                            <Text className='contact-info'>knmr-dev.com</Text>
                        </div>
                    </div>
                </div>
            </div>

            <Footer className="footer bg-gray-800">
                <div className="container mx-auto py-2 px-6 flex justify-between items-center text-white">
                    <Text className="footer-text text-sm">
                        &copy; 2024 De Musika. Developed by KenDevs
                    </Text>
                    <Space size="large">
                        {socialLinks.map(({ href, icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-400"
                            >
                                {icon}
                            </a>
                        ))}
                    </Space>
                </div>
            </Footer>
        </>
    );
}
