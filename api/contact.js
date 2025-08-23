  // Get data from the request body
  const { name, email, message } = request.body;

  // Here you can add your backend logic

  response.status(200).json({
    body: request.body,
    message: 'Your message was sent successfully!',
  });
}
