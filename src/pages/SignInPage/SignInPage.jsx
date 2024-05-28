import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imageLogo from '../../assets/images/logo-login.png'
import { useLocation, useNavigate } from 'react-router-dom'
import * as UserService from '../../service/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import jwt_decode from "jwt-decode";
import Loading from '../../components/LoadingComponent/Loading'
import { useDispatch, useSelector } from 'react-redux'
// import { updateUser } from '../../redux/slides/userSlide'

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const location = useLocation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  const navigate = useNavigate()

  let mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )

  const { data, isLoading, isSuccess } = mutation

  useEffect(() => {
    if (isSuccess) {
      if (location?.state) {
        navigate(location?.state)
      } else {
        navigate('/')
        console.log("data: ", data)
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    }
  }, [isSuccess])

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storage)
    // const res = await UserService.getDetailsUser(id, token)
    // dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }))
  }

  let handleNavigateSignUp = () => {
    navigate('/sign-up')
  }

  let handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  let handleOnchangePassword = (value) => {
    setPassword(value)
  }

  let handleOnClickBtnLogin = () => {
    // console.log("email: ", email)
    // console.log("password: ", password)
    mutation.mutate({ email, password })
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ccc', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập</p>
          <InputForm placeholder='abc@gmail.com' value={email} onChange={handleOnchangeEmail} />
          <InputForm placeholder='password' value={password} style={{ marginTop: '10px' }} onChange={handleOnchangePassword} />

          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}

          <Loading isLoading={isLoading}>
            <ButtonComponent size={40}
              textButton={"Đăng nhập"}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 10px'
              }}
              styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
              onClick={handleOnClickBtnLogin}
              disabled={!email.length || !password.length}
            >
            </ButtonComponent>
          </Loading>

          <p>Quên mật khẩu</p>
          <p>Chưa có tài khoản?
            <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt='image-logo' height='230px' width='230px '></Image>
          <h4>Mua sắm tại Shop Ecommerce</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage

