import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '@styles/button.css'

const Form = () => {
    const [loading, setLoading] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [display, setDisplay] = useState(false)
    const [error, setError] = useState(false)
    const [contactDetails, setContactDetails] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const { name, email, phone, subject, message } = contactDetails
    const contactForm = useRef<any>();

    const r = {
        onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
            setContactDetails({
                ...contactDetails,
                [e.target.name]: e.target.value
            })
        },
        async sendMail(e: React.FormEvent<HTMLFormElement>){
            e.preventDefault()
            try {
            setLoading(true);
            const mail = await emailjs.sendForm(
                import.meta.env.PUBLIC_MAIL_SERVICE_ID as string,
                import.meta.env.PUBLIC_MAIL_TEMPLATE_ID as string,
                contactForm.current,
                import.meta.env.PUBLIC_MAIL_PUBLIC_KEY as string
            );
            if (mail) {
                setAlertMessage('Thank you for reaching out to us! Be rest assured we will revert soon');
                setDisplay(true)
                setTimeout(() => setDisplay(false), 5000)
                setError(false)
                contactForm.current.reset();
            } else {
                setAlertMessage('Something went wrong! Please try again')
                setDisplay(true)
                setTimeout(() => setDisplay(false), 5000)
                setError(true)
            }
            setLoading(false);
            } catch (error: any) {
                console.error(error.text);
            }
        }
    }
  return (
    <form ref={contactForm} onSubmit={(e) => r.sendMail(e)} className={`mt-3 px-1 md:px-7 py-2 md:py-2`}>
        {/** Alert */}
        {
            display && (
                <div className={`px-5 py-3 mb-3 ${error ? 'bg-[#fca5a5]' : 'bg-[#86efac]'} rounded-xl`}>
                    <p className='font-semibold text-white'>{alertMessage}</p>
                </div>
            )
        }
        {/** End of alert */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
                <label className="block text-sm font-medium leading-6 text-gray-900">Name <span className="text-red-500">*</span></label>
                <div className="mt-2">
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                        onChange={(e) => r.onChange(e)}
                        />
                </div>
            </div>
        </div> 

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mt-5">
            <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">Email <span className="text-red-500">*</span></label>
                <div className="mt-2">
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                    onChange={(e) => r.onChange(e)}
                    />
                </div>
            </div>
            <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">Phone <span className="text-red-500">*</span></label>
                <div className="mt-2">
                    <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    placeholder="Phone"
                    required
                    className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                    onChange={(e) => r.onChange(e)}
                    />
                </div>
            </div>
        </div>

        <div className="col-span-full mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-900">Subject <span className="text-red-500">*</span></label>
            <div className="mt-2">
                <input 
                type="text" 
                name="subject" 
                id="subject" 
                placeholder="Subject"
                required
                className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                onChange={(e) => r.onChange(e)}
                />
            </div>
        </div>

        <div className="col-span-full mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-900">Message <span className="text-red-500">*</span></label>
            <div className="mt-2">
                <textarea 
                id="message" 
                name="message" 
                rows={3} 
                placeholder="Message"
                required
                className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                onChange={(e) => r.onChange(e)}
                />
            </div>
        </div>
         <div className="col-span-full my-5">
            <button type="submit" className={`block w-[max-content] ${loading ? 'px-14 py-3 flex rounded-[10px] justify-center items-center' : `px-3 py-2 rounded-xl ${((!name || !email || !phone || !subject || !message) || loading) ? '_disabled' : 'hover:bg-darkBlue cursor-pointer'}`} text-base text-center text-white text-[14px] bg-[#F56B1E] baseline ${((!name || !email || !phone || !subject || !message) || loading) && '_disabled'}`} disabled={(!name || !email || !phone || !subject || !message) || loading ? true : false}>
                {
                    loading ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <>Send Message</>
                    )
                }
            </button>
         </div>
    </form>
  )
}

export default Form