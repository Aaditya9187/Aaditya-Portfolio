import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import { Mail } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

const Contact = () => {
  const { windows } = useWindowStore()
  const { isMaximized } = windows.contact || {}

  const email = 'aaditya.chhatraliya@gmail.com'

  const [showModal, setShowModal] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [result, setResult] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // React Hook Form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // Web3Forms Access Key (ONLY ONE)
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_1 || 'web3form access key';

  // Submit Form (Single Endpoint)
  const submitForm = async (formData) => {
    setSubmitting(true)
    setResult('Sending message...')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: 'macOS Portfolio – Contact',
          subject: 'New Contact Message from macOS Portfolio',
          ...formData
        })
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setResult('Message sent successfully!')
        reset()
      } else {
        setIsSuccess(false)
        setResult(data.message || 'Failed to send message.')
      }
    } catch (err) {
      setIsSuccess(false)
      setResult('Network error. Please try again later.')
    }

    setSubmitting(false)
  }

  // Auto close modal on success
  useEffect(() => {
    if (isSuccess && showModal) {
      const t = setTimeout(() => setShowModal(false), 1800)
      return () => clearTimeout(t)
    }
  }, [isSuccess, showModal])

  return (
    <>
      {/* Header */}
      <div
        id="window-header"
        className="flex items-center justify-between window-drag-handle"
      >
        <WindowControls target="contact" />

        <h2 className="flex-1 text-center">Contact Me</h2>

        <a
          href={`mailto:${email}`}
          title={`Email: ${email}`}
          className="p-2 hover:bg-gray-200 rounded-md transition-colors"
        >
          <Mail size={17} />
        </a>
      </div>

      {/* Body */}
      <div className="p-5 space-y-5">
        <img
          src="/images/Aaditya.png"
          alt="Swastik"
          loading="lazy"
          className={clsx(
            'object-cover object-top rounded-xl',
            isMaximized ? 'w-60 h-40' : 'w-30 h-30'
          )}
        />

        <h3>Let's Connect</h3>

        <p>
          Open for work and collaboration. Write me if you need something built.
        </p>

        <p>{email}</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img
                  src={icon}
                  alt={text}
                  loading="lazy"
                  className="size-5"
                />
                <p>{text}</p>
              </a>
            </li>
          ))}

          {/* Contact Form Button */}
          <li key="contact-form" style={{ backgroundColor: '#000000' }}>
            <a
              href="#contact-form"
              title="Contact Form"
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault()
                setIsSuccess(false)
                setResult('')
                setShowModal(true)
              }}
            >
              <Mail className="size-5 text-white" />
              <p className="text-white">Contact Form</p>
            </a>
          </li>
        </ul>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={() => setShowModal(false)}
          />

          <div className="relative z-10 w-[min(92vw,520px)] rounded-xl border border-gray-200 bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b px-5 py-3">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <h3 className="text-base font-semibold">
                  Send me a message
                </h3>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form
              className="p-5 space-y-4"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Name</label>

                  <input
                    type="text"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    placeholder="Your name"
                    {...register('name', {
                      required: 'Name is required'
                    })}
                  />

                  {errors.name && (
                    <p className="text-xs text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Email</label>

                  <input
                    type="email"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    placeholder="you@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                        message: 'Enter valid email'
                      }
                    })}
                  />

                  {errors.email && (
                    <p className="text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-sm text-gray-700">Message</label>

                <textarea
                  rows={5}
                  className="w-full rounded-md border px-3 py-2 text-sm"
                  placeholder="What's on your mind?"
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Minimum 10 characters'
                    }
                  })}
                />

                {errors.message && (
                  <p className="text-xs text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Honeypot */}
              <input
                type="text"
                className="hidden"
                {...register('botcheck')}
              />

              {/* Result */}
              {result && (
                <div
                  className={`rounded-md border px-3 py-2 text-sm ${
                    isSuccess
                      ? 'border-green-300 bg-green-50 text-green-700'
                      : 'border-red-300 bg-red-50 text-red-700'
                  }`}
                >
                  {result}
                </div>
              )}

              {/* Buttons */}
              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="border px-4 py-2 rounded-md text-sm"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-black px-4 py-2 text-sm text-white rounded-md disabled:opacity-60"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow
