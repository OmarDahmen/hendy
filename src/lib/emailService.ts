export interface CartItem {
  id: number | string
  name: string
  price: number
  quantity: number
  personalization?: {
    firstName: string
    lastName: string
    customMessage: string
  }
}

export interface ReservationData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export async function sendReservationEmail(
  reservationData: ReservationData,
  cartItems: CartItem[],
  totalPrice: number
): Promise<boolean> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservationData,
        cartItems,
        totalPrice,
      }),
    })

    return response.ok
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}