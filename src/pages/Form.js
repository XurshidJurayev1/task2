import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, Select, Input as AntInput, InputNumber } from 'antd';
import { api } from '../redux/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Option } = Select;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  margin: 0;


  @media screen and (max-width: 778px) {
    padding: 10px 20px
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
  @media screen and (max-width: 778px) {
    padding: 5px 10px
  }
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0 10px 0;
  @media screen and (max-width: 778px) {
    font-size: 12px;
  }
`;

const StyledSelect = styled(Select)`
  width: 50%;
  height: 46px;
  font-size: 16px;

  & .ant-select-selector {
    display: flex;
    align-items: center;
    height: 46px !important;
  }

`;
const StyledOption = styled(Option);

const StyledInput = styled(AntInput)`
  width: 100%;
  height: 46px;
  font-size: 16px;

`;

const StyledTextarea = styled(AntInput.TextArea)`
  height: 80px !important;
`;

const StyledNumber = styled(InputNumber)`
  width: 200px;
  height: 46px;
  font-size: 16px;

`;


const BoxFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;


  @media screen and (max-width: 778px) {
    width: 100%;
    flex-direction: column;
    justify-content: left;
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0 25px 0;
  @media screen and (max-width: 778px) {
    font-size: 16px;
  }
`;


const FormComponent = () => {
  const [form] = Form.useForm();
  const [projectName, setProjectName] = useState('');

  const onSubmit = async () => {
    const values = await form.validateFields();


    let changedData = { ...values };


    delete changedData.offer1;
    delete changedData.offer2;
    delete changedData.offer3;
    delete changedData.offerSum1;
    delete changedData.offerSum2;
    delete changedData.offerSum3;


    console.log(changedData);

    api().post('myjobs/apidot/adDetailsOrder', { data: changedData })
      .then(res => {
        console.log(res);
        toast.success(res.data.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(err => {
        console.log(err);
        toast.error(err.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });


  };

  const layout = { labelCol: { span: 10 }, wrapperCol: { span: 10 } };


  return (<Main>
    <ToastContainer />
    <StyledForm form={form} onFinish={onSubmit} scrollToFirstError>

      <Label>
        Выберите категорию
      </Label>
      <Form.Item
        {...layout}
        name="category"
        rules={[{
          required: true, message: 'This is required',
        }]}
      >

        <StyledSelect
          showArrow={true}
          style={{ display: 'block !important' }}>
          <Option value="1">Разработка и IT</Option>
          <Option value="2">Дизайн</Option>
          <Option value="3">SEO и трафик</Option>
          <Option value="4">Соцсети и реклама</Option>
          <Option value="5">Тексты и переводы</Option>
          <Option value="6">Аудио, видео, съемка</Option>
        </StyledSelect>
      </Form.Item>


      <Label>
        Введите название проекта
      </Label>
      <Form.Item
        {...layout}
        name="projectName"
        rules={[{
          required: true, message: 'This is required',
        }, {
          max: 230, message: 'Value should be less than 230 character',
        }, {
          min: 10, message: 'Value should not be less than 10 character',
        }]}
      >

        <StyledInput type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
      </Form.Item>


      <Label>
        Введите описание проекта
      </Label>
      <Form.Item
        {...layout}
        name="description"
        rules={[{
          required: true, message: 'This is required',
        }, {
          min: 100, message: 'Value should be min less than 100 character',
        }, {
          max: 2000, message: 'Value should be max less than 2000 character',
        }]}
      >
        <StyledTextarea />
      </Form.Item>

      <Label>
        Введите стоимость проекта от и до
      </Label>
      <BoxFlex>
        <Form.Item
          name="sumMin"
          rules={[{
            required: true, message: 'This is required',
          },
          ]}
        >
          <StyledNumber
            // stringMode
            defaultValue={10000}
            min={10000}
            step={1000}
            max={12000000}
            formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
        </Form.Item>

        <Form.Item

          name="sumMax"
          rules={[{
            required: true, message: 'This is required',
          },
          ]}
        >
          <StyledNumber
            // stringMode
            min={10000}
            step={1000}
            max={12000000}
            formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
        </Form.Item>
      </BoxFlex>


      {/*<Button onClick={() => onSubmit} type="primary">Primary Button</Button>*/}
      <Form.Item>
        <div className="Button">
          <Button type="primary" htmlType="submit" size="medium">
            Submit
          </Button>
        </div>
      </Form.Item>
    </StyledForm>
  </Main>);
};

export default FormComponent;