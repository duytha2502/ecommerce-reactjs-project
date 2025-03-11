import InputCommon from '../../InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '../../Button/Button';

function Login() {
    const { container, title, boxRememberMe, boxBtn, lostPw } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label='Email' type='text' isRequired />
            <InputCommon label='Password' type='password' isRequired />
            <div className={boxRememberMe}>
                <input type='checkbox' />
                <span>Remember Me</span>
            </div>
            <div className={boxBtn}>
                <Button content={'LOGIN'} />
            </div>
            <div className={lostPw}>Lost your password</div>
        </div>
    );
}

export default Login;
