'use client';

export default function About(){
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
                
                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                        <p className="text-gray-600">
                            Welcome to our company. We are dedicated to providing exceptional 
                            products and services to our valued customers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to deliver innovative solutions while maintaining 
                            the highest standards of quality and customer satisfaction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <div className="text-gray-600">
                            <p>Email: info@example.com</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Address: 123 Business Street, City, Country</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
