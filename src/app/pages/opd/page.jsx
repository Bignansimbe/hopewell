"use client";

import DashboardLayout from "../layouts/DashboardLayout";
import styles from "./opd.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Providers from "@/app/redux/provider";
import { fetchPatientsData } from "../../redux/slices/patientSlice";
import Table from "../../components/table";
import SearchComponent from "../../components/searchBar";
import BookingsForm from "@/app/components/bookings";

export default function Opd() {
  const patients = useSelector((state) => state.patients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatientsData());
    console.log("patients", patients);
  }, [dispatch, patients]);

  return (
    <main className={styles.main}>
      <DashboardLayout
        backgoundImage="./public/assets/sethoscope.jpg"
        recent="Recent bookings"
        head="OPD"
        link="./registerpatient"
        tableData={<Table/>}
        menuList={
          <>
            <li className={styles.searchBox}>
              <SearchComponent placeholder="Search..." />
            </li>
            <li>
            <BookingsForm/>
            </li>
          </>
        }
      />
    </main>
  );
}
