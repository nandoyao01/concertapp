import type { HttpContext } from '@adonisjs/core/http'

import Done from '#models/done';
// import { v4 as uuidv4 } from 'uuid';
// import jsPDF from 'jspdf';

export default class PaymentsController {
  /**
   * Display a list of resource
   */
  async index({view}: HttpContext) {
    const dones = await Done.all();
    return view.render('pages/admin/index', { dones });
  }

  
  // private generatePDFfromHTML(htmlContent: string, outputPath: string) {
  //   const doc = new jsPDF();
  //   doc.text(htmlContent, 10, 10);
  //   doc.save(outputPath);
  //   console.log('PDF generated successfully');
  // }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
   const payment = new Done();
   payment.nom = request.input('nom');
   payment.prenom = request.input('prenom');
   payment.numero = request.input('numero');
   payment.email = request.input('email');
   payment.ticket_code = request.input('ticket_code');

   //Sauvegarder payment
   await payment.save();
   return response.redirect().back();


  


  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const ticket = await Done.findOrFail(params.id);
    return view.render('pages/admin/ticket', { ticket });
  }

  /**
   * Edit individual record
   */
 

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */

}