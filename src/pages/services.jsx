const Services = () => {
    return(
        <div className='w-full h-100% pt-32  text-orange-200 px-4 bg-[#8d450c]'>
            <h1 className="text-4xl font-bold text-center pb-4">Church Services Schedule</h1>

            <div className="container-1 pb-8">
                <h2 className="text-2xl text-center">Monday: Week Start Prayer</h2>
                <p className="text-2xl text-center">Time: 18h00</p>
                <p className="text-center">
                    Kickstart your week with prayer.Every Monday we come together to pray for guidance and
                    strength as we begin a new week.
                </p> 
            </div>

            <div className="container-2 pb-8">
                <h2 className="text-2xl text-center">Wednesday: Midweek Service</h2>
                <p className="text-2xl text-center">Time: 18:30</p>
                <p className="text-center">
                    Join us for a powerful time of prayer and worship every Wednesday evening as
                    we seek God's presence together.
                </p>
            </div>
            <div className="container-3 pb-8">
                <h2 className="text-2xl text-center">Friday: Youth Service</h2>
                <p className="text-2xl text-center">Time: 18:00</p>
                <p className="text-center">
                    A vibrant service dedicated to the youth, filled with dynamic worship, relevant teachings,
                    and fellowship.
                </p>
            </div>
            <div className="container-4 pb-20">
                <h2 className="text-2xl text-center">Sunday: Main Service</h2>
                <p className="text-2xl text-center">Time: 10:30</p>
                <p className="text-center">
                    Our main service for the whole congregation. Come and be blessed by the Word, worship,
                    and fellowship with others.
                </p>
            </div>
    </div>
    )
}
; export default Services;