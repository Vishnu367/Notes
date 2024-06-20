import React, { useEffect, useState } from 'react';

function CaretedAtConverter(props) {
  const createdDate = props.value;
  const [date, setDate] = useState('');

  useEffect(() => {
    if (createdDate) {
      const currentTimeInMilliSec = new Date().getTime();
      const createdAtInMilliSec = new Date(createdDate).getTime();
      const diffInCreatedTimeInMilliSec = currentTimeInMilliSec - (currentTimeInMilliSec - createdAtInMilliSec)

      if (diffInCreatedTimeInMilliSec <= (60 * 60 * 1000)) {  // 60 min * 60 sec *1000 milli sec
        const diffInMin = Math.floor(diffInCreatedTimeInMilliSec / (1000 * 60))
        setDate(`${diffInMin} min`);
      } else if ((24 * 60 * 60 * 1000) >= diffInCreatedTimeInMilliSec) {
        const diffInHours = Math.floor(diffInCreatedTimeInMilliSec / (1000 * 60 * 60 ))
        setDate(`${diffInHours} hr`);
      }else {
        const dateInArray = createdDate.split('-')
        const createdDateExchanger = (monthInNumber) => {
          const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
          return month[monthInNumber]
        } 
        const createdMonth = createdDateExchanger(Number(dateInArray[1]))
        const createdDay = Number(dateInArray[2])
        setDate(`${createdMonth} ${createdDay}`);
      }
    }
  }, [createdDate]);

  return (
    <span>{date}</span>
  );
}

export default CaretedAtConverter;
