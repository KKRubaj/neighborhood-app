const apiUrl = "https://api.foursquare.com/v2/venues/"

const par ={
  ll: '52.229676,21.012229',
  query: 'theater',
  limit: 10,
  cl_id: 'XYPPU0PNXHCYGI4CIBS5KBD4Z34TSUBI1IA30CLPAAIQAK4V',
  cl_secret: 'U4GLUALGZ2MIV5VU5O4BJU10QB4ICDLJ2NOMAQEXA1T1FBG0',
  v: 20180823
}

export const getLocations = () =>
  fetch(`${apiUrl}explore?client_id=${par.cl_id}&client_secret=${par.cl_secret}&v=${par.v}&limit=${par.limit}&ll=${par.ll}&query=${par.query}`)
  .then(res => {
  //  console.log(res)
    return res.json();
  })

export const getLocationDetails = (id) =>
  fetch(`${apiUrl}${id}?&client_id=${par.cl_id}&client_secret=${par.cl_secret}&v=${par.v}`)
  .then(res => {
  //  console.log(res)
    return res.json();
  })
