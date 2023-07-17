import "./notification.css";
import useNotification from "./useNotification";
const Notification = () => {
  const { handleNotification } = useNotification();
  const handleButtonClick = (e) => {
    const type = e.target.getAttribute("data-action");
    handleNotification({
      type,
      msg: `${type.toUpperCase()} Notification`
    });
  };
  return (
    <main className="main">
      <h2>Add Notification </h2>
      <div className="notificationBtnContainer">
        <button
          data-action="info"
          className="info btn"
          onClick={handleButtonClick}
        >
          {" "}
          Info
        </button>
        <button
          data-action="success"
          className="success btn"
          onClick={handleButtonClick}
        >
          {" "}
          Success
        </button>
        <button
          data-action="warning"
          className="warning btn"
          onClick={handleButtonClick}
        >
          {" "}
          Warning
        </button>
        <button
          data-action="error"
          className=" error btn"
          onClick={handleButtonClick}
        >
          {" "}
          Error
        </button>
      </div>
      <div className="notifications"></div>
    </main>
  );
};

export default Notification;
