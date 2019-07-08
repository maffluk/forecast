import React from 'react'

export default ({ forecast: { location: { name, country }, current: { temp_c, condition, feelslike_c }, forecast: { forecastday } } }) => {
    const getDayOfWeek = date => {
        let dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
    let day = new Date()
    console.log(forecastday)
    return (
        <div className='forecastCard'>
            <div className='cardHeader'>
                <div className='cityName'>{name}</div>
                <div className='condition'>{condition.text}</div>
                <div className='temp'><img src={condition.icon} style={{ width: '18%', marginRight: '5px' }} alt={condition.text} />{temp_c}°</div>
                <div className='feelsLikeTemp'>Feels like {feelslike_c}°</div>
                <div className='bottomCardInfo'>Today {day.toDateString()}</div>
            </div>
            <div className='weekForecast'>
                {forecastday.map((item, index) => {
                    if(index === 0) return null
                    return (
                        <div className='day' key={item.date}>
                    <div className='dayDate'>{index === 1 ? 'Tomorrow' : getDayOfWeek(item.date)}</div>
                    <div className='dayInfo'><img src={item.day.condition.icon} alt={item.day.condition.text} />{item.day.avgtemp_c}°</div>
                </div>
                )
            })}
            </div>
        </div>
    )
}