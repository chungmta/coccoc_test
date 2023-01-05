import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import IconEye from '../components/Icons/IconEye';
import IconCautionCircle from '../components/Icons/IconCautionCircle';
import classNames from 'classnames';

const FormName = {
  name: 'name',
  password: 'password',
  remember: 'remember',
};
const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || '/';
  const [form] = Form.useForm();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isProcess] = useState(false);
  const [error, setError] = useState(false);
  const isFormReady = formData.email !== '' && formData.password !== '';

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData((formData) => ({
      ...formData,
      email: value,
    }));
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData((formData) => ({
      ...formData,
      password: value,
    }));
  };

  const onFinish = async (values: any) => {
    const username = values[FormName.name];
    const password = values[FormName.password];

    const error = await auth.signin(username, password, () => {
      navigate(from, { replace: true });
    });

    if (error) setError(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div
        className="pt-6 pb-1 px-7 rounded-md w-[400px] text-xs"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 18px' }}
      >
        <Typography className="font-bold text-[24px]">Login</Typography>

        <div className="mt-2 text-[13px]">
          Do not have an account?
          <span className="ml-2 cursor-pointer underline text-primary">
            Sign up here
          </span>
        </div>

        <Form
          form={form}
          name="login"
          labelCol={{ span: 24, style: { paddingBottom: 0 } }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={<span className="font-bold">Email</span>}
            name={FormName.name}
            className="mb-0"
            rules={[
              {
                required: true,
                message: (
                  <div className="flex items-center">
                    <IconCautionCircle className="w-[13px] h-[13px] mr-1" />
                    Required
                  </div>
                ),
              },
            ]}
          >
            <Input placeholder="email@example.com" onChange={onEmailChange} />
          </Form.Item>

          <Form.Item
            label={<span className="font-bold">Password</span>}
            name={FormName.password}
            className="mb-0 mt-2"
            rules={[
              {
                required: true,
                message: (
                  <div className="flex items-center">
                    <IconCautionCircle className="w-[13px] h-[13px] mr-1" />
                    Required
                  </div>
                ),
              },
            ]}
          >
            <Input.Password
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
              iconRender={(visible) => (
                <div className="w-full h-full">
                  <IconEye
                    fill={visible ? '#4fba69' : ''}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
              )}
              onChange={onPasswordChange}
              placeholder="Enter your password"
            />
          </Form.Item>

          <div className="flex justify-between items-center">
            <Form.Item
              name={FormName.remember}
              valuePropName="checked"
              wrapperCol={{
                className: 'flex-grow',
              }}
              className="flex-grow mb-0 mt-2"
            >
              <Checkbox>Remember account</Checkbox>
            </Form.Item>

            <div className="text-primary cursor-pointer underline ">
              Forgot password?
            </div>
          </div>

          {error && (
            <div className="flex items-center mt-1" style={{ color: 'red' }}>
              <IconCautionCircle className="w-[13px] h-[13px] mr-2" />
              Account information incorrect
            </div>
          )}

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            {!isProcess ? (
              <Button
                className={classNames('mt-3 rounded-sm font-bold', {
                  'bg-primary': isFormReady,
                })}
                disabled={!isFormReady}
                type="primary"
                htmlType="submit"
              >
                LOGIN
              </Button>
            ) : (
              <div className=' font-bold'>PROCESSING...</div>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
