import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const Input = props =>(
  <input {...props} className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum"/>
);

const validationSchema = yup.object({
  email: yup.string().required('Digite seu E-mail').email('E-mail Inválido'),
  password: yup.string().required('Digite sua senha!')
});

export function Login({ signInUser }){
  const formik = useFormik({
    onSubmit: async values => {
      const res = await axios.get('http://localhost:9901/login',{
        auth: {
          username: values.email,
          password: values.password
        }
      })

      signInUser(res.data)
    },
      initialValues:{
        email: '',
        password:'',
      },
      validateOnMount: true,
      validationSchema,
  });

  return(
    <div className="h-full flex justify-center ">
      <div className = "md:bg-birdBlue lg:flex-1"></div>
      <div className="flex-1 flex justify-center items-center p-12">
        <div className="max-w-md flex-1 space-y-6">
          <h1 className="text-3xl">Fazer login</h1>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>

            <div className='space-y-2'>
            <Input
              type = "text"
              name="email"
              placeholder="Digite E-mail"
              value = {formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disable={formik.isSubmitting}
              />
            {(formik.touched.email && formik.errors.email) && (
              <div className="text-red-500 text-sm mt-3">{formik.errors.email}</div> 
              )}
              </div>
            
              <div className='space-y-2'>
                <Input
                  type = "password"
                  name="password"
                  placeholder="Digite Senha"
                  value = {formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disable={formik.isSubmitting}
                  />
                {(formik.touched.password && formik.errors.password) && (
                  <div className="text-red-500 text-sm mt-3">{formik.errors.password}</div> 
                  )}
              </div>

            <button 
              type = 'submit'
              className="w-full bg-birdBlue py-4 rounded-full disabled:opacity-50 text-lg"
              disabled={!formik.isValid || formik.isSubmitting}
              >
              {formik.isSubmitting ? 'Enviando...' : 'Entrar'}
            </button>
          </form>
          <span className="text-sm text-silver">
          Não tem uma conta? <a className="text-birdBlue"href="/signup">Inscreva-se</a>
          </span>
        </div>
      </div>
  </div>
  )
}