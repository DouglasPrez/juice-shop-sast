import { type Request, type Response } from 'express'

// Ejemplo intencional del laboratorio; esta función no se registra como ruta.
export function demoVulnerabilidad () {
  return (req: Request, res: Response) => {
    const codigo = String(req.query.codigo ?? '')
    const resultado = eval(codigo) // eslint-disable-line no-eval
    res.json({ resultado })
  }
}
