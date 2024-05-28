import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image, message } from 'antd'
import imageLogo from '../../assets/images/logo-login.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMutationHooks } from '../../hooks/useMutationHook'
import * as UserService from '../../service/UserService'
import * as Message from '../../components/Message/Message'


const SignUpPage = () => {
    const navigate = useNavigate()

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const mutation = useMutationHooks(
        data => UserService.signUpUser(data)
    )

    const { data, isLoading, isSuccess, isError } = mutation

    const location = useLocation()

    useEffect(() => {
        if (isSuccess) {
            message.success(data.message)
            handleNavigateSignIn()
        } else if (isError) {
            message.error(mutation.error.response.data.message)
        }
    }, [isSuccess, isError])

    // console.log("mutation: ", mutation)

    let handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    let handleOnchangePassword = (value) => {
        setPassword(value)
    }

    let handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    let handleOnClickBtnSignUp = async () => {
        mutation.mutate({ email, password, confirmPassword })
    }

    const handleNavigateSignIn = () => {
        navigate('/sign-in')
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ccc', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Tạo tài khoản</p>

                    <InputForm placeholder='abc@gmail.com' value={email} onChange={handleOnchangeEmail} />
                    <InputForm placeholder='password' style={{ marginTop: '10px' }} value={password} onChange={handleOnchangePassword} />
                    <InputForm placeholder='confirm password' style={{ marginTop: '10px' }} value={confirmPassword} onChange={handleOnchangeConfirmPassword} />

                    {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data.message}</span>}

                    <ButtonComponent size={40}
                        textButton={"Đăng ký"}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '26px 0 10px'
                        }}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                        onClick={handleOnClickBtnSignUp}
                        disabled={!email.length || !password.length || !confirmPassword.length}
                    >
                    </ButtonComponent>
                    <p>Quên mật khẩu</p>
                    <p>Đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imageLogo} preview={false} alt='image-logo' height='230px' width='230px '></Image>
                    <h4>Mua sắm tại Shop Ecommerce</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}

export default SignUpPage





