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
      case (daysDiff <= 1 && daysDiff > 0) :
        dateColor = 'red';
        break;
      case (daysDiff < 0) :
        dateColor = '#00000090';
        timeLeft = `Goal expired`;
        break;
      default:
        dateColor = 'black';
        break;
    }

    console.log(daysDiff < 0);

    return <span style={{color: dateColor}}>
              {timeLeft}
           </span>
  }

export function getFutureExpire(val) {
  let expires = new Date(new Date().setDate(new Date().getDate() + parseInt(val)));
  return expires.toISOString();
}