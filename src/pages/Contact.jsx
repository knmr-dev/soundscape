import Header from "../components/Header";
import Meta from "../components/Meta";
import HeaderTitle from "../components/header/HeaderTitle";
import Breadcrumbs from "../components/breadcrumb/BreadCrumb";
import Footer from "../components/Footer";
import { Form, Input, Button, DatePicker } from 'antd';
import 'antd/dist/reset.css'; 

export default function Contact() {
    return (
        <>
            <Header />
            <Meta title="Contact" />
            <HeaderTitle 
                title="CONTACT"
                description="Discover a range of entertainment options tailored to your
                event's needs and scale, from intimate acoustic performances to show-stopping
                acts and full bands. Our diverse setlist spans genres to engage all audiences,
                while our expertise ensures a seamless, memorable event."
            />
            <Breadcrumbs active="Contact"/>
            
            <div className="min-h-screen py-16 px-32 bg-white">
                <div className="flex flex-col items-center justify-center mb-8">
                    <h2 className="text-5xl font-semibold mb-6 text-fourth font-dela">MAKE AN ENQUIRY</h2>
                    <span className="text-secondary text-lg text-center mb-6">
                        Tell us about your event and what you need, and we will be able to customise a solution for you.
                    </span>
                </div>
                
                <div className="w-full max-w-6xl mx-auto bg-gray-400 p-8 rounded-lg shadow-lg">
                    <Form layout="vertical">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Form.Item label="NAME" name="name" className="col-span-2 font-bold">
                                <Input placeholder="Enter your name" className="h-12"/>
                            </Form.Item>

                            <Form.Item label="EVENT" name="event" className="col-span-2 font-bold">
                                <Input placeholder="Enter your event" className="h-12"/>
                            </Form.Item>

                            <Form.Item label="TYPE OF EVENT" name="eventType" className="font-bold">
                                <Input placeholder="Enter the type of event" className="h-12"/>
                            </Form.Item>

                            <Form.Item label="LOCATION" name="location" className="font-bold">
                                <Input placeholder="Enter the location" className="h-12"/>
                            </Form.Item>

                            <Form.Item label="DATE" name="date" className="font-bold">
                                <DatePicker className="w-full h-12" placeholder="Select event date" />
                            </Form.Item>

                            <Form.Item label="CONTACT" name="contact" className="font-bold">
                                <Input placeholder="Enter your contact details" className="h-12"    />
                            </Form.Item>
                        </div>

                        <Form.Item label="MESSAGE" name="message" className="font-bold">
                            <Input.TextArea rows={4} placeholder="Enter your message" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="font-bold bg-gradient-to-r from-primary to-secondary w-full h-10">
                                SUBMIT
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}