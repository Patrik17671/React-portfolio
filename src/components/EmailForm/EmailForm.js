import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs  from 'emailjs-com';
import "./EmailForm.css";



const EmailForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    function sendEmail() {

        emailjs.sendForm(
            'service_ujanh05',
            'template_2b6cros',
            "#contact-form",
            "user_4pA30zmInAK7ra3DP5mwv"
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));

        document.getElementById("contact-form").reset();
    }

    return (
        <div>
            <form id="contact-form" onSubmit={handleSubmit(sendEmail)}>
                <label>Meno </label>
                <input type="text"  {...register("name", {required: true})} />
                <p className="errorMsg">{errors.name?.type === 'required' && "Zadaj meno"}</p>
                <label>Email</label>
                <input type="email" name="user_email"   {...register("user_email", {required: true ,  pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                <p className="errorMsg">{errors.user_email?.type === 'required' && "Zadaj Email"}</p>
                <label>Správa</label>
                <textarea name="message" {...register("message", {required: true, maxLength: 200})} />
                <p className="errorMsg">{errors.message?.type === 'required' && "Zabudol si na správu"}</p>

                <input type="submit" />
            </form>
        </div>
    )
    }
export default EmailForm;
