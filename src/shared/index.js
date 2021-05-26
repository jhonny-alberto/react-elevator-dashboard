let elevatorEntries = []

function dates(entries) {
  return entries.map(entry => {
    return entry._date
  })
}
function floors(entries) {
  return entries.map(entry => {
    return entry.floor
  })
}
function filter_date(entries, _date) {
  return entries.filter(entry => {
    return entry._date === _date
  })
}
function filter_floor(entries, floor) {
  return entries.filter(entry => {
    return Math.abs(parseInt(entry.floor) === parseInt(floor))
  })
}
function split_by_date(entries) {
  let results = {}
  dates(entries).forEach(_date => {
    results[_date] = filter_date(entries, _date)
  })
  return results
}
function split_by_floor(entries) {
  let results = {}
  floors(entries).forEach(floor => {
    results[floor] = filter_floor(entries, floor)
  })
  return results
}
function getFormattedDate(strDateTime) {
  return strDateTime.split(' ')[0].replace(/\//g, '-')
}
function operation_time(item) {
  if (item.start === null || item.end === null)
    return -1
  return parseInt(item.end.date - item.start.date)
}
function is_anamoly(item) {
  if (item.start === null || item.end === null)
    return true
  if (operation_time(item) > 60 * 10)
    return true
  if (operation_time(item) < 0)
    return true
  return false
}
function average(operations) {
  let sum = 0
  operations.forEach((operation) => {
    if (!is_anamoly(operation)) sum += operation_time(operation)
  })
  return sum / operations.length
}
function median(operations) {
  let sum = 0
  operations.forEach((operation) => {
    if (!is_anamoly(operation)) sum += operation_time(operation)
  })
  return sum / 2
}
function getElevatorLogEntry(item) {
  return {
    id: item[0],
    device_id: item[1],
    floor: item[2],
    type: item[3],
    _date: item[4],
    date: new Date(item[4]).getTime() / 1000,
  }
}
export function getElevatorLogEntries(data) {
  let result = {}
  let key = ''
  elevatorEntries = []

  data.forEach((item, index) => {
    if(index === 0) return

    if (key !== getFormattedDate(item[4])) {
      if (key !== '') result[key] = elevatorEntries
      key = getFormattedDate(item[4])
      elevatorEntries = []
    }
    
    elevatorEntries.push(getElevatorLogEntry(item))
  })
  if (!(key in result) && elevatorEntries.length > 0)
    result[key] = elevatorEntries
  
  let elevatorResult = {}

  for (let k in result) {
    let results = []
    let start = null
    let other = []

    // const dates = split_by_date(result[k])
    const floors = split_by_floor(result[k])

    for(let key in floors) {
      floors[key].forEach((resultItem) => {
        if (resultItem.type === 'button_call' && start === null)
          start = resultItem
        else if (resultItem.type === 'button_call' && start !== null)
          other.push(resultItem)
        else {
          results.push({
            start: start,
            other: other,
            end: resultItem
          })
          start = null
          other = []
        }
      })
    }
    const startTime =
      result[k][0]._date.split(' ')[1].split(':')[0] + ':' +
      result[k][0]._date.split(' ')[1].split(':')[1]
    const endTime =
      result[k][result[k].length - 1]._date.split(' ')[1].split(':')[0] + ':' +
      result[k][result[k].length - 1]._date.split(' ')[1].split(':')[1]
    const averageNum = parseFloat(average(results)).toFixed(2)
    const medianNum = parseFloat(median(results)).toFixed(2)
    elevatorResult[k] = { startTime, endTime, ewtTime: averageNum }
  }
  return elevatorResult
}
