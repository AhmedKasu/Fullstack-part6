import { useDispatch, useSelector } from 'react-redux';
import { resetNotification } from '../reducers/notificationReducer';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  const howItsRendered = notification[0].message === '' ? 'none' : '';

  setTimeout(() => {
    dispatch(resetNotification());
  }, 5000);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: `${howItsRendered}`,
  };
  return <div style={style}>{notification[0].message}</div>;
};

export default Notification;
