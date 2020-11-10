const create = async (url) => {
  try {
    let response = await fetch('/api/url', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        charset: 'UTF-8',
      },
      body: JSON.stringify(url),
    })

    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export { create }
