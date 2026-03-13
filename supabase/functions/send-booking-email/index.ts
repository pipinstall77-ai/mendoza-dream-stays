import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  guests: string;
  property?: string;
  checkIn?: string;
  checkOut?: string;
  nights?: number;
  estimatedTotal?: number;
  comments?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: BookingRequest = await req.json();

    if (!data.name || !data.email || !data.phone) {
      throw new Error("Faltan campos obligatorios");
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #8B6914; border-bottom: 2px solid #8B6914; padding-bottom: 10px;">
          🏠 Nueva Consulta de Reserva
        </h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">👤 Nombre:</td><td style="padding: 8px;">${data.name}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">📧 Email:</td><td style="padding: 8px;">${data.email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">📱 Teléfono:</td><td style="padding: 8px;">${data.phone}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">👥 Huéspedes:</td><td style="padding: 8px;">${data.guests}</td></tr>
          ${data.property ? `<tr><td style="padding: 8px; font-weight: bold;">🏡 Propiedad:</td><td style="padding: 8px;">${data.property}</td></tr>` : ''}
          ${data.checkIn ? `<tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">📅 Check-in:</td><td style="padding: 8px;">${data.checkIn}</td></tr>` : ''}
          ${data.checkOut ? `<tr><td style="padding: 8px; font-weight: bold;">📅 Check-out:</td><td style="padding: 8px;">${data.checkOut}</td></tr>` : ''}
          ${data.nights ? `<tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">🌙 Noches:</td><td style="padding: 8px;">${data.nights}</td></tr>` : ''}
          ${data.estimatedTotal ? `<tr><td style="padding: 8px; font-weight: bold;">💰 Total Estimado:</td><td style="padding: 8px;">$${data.estimatedTotal.toLocaleString()} ARS</td></tr>` : ''}
        </table>
        ${data.comments ? `<div style="margin-top: 16px; padding: 12px; background: #f0f0f0; border-radius: 8px;"><strong>💬 Comentarios:</strong><br/>${data.comments}</div>` : ''}
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Reservas <onboarding@resend.dev>",
      to: ["info@grupo-nexus.com.ar"],
      subject: `Nueva consulta de reserva - ${data.name}${data.property ? ` - ${data.property}` : ''}`,
      html: htmlContent,
    });

    console.log("Booking email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending booking email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
