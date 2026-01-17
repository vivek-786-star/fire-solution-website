import React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

const containerStyle: React.CSSProperties = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  backgroundColor: "#f4f4f4",
  margin: "0",
  padding: "0",
  width: "100%",
};

const wrapperStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#ffffff",
  border: "1px solid #dddddd",
  borderRadius: "8px",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  paddingBottom: "20px",
  borderBottom: "1px solid #dddddd",
};

const logoStyle: React.CSSProperties = {
  maxWidth: "150px",
  margin: "0 auto",
};

const contentStyle: React.CSSProperties = {
  padding: "20px 0",
};

const headingStyle: React.CSSProperties = {
  fontSize: "24px",
  color: "#333333",
  margin: "0 0 20px",
};

const detailRowStyle: React.CSSProperties = {
  marginBottom: "10px",
  lineHeight: "1.6",
};

const strongStyle: React.CSSProperties = {
  color: "#333333",
  marginRight: "8px",
};

const messageStyle: React.CSSProperties = {
  marginTop: "20px",
  padding: "15px",
  backgroundColor: "#f9f9f9",
  border: "1px solid #eeeeee",
  borderRadius: "4px",
};

const footerStyle: React.CSSProperties = {
  marginTop: "20px",
  paddingTop: "20px",
  borderTop: "1px solid #dddddd",
  textAlign: "center",
  fontSize: "12px",
  color: "#999999",
};

export const ContactEmailTemplate = ({
  name,
  email,
  phone,
  company,
  service,
  message,
}: ContactEmailTemplateProps): string => {
  // Inlining CSS for email client compatibility
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; width: 100%;">
      <table width="100%" border="0" cellPadding="0" cellSpacing="0" style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 8px;">
        <tr>
          <td align="center" style="padding-bottom: 20px; border-bottom: 1px solid #dddddd;">
            <table width="100%" border="0" cellPadding="0" cellSpacing="0">
              <tr>
                <td align="center" style="padding-bottom: 15px;">
                  <table border="0" cellPadding="0" cellSpacing="0" style="display: inline-table;">
                    <tr>
                      <td valign="middle" style="padding-right: 15px;">
                        <img src="https://www.ramdasgfabricator.com/logo-removebg.png" alt="Ramdas G Fabricator" style="max-width: 80px; height: auto; display: block;">
                      </td>
                      <td valign="middle">
                        <h2 style="margin: 0; font-size: 22px; color: #333333; font-weight: bold; white-space: nowrap;">Ramdas G Fabricator</h2>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="font-size: 12px; color: #666666; line-height: 1.5;">
                  <p style="margin: 3px 0;">
                    <strong>Email:</strong> <a href="mailto:ramdasgfabricator@gmail.com" style="color: #0066cc; text-decoration: none;">ramdasgfabricator@gmail.com</a> | 
                    <strong>Website:</strong> <a href="https://www.ramdasgfabricator.com" style="color: #0066cc; text-decoration: none;">www.ramdasgfabricator.com</a>
                  </p>
                  <p style="margin: 3px 0;">
                    <strong>Phone:</strong> <a href="tel:+918080848849" style="color: #0066cc; text-decoration: none;">8080848849</a> | <a href="tel:+918250478736" style="color: #0066cc; text-decoration: none;">8250478736</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px 0;">
            <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">New Inquiry Received</h1>
            <p style="margin-bottom: 10px; line-height: 1.6;"><strong style="color: #333333; margin-right: 8px;">From:</strong> ${name}</p>
            <p style="margin-bottom: 10px; line-height: 1.6;"><strong style="color: #333333; margin-right: 8px;">Email:</strong> ${email}</p>
            ${phone ? `<p style="margin-bottom: 10px; line-height: 1.6;"><strong style="color: #333333; margin-right: 8px;">Phone:</strong> ${phone}</p>` : ""}
            ${company ? `<p style="margin-bottom: 10px; line-height: 1.6;"><strong style="color: #333333; margin-right: 8px;">Company:</strong> ${company}</p>` : ""}
            <p style="margin-bottom: 10px; line-height: 1.6;"><strong style="color: #333333; margin-right: 8px;">Service of Interest:</strong> ${service}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border: 1px solid #eeeeee; border-radius: 4px;">
              <strong style="color: #333333; margin-right: 8px;">Message:</strong>
              <p style="margin-top: 5px; margin-bottom: 0;">${message}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td align="center" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dddddd; font-size: 12px; color: #999999;">
            <p>This email was sent from the contact form on your website.</p>
            <p>Fire Solution</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};
