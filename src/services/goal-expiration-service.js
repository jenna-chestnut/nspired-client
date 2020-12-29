export default function getTimeLeft(expiration) {

    let now = new Date();

    let due = new Date(expiration);

    let timeDifference = due.getTime() - now.getTime();

    let daysDiff = Math.floor(timeDifference / (1000 * 3600 * 24 ));

    let dateColor;
    let timeLeft = `${daysDiff} days left` ;

    switch(true) {
      case (daysDiff >= 5) :
        dateColor = 'green';
        break;
      case (daysDiff >= 2 && daysDiff < 5) :
        dateColor = 'gold';
        break;
      case (daysDiff <= 1) :
        dateColor = 'red';
        break;
      case (daysDiff < 0) :
        dateColor = 'grey';
        timeLeft = `Goal expired`;
        break;
      default:
        dateColor = 'black';
        break;
    }

    return <span style={{color: dateColor}}>
              {timeLeft}
           </span>
  }