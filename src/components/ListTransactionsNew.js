import React from 'react'
import { PaginateProductReducers } from './layout/pages/UI/PaginateProductReducers'
import { Footer } from './layout/pages/UI/Footer'
export const ListTransactionsNew = () => {
    return (
        <div>
            <div >
                <PaginateProductReducers
                />
            </div>
            <section id="footer">
                <Footer />

            </section>
        </div>
    )
}
