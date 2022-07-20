import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div style={notification.content.length > 3 ? style : null}>
      {notification.content.length > 3 ? notification.content : null}
    </div>
  );
};

export default Notification;
