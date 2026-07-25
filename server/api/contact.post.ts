export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message } = body

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  // Cloudflare Workers compatible fetch to FormSubmit API without browser CORS/redirect issues
  try {
    const response = await fetch('https://formsubmit.co/ajax/contact@alejandroferran.dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Message from ${name}`
      })
    })

    const data = await response.json()
    return { success: true, data }
  } catch (error: any) {
    return createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to send message',
    })
  }
})
