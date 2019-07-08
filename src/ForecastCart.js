import React from 'react'

export default ({ forecast: { location: { name, country }, current: { temp_c, condition: {text, icon}, feelslike_c }, forecast: { forecastday } } }) => {
    const getDayOfWeek = date => {
        let dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
    let day = new Date()
    return (
        <div className='forecastCard'>
            <div className='cardHeader'>
                <div className='cityName'>{name}</div>
                <div className='condition'>{text}</div>
                <div className='temp'><img src={icon} style={{ width: '18%', marginRight: '5px' }} alt={text} />{temp_c}°</div>
                <div className='feelsLikeTemp'>Feels like {feelslike_c}°</div>
                <div className='bottomCardInfo'>Today {day.toDateString()}</div>
            </div>
            <div className='weekForecast'>
                {forecastday.map(({date, day: {condition: {icon, text}, maxtemp_c}}, index) => {
                    if(index === 0) return null
                    return (
                        <div className='day' key={date}>
                            <div className='dayDate'>{index === 1 ? 'Tomorrow' : getDayOfWeek(date)}</div>
                            <div className='dayInfo'><img src={icon} alt={text} />{maxtemp_c}°</div>
                        </div>
                    )
            })}
            </div>
        </div>
    )
}