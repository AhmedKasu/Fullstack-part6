import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const howItsRendered = notification[0].message === '' ? 'none' : '';

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: `${howItsRendered}`,
  };
  return <div style={style}>{notification[0].message}</div>;
};

export default Notification;
