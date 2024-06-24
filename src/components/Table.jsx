import React, { useEffect, useState } from 'react';

export const Table = () => {
    const [tableData, setTableData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://viaje.ai/seatinfo_api/');
            const jsonData = await response.json();
            setTableData(jsonData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Seat No</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((seat, index) => (
                        <tr key={index}>
                            <td>{seat.seat_no}</td>
                            <td>{seat.price}</td>
                            <td>{seat.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
