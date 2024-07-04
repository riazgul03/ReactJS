import * as Yup from 'yup';

export const formSchema = Yup.object({
    name: Yup.string().min(3,('Too Short')).max(20,('Too Long')).required('Name Is Must'),
    email:Yup.string().email('Invalid Email').required('Email Is Must')
});