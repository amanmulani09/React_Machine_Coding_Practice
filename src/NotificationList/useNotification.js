import { useState } from "react";
import "./notification.css";

const useNotification = () => {
  const notificationData = {
    info: [],
    success: [],
    warning: [],
    error: []
  };
  const handleNotification = ({ type, msg }) => {
    console.log(type, msg);
    notificationData[type].push(msg);
    const notifications = document.querySelector(".notifications");
    const notificationBox = document.createElement("div");
    const notificationProgress = document.createElement("div");
    const notificationText = document.createElement("h5");

    notificationBox.classList.add("notificationBox");
    notificationBox.classList.add(type.toLowerCase());
    notificationProgress.classList.add("notificationProgress");
    notificationProgress.classList.add(type.toLowerCase());

    notificationText.innerText = msg;

    notificationBox.appendChild(notificationText);
    notificationBox.appendChild(notificationProgress);

    notifications.appendChild(notificationBox);

    notificationBox.addEventListener("mouseover", () => {
      notificationBox.classList.add("pause");
    });

    notificationBox.addEventListener("mouseleave", () => {
      notificationBox.classList.remove("pause");
    });

    let currentWidth = 10;
    let timer = setInterval(() => {
      if (currentWidth >= 100) {
        clearInterval(timer);
        notificationBox.remove();
        console.log("if timer");
      }
      if (notificationBox) {
        if (!notificationBox.classList.contains("pause")) {
          currentWidth++;
          notificationProgress.style.width = `${currentWidth}%`;
        }
      }
    }, 30);
  };
  return { handleNotification };
};

export default useNotification;
