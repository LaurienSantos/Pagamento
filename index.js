const express = require('express');
const app = express();

const stripe = require('stripe')('sk_test_51PcuMM2KhA7P0V4EYcYPRSLz365tv7PbAizA9L60pci2smN9aq9jY4jooQ384I3pIp8jlsIfA4EHJVU3leuCMmdr00OlTXalwA');

app.get('/api', (req, res) =>{
  const apiKey = req.query.apiKey;

  res.send({ data: '🔥🔥🔥🔥🔥🔥🔥🔥'});
});

app.post('/checkout', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1PcubD2KhA7P0V4EGLGbSv8X',
        },
      ],
      success_url:
        'http://YOUR-WEBSITE/dashboard?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://YOUR-WEBSITE/error',
    });
  
    res.send(session);
  });
  

app.listen(8080, () => console.log('alive on http://localhost:8080'));