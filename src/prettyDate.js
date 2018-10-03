export const prettyDate = (date) => {
  const d = new Date(date)

  const days = [
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi'
  ]

  const month = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'décembre'
  ]

  return `${days[d.getDay()]} ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`
}
