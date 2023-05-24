import { Field, Formik , Form as FormikForm } from "formik"
import { Label, TextArea , Form, Button } from "semantic-ui-react";
import * as Yup from "yup";
import {useContactContext} from "../Context/ContactContext"

const ContactSchema = Yup.object().shape({
    name : Yup.string().required("Name is Required!"),
    email : Yup.string().required("Email is Required!"),
    message : Yup.string().required("Message is Required!")
})



const ContactFormik = () =>{
    const {laodContactData} = useContactContext();

    const model = {
        name : "",
        email : "",
        message : ""
    };
    const handelSave = (e,data,resetForm) =>{
        e.preventDefault()
        // setTimeout(() => {
            console.log("Submit Data : "+JSON.stringify(data))
            laodContactData(data)
            resetForm();
        // }, 3000); // 3000 milliseconds = 3 seconds
    }

    return (
        <>
        <h3>Contact Formik</h3>
        <Formik
            initialValues={model}
            validationSchema={ContactSchema}
            validateOnChange={true}
        >
            {({errors , touched , handleSubmit , values , resetForm , isSubmitting}) => (
                <Form as={FormikForm} onSubmit={handleSubmit}>
                    <Form.Group>
                    <Label basic style={{border:"none"}}>Name</Label>
                    <Field name="name" component="input" />
                    {errors.name && touched.name ? (
                        <div style={{color:"red"}}>{errors.name}</div>
                    ) : null}
                    <Label basic style={{border:"none"}}>Email</Label>
                    <Field name="email" />
                    {errors.email && touched.email ? (
                        <div style={{color:"red"}}>{errors.email}</div>
                    ) : null}
                    </Form.Group>
                    <Form.Group>
                    <Label basic style={{border:"none"}}>Message</Label>
                    <Field name="message" component="textarea" />
                    {errors.message && touched.message ? (
                        <div style={{color:"red"}}>{errors.message}</div>
                    ) : null}
                    </Form.Group>
                    <div>
                        <Button type="submit" floated="right" onClick={(e) =>handelSave(e,values,resetForm)} disabled={isSubmitting}>Submit</Button>
                    </div>
                </Form>
            )}
        </Formik>
        </>
    )
}
export default ContactFormik