import React, { Component } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga4';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            showForm: false,
            sending: false,
            formData: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            }
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const { name, email, phone, message } = this.state.formData;
        
        // Basic validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Please fill in all required fields (Name, Email, and Message)');
            return;
        }

        this.setState({ sending: true });

        try {
            const response = await fetch('https://formbold.com/s/6lplK', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                })
            });

            if (response.ok) {
                alert('Message sent successfully!');
                this.setState({
                    formData: {
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    },
                    showForm: false
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            this.setState({ sending: false });
        }

        ReactGA.event({
            category: "Contact Form",
            action: "Form Submitted"
        });
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm });
    }

    render() {
        const { showForm, sending, formData } = this.state;

        return (
            <div className="w-full h-full relative flex flex-col bg-[#282c34] text-white select-none">
                {!showForm ? (
                    // Contact Icons View
                    <div className="flex gap-5 p-5">
                        <div 
                            onClick={this.toggleForm}
                            className="flex flex-col h-max justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-200"
                        >
                            <div className="relative">
                                <img src="/images/logos/email.png" className="h-16 w-16" alt="Contact Form"/>
                                <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    📝
                                </div>
                            </div>
                            <span className="mt-2 font-medium">Contact Form</span>
                        </div>
                        
                        <a href="https://www.linkedin.com/in/aslamx3r/" className="flex flex-col h-max justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-200" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logos/linkedin.png" className="h-16 w-16" alt="LinkedIn"/>
                            <span className="mt-2">LinkedIn</span>
                        </a>
                        
                        <a href="mailto:x3rcyb@gmail.com" className="flex flex-col h-max justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-200" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logos/email.png" className="h-16 w-16" alt="Email"/>
                            <span className="mt-2">Email</span>
                        </a>
                        
                        <a href="https://medium.com/@x3r" className="flex flex-col h-max justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-200" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logos/medium.png" className="h-16 w-16" alt="Medium"/>
                            <span className="mt-2">Medium</span>
                        </a>
                        
                        <a href="https://discord.gg/96fThXW3" className="flex flex-col h-max justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-200" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logos/discord.png" className="h-16 w-16" alt="Discord"/>
                            <span className="mt-2">Discord</span>
                        </a>
                    </div>
                ) : (
                    // Contact Form View
                    <div className="flex-1 p-6">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center mb-6">
                                <button 
                                    onClick={this.toggleForm}
                                    className="mr-4 p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-all duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <h2 className="text-2xl font-bold">Contact Me</h2>
                            </div>
                            
                            <form onSubmit={this.handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={this.handleInputChange}
                                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={this.handleInputChange}
                                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={this.handleInputChange}
                                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={this.handleInputChange}
                                        rows={5}
                                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                                        placeholder="Your message here..."
                                        required
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                                        sending 
                                            ? 'bg-gray-600 cursor-not-allowed' 
                                            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800'
                                    }`}
                                >
                                    {sending ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                            
                            <div className="mt-6 text-center text-sm text-gray-400">
                                <p>Or reach out directly:</p>
                                <a href="mailto:x3rcyb@gmail.com" className="text-blue-400 hover:text-blue-300">
                                    x3rcyb@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit> </Gedit>;
}