import { connect } from 'react-redux';

const Notification = (props) => {
  const howItsRendered = props.notification[0].message === '' ? 'none' : '';

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: `${howItsRendered}`,
  };
  return <div style={style}>{props.notification[0].message}</div>;
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(mapStateToProps)(Notification);
