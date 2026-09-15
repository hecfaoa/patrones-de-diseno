export class ServicioPagos {
    procesarCobro(monto: number) { console.log(`💳 Stripe: Cobrando $${monto} con éxito.`); return true; }
}