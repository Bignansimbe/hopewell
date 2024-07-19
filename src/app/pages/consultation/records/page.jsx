'use client'
import styles from "./record.module.css";
import SubPagesLayout from "../../layouts/subPagesLayout";
import Description from "@/app/components/description";
import LabRequestForm from "@/app/components/labrequestForm";
import WaitingList from "@/app/components/awaitingConsultation";
import PatientDetailsCard from "@/app/components/patientDetailscard";
import SearchInput from "@/app/components/searchInput";
import { useState } from "react";
import { useSelector } from "react-redux";





export default function Recordpage() {
  const [submittedValue, setSubmittedValue] = useState('');
  
  

    const handleFormSubmit = (value) => {
        setSubmittedValue(value);
        console.log(submittedValue)
    };
  return (
    <main className={styles.main}>
      <div className={styles.overlay}>
        <SubPagesLayout
          menu={<div className={styles.awaitin_consult_div}>
            <WaitingList/>
          </div>}

          title='hello'
          titleBarContent={
            <SearchInput 
            onSubmit={handleFormSubmit}
            />
          }
        >
          <div className={styles.body}>
            <div className={styles.left}>
              
              <PatientDetailsCard patientId={submittedValue} />
              
            </div>
            <div className={styles.right}>
              <div className={styles.rightdiv}>
                <fieldset className={styles.descriptionBox}>
                  <legend className={styles.right_legend}>Complaints</legend>
                  <div className={styles.desc_input_box}>
                    <Description />
                  </div>
                </fieldset>

                <fieldset className={styles.test_box}>
                  <legend className={styles.right_legend}>Test Request</legend>
                  <div className={styles.test_input_box}>
                    <LabRequestForm />
                  </div>
                </fieldset>

                <fieldset className={styles.test_box}>
                  <legend className={styles.right_legend}>Prescription</legend>
                  <div className={styles.test_input_box}>
                    <LabRequestForm />
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </SubPagesLayout>
      </div>
    </main>
  );
}
