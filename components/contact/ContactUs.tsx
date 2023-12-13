"use client";
import React, { useEffect, useState } from 'react'
import { CustomButton } from '..'
import * as Yup from  'yup'
import { Field, Form, Formik } from 'formik'
import { FormSchemaProps } from '@/types';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';


const FormSchema: Yup.Schema<FormSchemaProps> = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().min(20, "Message Too Small").max(2000, "Max Characters Exceeded").required(),
})

const ContactUs = () => {
    const router = useRouter()
    const [load, setLoad] = useState(false)

    function changePage(link:string){
        router.replace(link)
    }

    async function handleSubmit(name:string, email:string, message:string) {
        setLoad(!load)
        try {
            const res = await fetch(`/api/email/`, {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    message: message,
                    email: email
                })
            }) 
            if (!res.ok) {
                // Handle the case where the request was not successful (status code outside of 200-299)
                throw new Error(`Failed to send message. Status: ${res.status}`);
              }

            const result = await res.json()

            if(result.success){
                swal({
                    buttons: {
                        confirm: true,
                    },
                    icon: 'success',
                    title: 'Feedback Sent',
                    closeOnClickOutside: false,
                    closeOnEsc: false,  
                    }).then(() => changePage("/")).finally(() => setLoad(!load))
            } else {
                swal({
                    icon: 'danger',
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    title: 'Message not sent',
                    buttons: {
                        cancel: true,
                    },
                    }).then(() => 
                    changePage("/contact")
                ).finally(() => setLoad(!load))
            }
        } catch (error) {
            swal({
                icon: 'danger',
                closeOnClickOutside: false,
                closeOnEsc: false,
                title: `${error}`,
                buttons: {
                    cancel: true,
                },
                }).then(() => 
                changePage("/contact")
            ).finally(() => setLoad(!load))
        }
    }

  return (
    <div className="grid grid-flow-col bg-bg-wrapper-100 max-[768px]:grid-flow-row max-sm:grid-flow-row">
        <Formik 
            initialValues={{
                name: "",
                email: "",
                message: ""
            }}
            validationSchema={FormSchema}
            validateOnChange
            onSubmit={(values) => {
                handleSubmit(
                values.name, 
                values.email, 
                values.message
                )
            }
        }
        
        >
            {({errors, values}) => (
                <Form method='POST'  className='w-[50vw] mt-28 px-20 md:pb-10 max-[768px]:w-full max-sm:w-full max-sm:px-4 max-sm:pb-10'>
                    <label htmlFor="name" className="form-control mb-10">
                        <div className="label">
                            <span className="label-text text-3xl text-white font-semibold">Name <em className='text-red-900'>*</em><em className='text-red-900 text-lg'>{errors.name}</em></span>
                        </div>
                        <Field id='name' name="name" value={values.name} type="text" className="input input-ghost focus:bg-transparent" />
                    </label>
                    <label htmlFor="email" className="form-control mb-10">
                        <div className="label">
                            <span className="label-text text-3xl text-white font-semibold">Email <em className='text-red-900'>*</em><em className='text-red-900 text-lg'>{errors.email}</em></span>
                        </div>
                        <Field id='email' name='email' value={values.email}  type="email" className="input input-ghost focus:bg-transparent" />
                    </label>
                    <label htmlFor="message" className="form-control mb-10">
                        <div className="label">
                            <span className="label-text text-3xl text-white font-semibold">Message <em className='text-red-900'>*</em><em className='text-red-900 text-lg'>{errors.message}</em></span>
                        </div>
                        <Field as="textarea" id='message' value={values.message} name='message'  className="textarea textarea-ghost h-[200px] focus:bg-transparent" ></Field>
                    </label>
                    {
                        (
                            values.email === "" || values.name ===  "" || values.message === ""
                        ) 
                        ?
                        (
                        <CustomButton 
                            title='Submit' 
                            isDisabled={true} 
                            btnType='submit' 
                            linkURL="" 
                            customButtonStyles='rounded-full w-full text-2xl text-white btn-ghost glass'
                            />
                        )
                        :
                        (
                            load 
                        ?
                            (
                            <CustomButton 
                                title='Loading...' 
                                linkURL="" 
                                isDisabled={true} 
                                customButtonStyles='rounded-full w-full text-2xl text-white btn-ghost glass'
                                />
                            )
                        :
                            (
                            <CustomButton 
                                title='Submit' 
                                btnType='submit' 
                                linkURL="" 
                                customButtonStyles='rounded-full w-full text-2xl text-white btn-ghost glass'/>
                            )
                        )
                    }
                </Form>
            )}
        </Formik>
        <div className="w-[50vw] h-[105vh] overflow-hidden relative max-[768px]:hidden max-sm:pt-10" style={{ backgroundImage: "url('/Hero.jpg')", backgroundRepeat: "no-repeat"}}>
            <div className="absolute inset-0 bg-bg-wrapper-100 bg-opacity-70"></div>
        </div>
    </div>
  )
}

export default ContactUs