import React from 'react'
import { useRef, useEffect, useState } from 'react';
import $, { data } from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/datatables.datatables.css';

function Section_4() {
    const [table, setTable] = useState([])
    // const data = [
    //     { name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: 61, startDate: "2011/04/25", salary: "$320,800" },
    //     { name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: 63, startDate: "2011/07/25", salary: "$170,750" },
    //     { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009/01/12", salary: "$86,000" },
    //     { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, startDate: "2012/03/29", salary: "$433,060" },
    //     { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008/11/28", salary: "$162,700" },
    //     { name: "Doris Wilder", position: "Sales Assistant", office: "Sydney", age: 23, startDate: "2010/09/20", salary: "$85,600" }
    // ];

    const fetchData = async () => {
        let response = await fetch('https://viaje.ai/seatinfo_api/')
        response = await response.json()
        setTable(response.data)
    }
    const tableRef = useRef();
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (table.length > 0 && tableRef.current) {
            const tableInstance = $(tableRef.current).DataTable({
                data: table,
                columns: [
                    { title: "Seat No", data: "seat_no" },
                    { title: "Price", data: "price" },
                    { title: "Status", data: "status" }
                ]
            });

            return () => {
                tableInstance.destroy();
            };
        }
    }, [table]);


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <h3>Get the Seat  price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veniam.</p>

                    <div className="col-md-5 col-xs-5">
                        <h5>World Class</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quisquam!</p>
                        <h5>Affordable</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quis?</p>

                    </div>

                </div>
                <div className="col-md-6 col-xs-12">
                    <table ref={tableRef} className="display" style={{ width: '100%' }}></table>

                </div>
            </div>
        </div>
    )
}

export default Section_4