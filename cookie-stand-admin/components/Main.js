import React, { useState } from "react";
import CreateForm from './CreateForm.js';
import ReportTable from './ReportTable.js';
import Footer from './Footer'

export default function Main() {
    const [report, setallstores] = useState([])
    const [totals, setbranchestotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [workingHours, setworkingHours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])

    function submitHandler(event) {
        event.preventDefault();
        let minimum = parseInt(event.target.minimum.value)
        let maximum = parseInt(event.target.maximum.value)
        let average = parseInt(event.target.average.value)

        let sum_nums = 0
        const store = {
            location: event.target.location.value,
            hourlySales: workingHours.map(() => Math.ceil(average * (Math.ceil(Math.random() * (maximum - minimum) + minimum)))),
        }

        for (let i = 0; i < store.hourlySales.length; i++) {
            sum_nums = sum_nums + store.hourlySales[i]
        }
        store.total = sum_nums

        setallstores([...report, store])


        let total_sum_nums = totals.map((item, idx) => {
            if (idx === totals.length - 1) {
                return item + store.total
            }
            return item + store.hourlySales[idx]
        })

        setbranchestotals(total_sum_nums)

    }
    return (
        <>
            <main>
                
                <CreateForm submitHandler={submitHandler} />
                <ReportTable report={report} workingHours={workingHours} totals={totals} />
                <Footer report={report} />

            </main>
        </>
    )
}