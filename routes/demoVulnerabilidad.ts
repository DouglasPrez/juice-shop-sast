import { type Request, type Response } from 'express'

// Ejemplo corregido del laboratorio; esta función no se registra como ruta.
export function demoVulnerabilidad () {
  return (req: Request, res: Response) => {
    const codigo = req.query.codigo
    if (typeof codigo !== 'string') {
      res.status(400).json({ error: 'El parametro codigo debe contener texto JSON valido.' })
      return
    }

    let resultado: unknown
    try {
      resultado = JSON.parse(codigo)
    } catch {
      res.status(400).json({ error: 'El parametro codigo debe contener JSON valido.' })
      return
    }
    res.json({ resultado })
  }
}
