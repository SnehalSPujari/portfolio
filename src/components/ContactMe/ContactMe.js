import React from 'react';

import React from 'react'

const ContactMe = () => {
    return (
        <div>
            <div className="bg-gray-900 text-white min-h-screen flex items-center">
                {/* container */}
                <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8">Contact Me</h1>
                    <p className='text-gray-400 text-lg text-centre mb-12'>Have a question or want to work together? 
                        Fill out the form below or connect with me on social media.
                    </p>

                    {/* form */}
                    <div className="flex flex-col justify-center"> 
                        <form className='bg-gray-800 p-10 rounded-lg shadow-lg space-y-6'
                         action="onSubmit">   //formspree or backend endpoint   
                         </form>
                    </div>

                </div>
            </div>
            )
}

            export default ContactMe
