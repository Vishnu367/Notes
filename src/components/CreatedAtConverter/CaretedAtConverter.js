import React, { useEffect, useState } from 'react';

function CaretedAtConverter(props) {
  const createdDate = props.value.date;
  const createdTime = props.value.time
  const [date, setDate] = useState('');

  // console.log(createdDate)

  useEffect(() => {
      const newDate = new Date()
      const currentTimeInMilliSec = newDate.getTime();
      const createdAtInMilliSec = new Date(createdDate + 'T' + createdTime).getTime();
      const diffInCreatedTimeInMilliSec = currentTimeInMilliSec - (createdAtInMilliSec)
      
      if (diffInCreatedTimeInMilliSec < (60 * 1000)) { // lessthan a min
        const diffInSec = Math.floor(diffInCreatedTimeInMilliSec / (1000))
        setDate(`${diffInSec === 0 ? 1 : diffInSec} sec ago`)
      } else if (diffInCreatedTimeInMilliSec <= (60 * 60 * 1000)) {  // 60 min * 60 sec *1000 milli sec // mints ago
        const diffInMin = Math.floor(diffInCreatedTimeInMilliSec / (1000 * 60))
        setDate(`${diffInMin} min ago`);
      } else if ((24 * 60 * 60 * 1000) >= diffInCreatedTimeInMilliSec) { // hrs ago
        const diffInHours = Math.floor(diffInCreatedTimeInMilliSec / (1000 * 60 * 60 ))
        setDate(`${diffInHours} hr ago`);
      }else {
        const dateInArray = createdDate.split('-') // [2023-06-27]
        const createdDateExchanger = (monthInNumber) => {
          const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          return month[monthInNumber - 1]
        } 
        const createdYear = Number(dateInArray[0])
        const createdMonth = createdDateExchanger(Number(dateInArray[1]))
        const createdDay = Number(dateInArray[2])
        //  Jun 27 (currentYear > createdYear ? createdYear : '')
        setDate(`${createdMonth} ${createdDay} ${newDate.getFullYear() > createdYear ? createdYear : ''}`);
      }
  }, [createdDate, createdTime]);

  return (
    <span>{date}</span>
  );
}

export default CaretedAtConverter;
