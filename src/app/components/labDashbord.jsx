"use client";
import styles from "./componentStyles/labDasboard.module.css";
import { useState } from "react";
import LabOverView from "./overviewBoard";
import Image from "next/image";

export default function LabDashboard() {
  const [activeIndex, setActiveIndex] = useState(null); // State to track which container is active

  const names = [
    "Dashboard",
    "Lab Requests",
    "Lab Results",
    "Sent Results",
    "Sign Out",
  ]; // List of names

  // Function to handle name click
  const handleClick = (index) => {
    setActiveIndex(index); // Set the active index to the clicked name's index
  };

  // Function to render content based on the active index
  const renderContent = (index) => {
    switch (index) {
      case 0:
        return <LabOverView />;
      case 1:
        return <p>Bob's unique content: Consectetur adipiscing elit.</p>;
      case 2:
        return <p>Charlie's content: Integer nec odio. Praesent libero.</p>;
      case 3:
        return <p>David's content: Sed cursus ante dapibus diam.</p>;
      case 4:
        return (
          <p>
            Eve's content: Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logoBox}>
            <div className={styles.logo}>
              <Image
                src="/assets/clinic_logo2.png"
                width={200}
                height={140}
                alt="logo"
              />
            </div>
          </div>
          <div className={styles.menuBox}>
            <div className={styles.menuList}>
              <ul className={styles.names}>
                {names.map((name, index) => (
                  <li
                    key={index}
                    className={activeIndex === index ? styles.active : ""}
                    onClick={() => handleClick(index)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {names.map((name, index) => (
            <div
              key={index}
              className={styles.container}
              style={{ display: activeIndex === index ? "block" : "none" }}
            >
              {renderContent(index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
