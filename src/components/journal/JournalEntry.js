import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div className="journal__entry-picture"  style={ { backgroundSize: 'cover', backgroundImage:'url(https://midu.dev/images/wallpapers/javascript-grande-horizontal-4k.png)' } }>

            </div>

            <div className="journal__entry-body" >

                <p className="journal__entry-title" > Nuevo entry </p>
                <p className="journal__entry-content" > -**************************    </p>

            </div>


            <div className="journal__entry-date-box" >
                <span>Monday</span>
                <h4>28</h4>
            </div>
            
        </div>
    )
}
