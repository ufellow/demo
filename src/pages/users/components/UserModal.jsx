import { Modal, Form,  Input} from 'antd';

const UserModal = (props) => {
  const record = props.record;
  const [form] = Form.useForm();
  form.setFieldsValue(record)
     return (     
        <Modal
          title={record.nickname}
          visible={props.visible}
          onOk={props.handleOk}
          onCancel = { props.handleCancel}
        >
          <Form name="Edit" form={form}  >
            <Form.Item
              label="Nickname"
              name="nickname"
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Signature"  name="signature"  >
              <Input />
            </Form.Item>
            <Form.Item
              label="Followeds"  name="followeds"  >
              <Input />
            </Form.Item>
            <Form.Item
              label="Followed"  name="followed"  >
              <Input />
            </Form.Item>
           </Form>        
        </Modal>
      
    );
}
export default UserModal;