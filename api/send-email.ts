import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface CartItem {
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

interface ReservationData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface RequestBody {
  reservationData: ReservationData
  cartItems: CartItem[]
  totalPrice: number
}

function formatCartItemsHtml(items: CartItem[]): string {
  return items
    .map((item) => {
      let itemHtml = `<tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${(item.price * item.quantity).toFixed(2)}€</td>
      </tr>`
      if (item.personalization) {
        itemHtml += `<tr>
          <td colspan="3" style="padding: 4px 8px; background: #f9f9f9; font-size: 12px; color: #666;">
            Personnalisation: ${item.personalization.firstName} ${item.personalization.lastName}
            ${item.personalization.customMessage ? ` - "${item.personalization.customMessage}"` : ''}
          </td>
        </tr>`
      }
      return itemHtml
    })
    .join('')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { reservationData, cartItems, totalPrice } = req.body as RequestBody

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Nouvelle Réservation - Hændy Kits
        </h1>

        <h2 style="color: #555;">Informations Client</h2>
        <table style="width: 100%; margin-bottom: 20px;">
          <tr>
            <td style="padding: 5px 0;"><strong>Nom:</strong></td>
            <td>${reservationData.firstName} ${reservationData.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 5px 0;"><strong>Email:</strong></td>
            <td><a href="mailto:${reservationData.email}">${reservationData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 5px 0;"><strong>Téléphone:</strong></td>
            <td><a href="tel:${reservationData.phone}">${reservationData.phone}</a></td>
          </tr>
        </table>

        <h2 style="color: #555;">Articles Réservés</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background: #f5f5f5;">
              <th style="padding: 10px; text-align: left;">Article</th>
              <th style="padding: 10px; text-align: center;">Quantité</th>
              <th style="padding: 10px; text-align: right;">Prix</th>
            </tr>
          </thead>
          <tbody>
            ${formatCartItemsHtml(cartItems)}
          </tbody>
          <tfoot>
            <tr style="background: #007bff; color: white;">
              <td colspan="2" style="padding: 10px;"><strong>Total</strong></td>
              <td style="padding: 10px; text-align: right;"><strong>${totalPrice.toFixed(2)}€</strong></td>
            </tr>
          </tfoot>
        </table>

        <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          Cette réservation a été effectuée depuis le site Hændy Kits.
        </p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: 'Hændy Kits <onboarding@resend.dev>',
      to: ['omardahmen@gmail.com'],
      subject: `Nouvelle Réservation - ${reservationData.firstName} ${reservationData.lastName}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}