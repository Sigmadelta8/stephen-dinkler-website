import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Contact() {
  const formRef = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Remember if the user has submitted the form
  useEffect(() => {
    const cachedSuccessMessage = localStorage.getItem('successMessage');
    if (cachedSuccessMessage) {
      setSuccessMessage(cachedSuccessMessage);
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check spam prevention field
    const spamField = formRef.current['spam'].value;
    if (spamField) {
      alert('Spam detected. Submission blocked.');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_78lc1ju',
        'template_0ttfp4l',
        formRef.current,
        'fURo6kNvaVvvzR0xU'
      )
      .then(
        (result) => {
          // Clear the form
          formRef.current.reset();
          const message = 'Message sent successfully!';
          setSuccessMessage('Message sent successfully!');
          localStorage.setItem('successMessage', message);
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
        }
      )
      .finally(() => {
        // Set loading state to false
        setLoading(false);
      });
  };

  return (
    <div className="p-10 mt-8 grid place-items-center gap-8">
    <div className="bg-white transition-colors duration-300 dark:bg-gray-900 rounded-2xl max-w-screen-2xl w-full">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance pt-5 text-4xl font-semibold tracking-tight transition-colors duration-300 text-orange-400 dark:text-lime-700 sm:text-5xl">{successMessage ? 'Thanks for you interest!' : "Let's get in touch!"}</h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400 transition-colors duration-300">
        {successMessage ? "I'll get back to you as soon as I can." : "I would normally just put my phone number and email, but you never know with the internet these days..."}
        </p>
      </div>

      {successMessage && (
          <div className="mt-4 mb-4 text-center text-green-600 font-semibold">
            {successMessage}
          </div>
        )}

      <form ref={formRef} onSubmit={handleSubmit} className={`mx-auto mt-8 max-w-xl sm:mt-8 ${successMessage ? 'hidden' : ''}`}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 px-5">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-800 transition-colors duration-300 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-800 transition-colors duration-300 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-800 transition-colors duration-300 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-400 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-800 transition-colors duration-300 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-800 transition-colors duration-300 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <label htmlFor="spam" className="hidden text-sm/6 font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              For spam prevention.
            </label>
            <div className="mt-2.5">
              <input
                id="spam"
                name="spam"
                type="spam"
                autoComplete="email"
                className="w-full hidden rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2"
              />
            </div>
        <div className="mt-10 mb-10 px-5">
        <button
              type="submit"
              className="flex items-center justify-center w-full rounded-md transition-colors duration-300 bg-orange-400 dark:bg-lime-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Let's talk"
              )}
            </button>
        </div>
      </form>
    </div>
    </div>
  )
}
