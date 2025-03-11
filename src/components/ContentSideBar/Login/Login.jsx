import InputCommon from '../../InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '../../Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { ToastContext } from '../../../contexts/ToastProvider';
import { SideBarContext } from '../../../contexts/SideBarProvider';
import { register, signIn } from '../../../apis/authService';
import Cookies from 'js-cookie';
import { StoreContext } from '../../../contexts/StoreProvider';

function Login() {
    const { container, title, boxRememberMe, boxBtn, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const { setIsOpen } = useContext(SideBarContext);
    const { setUserId } = useContext(StoreContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match'
            ),
        }),
        onSubmit: async (values) => {
            if (isLoading) return;

            const { email: username, password } = values;
            setIsLoading(true);

            if (isRegister) {
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }

            if (!isRegister) {
                await signIn({ username, password })
                    .then((res) => {
                        setIsLoading(false);
                        const { id, token, refreshToken } = res.data;
                        setUserId(id);

                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        Cookies.set('userId', id);
                        setIsOpen(false);
                        toast.success(res.data.message);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
        },
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    isRequired
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        label='Confirm password'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                )}

                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember Me</span>
                    </div>
                )}

                <div className={boxBtn}>
                    <Button
                        content={
                            isLoading
                                ? 'LOADING...'
                                : isRegister
                                ? 'REGISTER'
                                : 'LOGIN'
                        }
                        type='submit'
                        onClick={() => toast.success('Success')}
                    />
                </div>
            </form>
            <div className={boxBtn}>
                <Button
                    content={
                        isRegister
                            ? 'Already have an account'
                            : 'Don`t have an account?'
                    }
                    type='submit'
                    isPrimary={false}
                    style={{ marginTop: '10px', fontSize: '12px' }}
                    onClick={handleToggle}
                />
            </div>

            {!isRegister && <div className={lostPw}>Lost your password</div>}
        </div>
    );
}

export default Login;
