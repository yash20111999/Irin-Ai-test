import { notification } from 'antd';

notification.config({
  placement: 'topRight',
  bottom: 50,
  duration: 4,
});

export const successMsg = (msg, description) => {
  notification.success({
    message: msg,
    description,
  });
}

export const errorMsg = (msg, description) => {
  notification.error({
    message: msg,
    description,
  });
}
