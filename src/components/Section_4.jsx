import React from 'react'
import { useRef, useEffect, useState } from 'react';
import $, { data } from 'jquery';
// import 'datatables.net';
// import 'datatables.net-dt/css/datatables.datatables.css';
import { Table } from './Table';

function Section_4() {
    const [table, setTable] = useState([])


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
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <h2 className='custom-font'>Get the Seat  price</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veniam.</p>

                    <div className="col-md-5 col-xs-5 mt-5">
                        <h5 className=''>World Class</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quisquam!</p>
                        <h5>Affordable</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quis?</p>

                    </div>

                </div>
                <div className="col-md-6 col-xs-12 mt-5">
                    {/* <table ref={tableRef} className="display" style={{ width: '100%' }}></table> */}
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default Section_4