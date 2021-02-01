import React from 'react';

const Orders = () => {
    const a = [1, 1, 1, 1, 1, 1]
    return (
        <section className='px-3 pb-4'>
            <table>
                <tr>
                    <th>Sir. No</th>
                    <th>Email</th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
                {
                    a.map((a, index) =>
                        <tr>
                            <td>{index+1}</td>
                            <td>moinuddin3188@gmail.com</td>
                            <td>Android</td>
                            <td>$50</td>
                        </tr>
                    )
                }
            </table>
        </section>
    );
};

export default Orders;