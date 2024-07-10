'use client';
import styles from './componentStyles/nameCard.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function NameCard (prop) {
   

    return (
        <div className={styles.card}>
            <div className={styles.imgCard}></div>
            <div className={styles.profile}>
                <h1>ID: {prop.ID}</h1>
                <h1>First name: {prop.FirstName}</h1>
                <h1>Last name: {prop.LastName}</h1>
                <h1>Age: {prop.Age}</h1>
                <h1>Gender: {prop.Gender}</h1>
                <h1>Blood Group: {prop.ID}</h1>
            </div>
            
        </div>

    )
}