// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'

import Done from '#models/done';


export default class GticketsController {
    public async generateTicket({ params, view }: HttpContext) {
    
        // console.log("Before Generation")
    
        // const htmlContent = '<h1>Hello World. This is custom HTML content.</h1>';
        // this.generatePDFfromHTML(htmlContent, '/uploads/custom.pdf');
        
        // const ticket = await Done.find(params.id)
    
        // if (!ticket) {
          // return response.status(404).json({ message: "Utilisateur non trouvé" })
        // }
    
        // Générer un code unique pour le ticket
        // ticket.ticket_code = uuidv4()
        // await ticket.save()
    
        // return response.json({ isSuccess: true, message: "Success" })

        const done = await Done.findOrFail(params.id)
        return view.render('pages/admin/ticket', { done });
      }
    
}